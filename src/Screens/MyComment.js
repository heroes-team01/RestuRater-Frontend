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

export class MyComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      updateComObject: {},
      displayAddModal: false,
      displayUpdateModal: false,
    };
  }

  componentDidMount = () => {
    const userEmail = this.props.auth0.user.email;
    axios.get(`${process.env.REACT_APP_SERVER}/comments?email=${userEmail}`).then((axiosResponse) => {
      this.setState({
        comments: axiosResponse.data
      });
    }).catch(error => alert(error));
  };

  handelDisplayModal = () => {
    this.setState({ displayAddModal: !this.state.displayAddModal });
  }

  handelDisplayUpdateModal = (comObject) => {
    this.setState({
      displayUpdateModal: !this.state.displayUpdateModal,
      updateComObject: comObject
    });
  }

  handelAddComForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal(); 
    const body = {
      email: this.props.auth0.user.email, 
      res_name: e.target.restName.value,
      review: e.target.review.value,
      
    };

    axios.post(`${process.env.REACT_APP_SERVER}/com`, body).then(axiosResponse => {
      this.state.comments.push(axiosResponse.data);
      this.setState({
        comments: this.state.comments
      });
    }).catch(error => alert(error));
  }


  handelDeleteCom = (comId) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/com/${comId}`).then(res => {
      if (res.data.ok === 1) {
          
        const tempComObj = this.state.comments.filter(com => com._id !== comId);
        this.setState({
          comments: tempComObj
        });
      }
    }).catch(error => alert(error))
  }

  UpdateComArr = (newComArr) => {
    this.setState({ com: newComArr });
  }

  render() {
    return (
      <>
        <br />
        <h1>My Comments</h1>
        <br />
        <Button variant="secondary" onClick={() => this.handelDisplayModal()}>Add a Comment</Button>

        <FormModal
          show={this.state.displayAddModal}
          handelDisplayModal={this.handelDisplayModal}
          handelSubmitForm={this.handelAddComForm}
        />
        {
          this.state.displayUpdateModal &&
          <UpdateFormModal
            show={this.state.displayUpdateModal}
            handelDisplayModal={this.handelDisplayUpdateModal}
            comObject={this.state.updateComObject}
            updateCom={this.UpdateComArr}
            comArr={this.state.comments}
          />
        }
        <br />
        <br />
        {
          this.state.comments &&
          <Row>
            {
              this.state.comments.map((com, idx) => {
                return (
                  <Col md={4} key={idx}>
                    <Card
                      style={{ width: '18rem', backgroundColor:"#32657c33" }}
                    >
                      <Card.Body >
                        <Card.Title>  <h4>{this.props.auth0.user.name}</h4></Card.Title>
                        <Card.Text>
                        🍴Restrunt Name : {com.res_name}
                        <br></br>
                        🧾Review :  {com.review} 
                        </Card.Text>
                        <Button variant="outline-danger" onClick={() => this.handelDeleteCom(com._id)}>
                          Delete Comment
                        </Button>
                        <br />
                        <Button variant="outline-dark" onClick={() => this.handelDisplayUpdateModal(com)}>
                          Update Comment
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

export default withAuth0(MyComment);