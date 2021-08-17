import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class UpdateFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.comObject.rest_name,
      comment: this.props.comObject.rating_comment,
      image: this.props.comObject.user_img,
      id: this.props.idx,
    }
  }

  handelNameChange = (e) => this.setState({ name: e.target.value });
  handelBreedChange = (e) => this.setState({ comment: e.target.value });
  handelImageChange = (e) => this.setState({ image: e.target.value });

  handelSubmitForm = ((e) => {
    e.preventDefault();
    // const id = this.state.id;
    const body = {
      rest_name: e.target.name.value,
      rating_comment: e.target.comment.value,
      user_img: e.target.image.value,
    };
  
    axios.put(`${process.env.REACT_APP_SERVER}/review/${this.state.id}`, body).then((axiosResponse) => {
      console.log( axiosResponse.data);
     
      this.props.handelDisplayModal({}); // to  close the modal and reset the object of the cat to be updated
    }).catch(error => alert(error))
  });

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Update comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handelSubmitForm(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Resturant Name</Form.Label>
                <Form.Control onChange={(e) => this.handelNameChange(e)} value={this.state.name} type="text" name='name' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>comment</Form.Label>
                <Form.Control onChange={(e) => this.handelBreedChange(e)} value={this.state.comment} type="text" name='comment' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e) => this.handelImageChange(e)} value={this.state.image} type="text" placeholder="Enter the image URL"  name='image' />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update comment
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