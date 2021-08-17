import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'



class ModelCard extends React.Component {
    render(){
    return(
        <div>
            <Modal show={this.props.selected} onHide={this.props.hideCard}>

                <Modal.Header closeButton>

                <Modal.Title>{this.props.showingData.title}</Modal.Title>

                </Modal.Header>


                <Modal.Body >

                        <Card >
                            <Card.Img  src={this.props.showingData.image_url} alt={this.props.title} className="cardTitle"/>

                            <Card.Body>

                            <Card.Title className="cardTitle">Name: {this.props.showingData.title}</Card.Title>

                            <Card.Text> Description: {this.props.showingData.description} </Card.Text>
                            <Card.Text>Type: {this.props.showingData.type} </Card.Text>
                            <Card.Text>{this.props.showingData.address} </Card.Text>

                            </Card.Body>


                        </Card>


                </Modal.Body>


                <Modal.Footer>

                <Button variant="secondary" onClick={this.props.hideCard}>
                Close
                </Button>

                </Modal.Footer>

            </Modal>

        </div>


        )
    }
}

export default ModelCard;