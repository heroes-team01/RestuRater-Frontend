import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class FormModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Add Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.handelSubmitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resturant Name</Form.Label>
                <Form.Control name="restName" type="text"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Comment</Form.Label>
                <Form.Control name="review" type="text"  />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Comment
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

export default FormModal