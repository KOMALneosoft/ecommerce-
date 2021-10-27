import React, { Component } from 'react'
import { Col, Image, Row } from 'react-bootstrap'

export class Footers extends Component {
    render() {
        return (
            <div>
            <div className="pt-4">
            <footer className="f1">
                <div className="text-center pt-4">
                    <br/>    <Image src="img/sp1.jpg" height="80" width="80" roundedCircle/>
                </div>
                <div className="text-center text-white pt-4 font-italic" >
                   <h5> Ut sed elit sodales posuere a vel lacus. Donec mollis dolor at mi rutrum vulputate. Phasellus arcu ante, euismod </h5>
                   <h5>efficitur excercitation ullamco ut aliquip ex urna id, aliquam convallis mauris</h5>
                </div>
                <div className="text-center font-weight-bold text-white pt-4">
                    <h6>BILLY GRAHAM</h6>
                    <h6 className="font-italic text-light t1">Web Designer</h6>
                </div>
                <div className="dot text-center pt-4">
                    <i className="far fa-circle text-dark"></i>
                    <i className="far fa-dot-circle text-primary"></i>
                    <i className="far fa-circle text-dark"></i>
                </div>
                
                <Row className="text-center text-white pt-4 mt-2 px-3">
                    <Col lg={2} md={4} sm={12} className="py-2 f11">
                        <span><i className="fab fa-facebook"></i><a href="#" className="text-white"> FACEBOOK</a></span>
                    </Col>
                    <Col lg={2} md={4} sm={12} className="py-2 f12">
                        <span><i className="fab fa-twitter"></i><a href="#" className="text-white"> TWITTER</a></span>
                    </Col>
                    <Col lg={2} md={4} sm={12} className="py-2 f13">
                        <span><i className="fab fa-instagram"></i><a href="#" className="text-white"> INSTAGRAM</a></span>
                    </Col>
                    <Col lg={2} md={4} sm={12} className="py-2 f14">
                        <span><i className="fab fa-dribbble"></i><a href="#" className="text-white"> DRIBBBLE</a></span>
                    </Col>
                    <Col lg={2} md={4} sm={12} className="py-2 f11">
                        <span><i className="fab fa-linkedin-in"></i><a href="#" className="text-white"> LINKEDIN</a></span>
                    </Col>
                    <Col lg={2} md={4} sm={12} className="py-2 f15">
                        <span><i className="fab fa-pinterest-p"></i><a href="#" className="text-white"> PINTEREST</a></span>
                    </Col>
                </Row>
                <div className="text-white f16 pt-3">
                    <div className="text-center">
                        <img src="img/sp2.jpg" width="100px"/>
                    </div>
                    <div className="text-center pt-2">
                        <span className="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ac vulputate mi, eget ultricies sem. Integer pellentesque</span><br/>
                        <span className="font-italic">tristique metus, quis ornare ante faucibus quis. Fusce id varius magna</span>
                    </div>
                    <div className="text-center pt-4 mt-3 s11">
                        <i className="fas fa-circle text-primary px-3"></i>
                        <i className="fas fa-circle text-danger px-3 s12"></i>
                        <i className="fas fa-circle text-warning px-3"></i>
                    </div>
                    <div className="text-center py-4">
                        <Image src="img/sp3.jpg"/>
                    </div>
                </div>
            </footer>
        </div>
        <div className="text-center py-3">
        <span>Copyright &copy;2021 Designed by <strong className="text-primary">Harsh</strong> - All Rights Reserved.</span>
    </div>
    </div>
        )
    }
}

export default Footers
