import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormModal from './FormModal';
import UpdateFormModal from './UpdateFormModal';

export class Myreviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      UpdateReviewObj: {},
      displayAddModal: false,
      displayUpdateModal: false,
    };
  }

  
  componentDidMount = () => {
    
    const userEmail = this.props.auth0.user.email;
    axios.get(`${process.env.REACT_APP_SERVER}/reviews?email=${userEmail}`).then((axiosResponse) => { // .then access the 
      // console.log(axiosResponse.data); // to access the axios response data you need to target the .data property
      this.setState({
        reviews: axiosResponse.data
      });
    }).catch(error => alert(error)); // will execute if the promise was rejected, basically something going wrong
  };


  handelDisplayModal = () => {
    this.setState({ displayAddModal: !this.state.displayAddModal });
  }

 
  handelDisplayUpdateModal = (catObject) => {
    this.setState({
      displayUpdateModal: !this.state.displayUpdateModal,
      UpdateReviewObj: catObject
    });
  }

  /**
   * Handel the submission of a new cat
   */
  handelAddCatForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal(); // hide the modal after form submission

    const body = {
      email: this.props.auth0.user.email, // we are getting the email of the user from auth0
      cat_name: e.target.catName.value,
      cat_breed: e.target.catBreed.value,
      cat_img: e.target.catImage.value,
    };

    axios.post(`${process.env.REACT_APP_SERVER}/review`, body).then(axiosResponse => {
      // once we get the new added cat from the server, we are going to push it to our reviews array
      // console.log(axiosResponse.data);
      this.state.reviews.push(axiosResponse.data);
      this.setState({
        reviews: this.state.reviews
      });
    }).catch(error => alert(error));
  }

  /**
   * 
   * Delete Cat function
   */

  handelDeleteCat = (catId) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/review/${catId}`).then(res => {
      // console.log(res.data);
      if (res.data.ok === 1) {
        // once the item is deleted on the backend
        // create a temp var that will contain all of the reviews except the cat the got deleted
        // then update the state to re-render

        const tempCatObj = this.state.reviews.filter(cat => cat._id !== catId);
        this.setState({
          reviews: tempCatObj
        });
      }
    }).catch(error => alert(error))
  }

  updatereviewsArrOfObjectState = (newreviewsArr) => {
    this.setState({ cat: newreviewsArr });
  }

  render() {
    return (
      <>
        <br />
        <h1>My reviews! 🐱</h1>
        <br />
        {/* Button used to activate the modal */}
        <Button variant="secondary" onClick={() => this.handelDisplayModal()}>Add a Cat</Button>

        {/* The Add form Modal */}
        <FormModal
          show={this.state.displayAddModal}
          handelDisplayModal={this.handelDisplayModal}
          handelSubmitForm={this.handelAddCatForm}
        />
        {
          this.state.displayUpdateModal &&
          <UpdateFormModal
            show={this.state.displayUpdateModal}
            handelDisplayModal={this.handelDisplayUpdateModal}
            catObject={this.state.UpdateReviewObj}
            updatereviews={this.updatereviewsArrOfObjectState}
            reviewsArr={this.state.reviews}
          />
        }
        <br />
        <br />
        {
          this.state.reviews.length &&
          <Row>
            {
              this.state.reviews.map((cat, idx) => {
                return (
                  <Col md={4} key={idx}>
                    <Card
                      style={{ width: '18rem' }}
                    >
                      <Card.Img variant="top" src={cat.cat_img} />
                      <Card.Body>
                        <Card.Title>{cat.cat_name}</Card.Title>
                        <Card.Text>
                          {cat.cat_breed} 🐈
                        </Card.Text>
                        <Button variant="outline-danger" onClick={() => this.handelDeleteCat(cat._id)}>
                          Delete Cat
                        </Button>
                        <br />
                        <Button variant="outline-dark" onClick={() => this.handelDisplayUpdateModal(cat)}>
                          Update Cat
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        }
      </>
    )
  };
}

export default withAuth0(Myreviews);