import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

export class Column extends Component {
    render() {
        return (
            <Container fluid>
            <Row className="mt-4">
            <Col lg={4}>
                <Card>
                    <div className="font-weight-bold text-center mt-3">BEST SELLERS
                    <hr width="90%"/>
                    </div>
                    <Row>
                        <Col className="pl-4">
                            <img src="Images/f1.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-2">
                            <div><h5>Muffler</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 399/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pt-4">
                            <img src="Images/c5.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-5">
                            <div><h5>Lower</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 499/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pt-4">
                            <img src="Images/c3.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-5 pb-2">
                            <div><h5>Traveling Bag</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 1699/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col lg={4}>
                <Card>
                    <div className="font-weight-bold text-center mt-3">TOP RATE
                    <hr width="90%"/>
                    </div>
                    <Row>
                        <Col className="pl-4">
                            <img src="Images/c12.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-2">
                            <div><h5>Cap</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 129/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pt-4">
                            <img src="Images/c2.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-4 mt-3">
                            <div><h5>Boots</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 1999/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pb-2 pt-4">
                            <img src="Images/c9.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-4 mt-3">
                            <div><h5>3D Glasses</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 299/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col lg={4}>
                <Card>
                    <div className="font-weight-bold text-center mt-3">TOP SPECIAL
                    <hr width="90%"/>
                    </div>
                    <Row>
                        <Col className="pl-4">
                            <img src="Images/f7.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-2">
                            <div><h5>Helmet</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 1299/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pt-4">
                            <img src="Images/c11.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-4 mt-3">
                            <div><h5>Track Suit</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 2099/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                        <Col className="pl-4 pb-2 pt-4">
                            <img src="Images/f9.PNG" height="200" width="200" className="border border-secondary"/>
                        </Col>
                        <Col className="pt-4 mt-3">
                            <div><h5>Tent</h5></div>
                            <div className="text-warning stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-danger pt-4"><h5 className="font-weight-bold">Rs. 1700/-</h5></div>
                            <Row className="pt-4">
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-shopping-cart border border-secondary p-2 s10"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-undo border border-secondary p-2 s7"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="far fa-heart border border-secondary p-2 s8"></i></Col>
                                <Col className="col-lg-3 col-md-3 col-sm-3"><i className="fas fa-eye border border-secondary p-2 s9"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </Container>
            
        )
    }
}

export default Column
