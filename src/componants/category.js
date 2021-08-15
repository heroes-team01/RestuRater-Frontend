import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


class Category extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        numofvote: 0
    }
}

increaseNoOfVotes = () => {
   
}


render() {
    return (
        <div>
        <Card style={{ width: '18rem' , height: "350px" , padding: "10px" , float: "left", margin: "10px" }}>
            <Card.Img variant="top" src={this.props.image_url} alt={this.props.title}/>
            <Card.Body >
                <Card.Title>
                {this.props.title}
                    
                    </Card.Title>
               
                <h6>
               Adress : {this.props.address}
                   </h6> 
               <h6>
               type : {this.props.type}
                   </h6> 
              
                <Button onClick={this.increaseNoOfVotes}  variant="primary">more details</Button>
            </Card.Body>
        </Card>
        </div>
    )
}
}

export default Category