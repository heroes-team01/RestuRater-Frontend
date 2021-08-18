import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class UpdateFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restName: this.props.comObject.res_name,
      review: this.props.comObject.review,
      comId: this.props.comObject._id,
    }
  }

  handelNameChange = (e) => this.setState({ restName: e.target.value });
  handelBreedChange = (e) => this.setState({ review: e.target.value });

  handelSubmitForm = ((e) => {
    e.preventDefault();
    const comId = this.state.comId;
    const body = {
      res_name: this.state.restName,
      review: this.state.review,
    };

    axios.put(`${process.env.REACT_APP_SERVER}/com/${comId}`, body).then((axiosResponse) => {
    //   console.log('updated Com Data:  ', axiosResponse.data);

      const updatedComArr = this.props.comArr.map(com => {

        if (com._id === comId) {
          com.res_name = axiosResponse.data.res_name;
          com.review = axiosResponse.data.review;

          return com;
        }
        return com;

      });
      this.props.updateCom(updatedComArr);



      this.props.handelDisplayModal({}); 
    }).catch(error => alert(error))
  });

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Update Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handelSubmitForm(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Resturant Name</Form.Label>
                <Form.Control onChange={(e) => this.handelNameChange(e)} value={this.state.restName} type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control onChange={(e) => this.handelBreedChange(e)} value={this.state.review} type="text" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Update Comment
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handelDisplayModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default UpdateFormModal;