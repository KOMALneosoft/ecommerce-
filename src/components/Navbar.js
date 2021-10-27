import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <Container>
                <Nav className="navbar navbar-expand-lg bg-dark text-light fixed-top">
          
          <a className="navbar-brand  font-weight-bold" href="#"><img src="img/ic.jpg"  height="50px"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
          <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
            <div className="navbar-nav text-light px-auto mx-auto">
                <Nav.Item><Link to="/" className="nav-item nav-link text-light">HOME</Link></Nav.Item>
            <Nav.Item><Link to="/shop" className="nav-item nav-link text-light">SHOP</Link></Nav.Item>
            <Nav.Item><Link to="/picnic" className="nav-item nav-link text-light">PICNIC</Link></Nav.Item>
            <Nav.Item><Link to="/promotion" className="nav-item nav-link text-light">PROMOTION</Link></Nav.Item>
            <Nav.Item><Link to="/blog" className="nav-item nav-link text-light">BLOG</Link></Nav.Item>
            <Nav.Item><Link to="/contact" className="nav-item nav-link text-light">CONTACT</Link></Nav.Item>
            </div>
              <div>
                  <ul className="navbar-nav ml-auto">
                      <li><a href="#" className="text-light"><i className="fas fa-search mr-4"></i></a></li>
                      <li><a href="#" className="text-light"><i className="fas fa-shopping-cart"><span className="badge badge-primary-top">2</span></i></a></li>
                  </ul>
              </div>
          </div>
          </div>
      </Nav>
            </Container>
        )
    }
}

export default Navbar
