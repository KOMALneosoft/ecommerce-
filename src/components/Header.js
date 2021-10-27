import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                
                <div className="text-center text-dark headerset">
          <div id="carouselControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img1">
                    <div className="hea1">
                    <h1 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head1">The World <br/> Of Extreme Sports</h1>
                    <h4 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head2">SAVE <span className="text-primary">20% </span> ON ALL APPAREL</h4>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <div className="container">
                        <div className="row pt-3">
                            <button className="btn btn-dark b1">SHOP NOW <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img2">
                    <div className="hea1">
                        <h1 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head1">The World <br/> Of Extreme Sports</h1>
                        <h4 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head2">SAVE <span className="text-primary">20% </span> ON ALL APPAREL</h4>
                        <hr className="hr1"/>
                        <hr className="hr2"/>
                        <div className="container">
                            <div className="row pt-3">
                                <button className="btn btn-dark b1">SHOP NOW <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img3">
                    <div className="hea1">
                        <h1 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head1">The World <br/> Of Extreme Sports</h1>
                        <h4 className="text-lg-left pl-5 ml-5 font-weight-bold font-italic head2">SAVE <span className="text-primary">20% </span> ON ALL APPAREL</h4>
                        <hr className="hr1"/>
                        <hr className="hr2"/>
                    </div>
                    <div className="container">
                        <div className="row pt-3">
                            <button className="btn btn-dark b1">SHOP NOW <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon mr-auto" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon ml-auto" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

            </div>
        )
    }
}

export default Header
