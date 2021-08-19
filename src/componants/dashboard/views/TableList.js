import React from "react";
// import Restrunt from '../../Restrunt.json';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export class TableList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restArry: [],
    }

    let handelRest = () => {
      axios.get('http://localhost:4997/allrest').then(res => {
        console.log(res.data);

        this.setState({
          restArry: res.data,

        });

      }).catch(error => console.log(error))
    };
    handelRest()

  }

  handelDeleteRest = (restId) => {

    console.log(restId);
    axios.delete(`http://localhost:4997/deleteRest/${restId}`).then(res => {


    }).catch(error => alert(error))
  }

  addRest = (e) => {
    e.preventDefault()
    let dataRest = {
      title: e.target.title.value,
      address: e.target.address.value,
      description: e.target.description.value,
      image_url: e.target.image_url.value,
      type: e.target.type.value

    }

    axios.post(`http://localhost:4997/addrest/`, dataRest).then(res => {

      console.log(res);
    }).catch(error => alert(error))
  }
  // http://localhost:4997/deleteRest/611d70cd618c4a108e322812

  render() {


    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Restaurants List</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">title</th>
                        <th className="border-0">address</th>
                        <th className="border-0">description</th>
                        <th className="border-0">type</th>
                        <th className="border-0">Buttom</th>
                      </tr>
                    </thead>
                    <tbody>

                      {

                        this.state.restArry.map(value => {
                          return (<tr>
                            <td>{value.title}</td>
                            <td>{value.address}</td>
                            <td>{value.description}</td>
                            <td>{value.type}</td>
                            <td><Button variant="outline-danger" onClick={() => this.handelDeleteRest(value._id)}>Delete</Button></td>
                          </tr>
                          )
                        })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <>

          <Card bg="dark" text="back" style={{ width: '100%' , textAlign: 'center'} }>
            <Card.Header>Add Restaurant</Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => this.addRest(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Restaurant Name</Form.Label>
                  <Form.Control name="title" type="text" placeholder="Enter the Restaurant name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Adress</Form.Label>
                  <Form.Control name="address" type="text" placeholder="Enter the Restaurant Adress" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control name="description" type="text" placeholder="Enter the Restaurant Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Restaurant Image</Form.Label>
                  <Form.Control name="image_url" type="text" placeholder="Enter the image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Type</Form.Label>
                  <Form.Control name="type" type="text" placeholder="Enter the type of restaurant" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Add Restaurant
                </Button>
              </Form>

            </Card.Body>
          </Card>
          <br />
        </>
      </>
    );
  }
}

export default TableList;
