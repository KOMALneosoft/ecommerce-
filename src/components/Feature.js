import React, { Component } from 'react'
import { Row,Col, Button, Card, Container } from 'react-bootstrap'

export class Feature extends Component {
    render() {
        return (
            <div>
                
                <Row className="ml-5 pt-5">
                <Col lg={4} md={4} sm={4}>
                    <Button variant="primary"><i className="fas fa-plane pr-2"></i> FREE SHIPPING WORLDWIDE</Button>
                </Col>
                <Col lg={4} md={4} sm={4}>
                    <Button variant="danger"><i className="far fa-check-circle pr-2"></i> 100% MONEY BACK - 48 HOURS</Button>
                </Col>
                <Col lg={4} md={4} sm={4}>
                    <Button variant="warning"><i className="fas fa-phone pr-2"></i> 24/7 ONLINE CUSTOMER SUPPORT</Button>
                </Col>
            </Row>


            <div className="text-center font-weight-bold mt-5"><h4>FEATURED COLLECTION</h4></div>
            <div className="text-center mt-4"><img src="Images/design1.PNG" alt=""/></div>
            <div className="font-weight-bold mt-5 text-center">
                <ul className="list-inline">
                    <li className="list-inline-item text-primary">NEW ARRIVAL</li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item">CLOTHING</li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item">HATS</li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item">SHOES</li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item">BAGS</li>
                    <li className="list-inline-item">-</li>
                    <li className="list-inline-item">ACCESSORIES</li>
                </ul>
            </div>
            
            <Container fluid>
             <div className="text-center">
                 <Row className="mt-5">
                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c1.PNG"/>
                            <Card.Body>
                                <Card.Title>Sports Jacket</Card.Title>
                                <Card.Text>Rs. 3499/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c2.PNG"/>
                            <Card.Body>
                            <Card.Title>Boots</Card.Title>
                            <Card.Text>Rs. 1999/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c3.PNG"/>
                            <Card.Body>
                            <Card.Title>Travelling Bag</Card.Title>
                            <Card.Text>Rs. 1699/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c4.PNG"/>
                            <Card.Body>
                            <Card.Title>Gloves</Card.Title>
                            <Card.Text>Rs. 99/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c5.PNG"/>
                            <Card.Body>
                            <Card.Title>Lower</Card.Title>
                            <Card.Text>Rs. 599/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c6.PNG"/>
                            <Card.Body>
                            <Card.Title>Hat</Card.Title>
                            <Card.Text>Rs. 149/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>
                 </Row>

                <div className="mt-3">
                 <Row className="mt-5">
                 <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c7.PNG"/>
                            <Card.Body>
                            <Card.Title>Sports Shoes</Card.Title>
                            <Card.Text>Rs. 1799/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c8.PNG"/>
                            <Card.Body>
                            <Card.Title>Side Bag</Card.Title>
                            <Card.Text>Rs. 99/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c9.PNG"/>
                            <Card.Body>
                            <Card.Title>3D Glasses</Card.Title>
                            <Card.Text>Rs. 299/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c10.PNG"/>
                            <Card.Body>
                            <Card.Title>Jacket</Card.Title>
                            <Card.Text>Rs. 1999/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c11.PNG"/>
                            <Card.Body>
                            <Card.Title>Track Suit</Card.Title>
                            <Card.Text>Rs. 2099/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                     <Col lg={2} md={4} sm={12} className="d-block m-auto">
                        <Card>
                            <Card.Img variant="top" src="Images/c12.PNG"/>
                            <Card.Body>
                            <Card.Title>Cap</Card.Title>
                            <Card.Text>Rs. 129/-</Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>
                </Row>
                </div>
             </div>  
             </Container>

            </div>
        )
    }
}

export default Feature
