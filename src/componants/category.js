import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numofvote: 0
        }
    }
    
    
    
    updateCardState = () => {
        let info={ title:this.props.title,
            description:this.props.description,
            image_url :this.props.image_url,
            type :this.props.type
            
        }
        
        this.props.showCard(info);
    }
    
    
    render() {
        return (
            <div>
            
        <Card className='cardColor' style={{ width: '18rem' , height: "450px" , padding: "10px" , float: "left", margin: "25px", backgroundColor :"#32657c33"}}>
            <Card.Img className='cardPic' variant="top" src={this.props.image_url} alt={this.props.title}/>
            <Card.Body >
                <Card.Title id='title' className='info'>
                {this.props.title}
                    
                    </Card.Title>
               
                    <Card.Text>

               Address : {this.props.address}<br></br>
               Type : {this.props.type}
               </Card.Text>

                <Button className='info' onClick={this.updateCardState}  variant="primary">more details</Button>
               
            </Card.Body>
        </Card>

        
        </div>
        
    )

}
}

export default withAuth0(Category)