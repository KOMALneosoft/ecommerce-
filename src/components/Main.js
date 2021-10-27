import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Main extends Component {
    render() {
        return (
                <Container fluid>
                <div className="mt-4">
                <Row className="mt-5 pt-4 text-sm-left">
                <Col lg={6} md={6} sm={12}>
                        <img src="Images/sec1.PNG" width="700px"/>
                </Col>
                <div className="sec2">
                <Col lg={6} md={6} sm={12} className="mt-4 pl-4 ml-5 pt-2">
                        <div className="font-weight-bold">HOT DEALS</div>
                        <div className="s14 pt-2">
                            <i className="fas fa-circle text-primary px-3"></i>
                            <i className="fas fa-circle text-danger px-3 s13"></i>
                            <i className="fas fa-circle text-warning px-3"></i>
                        </div>
                        <div className="pt-3"><h1 className="sec3">Tulos Draey Skirts</h1></div>
                        <div className="text-warning stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="rev1">&nbsp;&nbsp;(05 Reviews)</i>
                        </div>
                        <div className="text-danger pt-4"><h1 className="font-weight-bold">Rs. 4999</h1></div>
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi atque aut labore
                            quibusdam dolor quos quidem. Mollitia exercitationem temporibus ut. Explicabo
                            fuga fugiat ipsa nulla nihil repellendus vitae tempora odio.
                        </div>
                        <div className="pt-2 mt-2"><i className="fas fa-chevron-right"></i> <span>COLOR: &nbsp;</span>
                            <i className="fas fa-circle text-danger px-3"></i>
                            <i className="fas fa-circle text-primary px-3"></i>
                            <i className="fas fa-circle text-warning px-3"></i>
                        </div>
                        <div className="pt-2 mt-2"><i className="fas fa-chevron-right"></i> <span>Size: &nbsp;</span>
                            <i className="border ml-1 mr-2 px-3">S</i>
                            <i className="border mr-2 px-3">M</i>
                            <i className="border mr-2 px-3">L</i>
                            <i className="border px-3">XL</i>
                        </div>

                        <Row className="text-center pl-4 pt-4 mt-2">
                            <Col lg={3} md={3} sm={3} className="py-2 mr-2 text-white sec4">
                                <h5 className="sec6">25</h5>
                                <span className="sec6">Days</span>
                            </Col>
                            <Col lg={3} md={3} sm={3} className="py-2 mr-2 text-white ml-1 sec4">
                                <h5 className="sec6">14</h5>
                                <span className="sec6">Hours</span>
                            </Col>
                            <Col lg={3} md={3} sm={3} className="py-2 text-white ml-1 sec4">
                                <h5 className="sec6">57</h5>
                                <span className="sec6">Mins</span>
                            </Col>
                        </Row>
                </Col>
                </div>
            </Row>
            </div>
        </Container>
        )
    }
}

export default Main
