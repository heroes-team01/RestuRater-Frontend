import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./header";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myreviews from "./comment/Mycomments";
import Footer from './footer';
import Profile11 from '../Screens/Profile';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
          <Header/>

          <Card style={{ width: '100%'}}>
          <Card.Img variant="top" src='https://images.squarespace-cdn.com/content/v1/601f2a8d65733d66a7b74450/1623135346780-WGQX72I9ZJC04H3PX8PI/Garcon-1+%282%29+%281%29.jpg?format=2500w' style={{ height: '350px', width: '100%'}}/>
  <Card.Img variant="top" src={user.picture} alt={user.name} style={{ height: '200px', width: '200px' , borderRadius:'100%', position: 'absolute',top: '250px', left:'20px', border:'2px solid whitesmoke'}}/>
  <Card.Body>
    <Card.Title  style={{ margin: '140px 20px 40px 20px', fontSize: '50px', fontFamily: "'Courgette', cursive"}}>{user.name}</Card.Title>
    <Card.Text  style={{ margin: '40px 20px 40px 20px' ,fontSize: '20px' }}>
    {user.email}
    </Card.Text>
  </Card.Body>
</Card>

{/* <Myreviews /> */}
<Profile11 />

<Footer />
        </div>
      
    );
  }
}

export default withAuth0(Profile);