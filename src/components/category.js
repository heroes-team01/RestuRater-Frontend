import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


class Category extends React.Component {

render() {
    return (
        <div>
        <Card style={{ width: '18rem' , height: "500px" , padding: "10px" , float: "left", margin: "10px" }}>
            <Card.Img variant="top" src={this.props.photograph} alt={this.props.name}  style={{height: "250px" }}/>
            <Card.Body >
                <Card.Title  >{this.props.name}</Card.Title>
                <Card.Text>
                    {this.props.address}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
}

export default Category
