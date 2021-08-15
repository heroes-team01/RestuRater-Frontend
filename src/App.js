import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import React from "react";
import Category from "./components/category";
class App extends React.Component {
 
  render() {
    return (
      <Container align="center">

        <Category />
   </Container>
    );
  }
}

export default App;
