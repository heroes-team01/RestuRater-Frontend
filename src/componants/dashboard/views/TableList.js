import React from "react";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import Restrunt from '../../Restrunt.json';


function TableList() {

//   AddCardState = () => {
//     let info={ title:this.props.title,
//     description:this.props.description,
//     image_url :this.props.image_url,
//     type :this.props.type
//     }

//     this.props.showCard(info);
// }

  return (
    <>
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
                      {/* <th className="border-0">Buttom</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {Restrunt.map(value => {
                      return (<tr>
                        <td>{value.title}</td>
                        <td>{value.address}</td>
                        <td>{value.description}</td>
                        <td>{value.type}</td>
                        {/* <td><button variant="primary" type="submit">Delete</button></td> */}
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

export default TableList;