import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export class Instagram extends Component {
    render() {
        return (
            <Container fluid>
                
                <div class="text-center font-weight-bold pt-2 mt-5"><h4>INSTAGRAM</h4></div>
                <div class="text-center mt-4"><Image src="img/in1sjpg1.PNG" alt=""/></div>

            <div className="mt-5">
            <Row>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/in1.jpg" alt="" height="220px" width="210"/>
                </Col>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/in2.jpg" alt="" height="220px" width="210"/>
                </Col>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/in3.jpg" alt="" height="220px" width="210"/>
                </Col>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/sp1.jpg" alt="" height="220px" width="210"/>
                </Col>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/sp2.jpg" alt="" height="220px" width="210"/>
                </Col>
                <Col lg={2} md={4} sm={12} class="d-block m-auto">
                    <Image src="img/sp3.jpg" alt="" height="220px" width="210"/>
                </Col>
            </Row>
            </div>
            </Container>
        )
    }
}

export default Instagram
