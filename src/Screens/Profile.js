import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import Content from './components/Content';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyComment from './MyComment';

class Profile extends Component {
  render() {
    // console.log(this.props);
    const { user } = this.props.auth0;
    return (

      <div className="App justify-content-center">
        <br />
        <Container >
         
          <Row>
            <Col md={12}>
              <MyComment />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuth0(Profile);