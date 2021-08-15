import React, { Component } from 'react'
import { Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export class Aboutus extends Component {
    render() {
        return (
            <div style={{ marginTop: 10, marginBottom: 10, width: 900 }}>
                <CardGroup className='mx-auto'>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/83532147?s=400&u=4f9dbbb293c9e709a1b0e6ed0f895d794ad3d412&v=4" />
                        <Card.Body>
                            <Card.Title>Mahmoud Abubaker</Card.Title>
                            <Card.Text>
                                I am a mechanical engineer and i graduated from Hashemite University. I have a passion for design and programming
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/82364888?v=4" />
                        <Card.Body>
                            <Card.Title>Heba Almomani</Card.Title>
                            <Card.Text>
                                Computer engineer , born in 25-9-1998 , Study Full stack development at LTUC-Abdul Aziz Al Ghurair School of Advanced Computing, I’m interested in programming                                .{' '}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/75562411?v=4" />
                        <Card.Body>
                            <Card.Title>Amneh AL-Momany</Card.Title>
                            <Card.Text>
                                I graduated from ABBU with a bachelor's degree of computer science and am an ASAC trainee.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/83520719?v=4" />
                        <Card.Body>
                            <Card.Title>Raghad-Abdelghani</Card.Title>
                            <Card.Text>
                                I am a pharmacist on the road to be a programmer, looking forward to solving world health problems using the technology I will learn and develop.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>

                </CardGroup>
            </div>)
    }
}

export default Aboutus
