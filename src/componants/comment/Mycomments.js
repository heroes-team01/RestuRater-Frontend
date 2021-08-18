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
// heros team work 
export class Myreviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      apdateComObj: {},
      displayAddModal: false,
      displayUpdateModal: false,
      idx:0,
    };
  }

  
  componentDidMount =  async () => {
    
    const userEmail = this.props.auth0.user.email;
    let axiosdata = await axios.get(`${process.env.REACT_APP_SERVER}/reviews?email=${userEmail}`)
    this.setState({
          reviews: axiosdata.data[0],
        });

    // axios.get(`${process.env.REACT_APP_SERVER}/reviews?email=${userEmail}`).then((axiosResponse) => { 
    //   // console.log(axiosResponse.data[0]); 
    //   this.setState({
    //     reviews: axiosResponse.data[0],

    //   });
    // }).catch(error => alert(error));
    // console.log(this.state.reviews)


  };

  handelDisplayModal = () => {
    this.setState({ displayAddModal: !this.state.displayAddModal });
  }

 
  handelDisplayUpdateModal = (comObject,idx) => {
    this.setState({
      displayUpdateModal: !this.state.displayUpdateModal,
      apdateComObj: comObject,
      idx:idx

    });
    // console.log(this.state.idx)
  }

 
  handelAddForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal();

    const body = {
      email: this.props.auth0.user.email, 
      rest_name: e.target.catName.value,
      rating_comment: e.target.catBreed.value,
      user_img: e.target.catImage.value,
      userName: this.props.auth0.user.name,
    };

    axios.post(`${process.env.REACT_APP_SERVER}/review`, body).then(axiosResponse => {
      // once we get the new added cat from the server, we are going to push it to our reviews array
      // console.log(axiosResponse.data);
      // this.state.reviews.push(axiosResponse.data);
      this.setState({
        reviews: this.state.reviews
      });
    }).catch(error => alert(error));
  }



  handelDelete = (comId) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/review/${comId}`).then(res => {
      // console.log(res.data);
      if (res.data.ok === 1) {
 
        const tempObj = this.state.reviews.filter(com => com._id !== comId);
        this.setState({
          reviews: tempObj
        });
      }
    }).catch(error => alert(error))
  }

  updatereviewsArrOfObjectState = (newreviewsArr) => {
    this.setState({ cat: newreviewsArr });
  }

  render() {

      console.log(this.state.reviews);
    return (
      <>
        <br />
        <h1>My reviews! </h1>
        <br />
        <Button variant="secondary" onClick={() => this.handelDisplayModal()}>Add comment</Button>

     
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
            comObject={this.state.apdateComObj}
            updatereviews={this.updatereviewsArrOfObjectState}
            reviewsArr={this.state.reviews}
            idx= {this.state.idx}
          />
        }
        <br />
        <br />
        {
         
        
        
          // this.state.reviews.comments.length &&

          <Row>
            {
              
              this.state.reviews.comments.map((com, idx) => {
                console.log(this.state.reviews);
                return (
                  <Col md={4} key={idx}>
                    <Card
                      style={{ width: '18rem' }}
                    >
                      {/* <Card.Img variant="top" src={com.user_img} /> */}
                      <Card.Body>
                        <Card.Title>{com.rest_name}</Card.Title>
                        <Card.Text>
                          {com.rating_comment} 
                        </Card.Text>
                        <Button variant="outline-danger" onClick={() => this.handelDelete(com._id)}>
                          Delete comment
                        </Button>
                        <br />
                        <Button variant="outline-dark" onClick={() => this.handelDisplayUpdateModal(com,idx)}>
                          Update comment
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