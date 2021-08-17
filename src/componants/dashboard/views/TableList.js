import React, { Component } from 'react'
import axios from "axios";

import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import Restrunt from '../../Restrunt.json';
// import { react } from "@babel/types";
import AddForm from './AddForm';


export class TableList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Restrunts: [],
        displayAddModal: false
  
      };

  let handelDeleteRest = (serverId) => {
    axios.delete(`https://http//localhost:4999/allresturant/${serverId}`).then(res => {
      if (res.data.ok === 1) {
        const tempRestObj = this.state.Restrunts.filter(cat => cat._id !== serverId);
        this.setState({
          Restrunts: tempRestObj
        });
      }
    }).catch(error => alert(error))
  }

  let handelDisplayModal = () => {
    this.setState({ 
      displayModal: !this.state.displayAddModal });
  }

 let handelAddForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal();
  

    // const body = {
    //   email: this.props.auth0.user.email, // we are getting the email of the user from auth0
    //   title: e.target.title.value,
    //   address: e.target.address.value,
    //   description: e.target.description.value,
    //   image_url: e.target.image_url.value,
    // };
  };

  return (
    <>

<AddForm
          show={this.state.displayAddModal}
          handelDisplayModal={handelDisplayModal}
          handelSubmitForm={handelAddForm}
        />
        
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Restaurants List</Card.Title>
                <Button className='info'  variant="primary">Add Restaurants</Button>

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
                    {Restrunt.map(value => {
                      return (<tr>
                        <td>{value.title}</td>
                        <td>{value.address}</td>
                        <td>{value.description}</td>
                        <td>{value.type}</td>
                        <td><Button variant="outline-danger" onClick={() => handelDeleteRest(Restrunt._id)}>Delete</Button></td>
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

      
    </>
    );
}
  }

export default TableList;
