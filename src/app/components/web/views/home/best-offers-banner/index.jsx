import React, { Component } from 'react'
import './index.css'
export default class Bestofferbanner extends Component {
    render() {
        return (
            <div>
                <div className="section145">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                    <div className="main-title-left">
                                        <span>Offers</span>
                                        <h2>Best Values</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/Copy of Grocery Delivery Ad - Made with PosterMyWall (4).jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/Copy of Grocery Delivery Ad - Made with PosterMyWall (1).jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item offr-none">
                                    <img src="img/best-offers/Copy of Quote Design Template - Made with PosterMyWall (6).jpg" alt />
                                    <div className="cmtk_dt">
                                        <div className="product_countdown-timer offer-counter-text" data-countdown="2021/01/06">165 days 01:28:33</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="#" className="code-offer-item">
                                {/* <video width="1100"  src='img/best-offers/Copy of Grocery Shop Online Poster Template - Made with PosterMyWall.mp4' /> */}
                                    <img src="img/best-offers/offer-4.jpg" alt />
                                {/* </a> */}
                                {/* <video controls > */}
      {/* <source src="../img/best-offers/Copy of Grocery Shop Online Poster Template - Made with PosterMyWall (1).mp4" type="video/mp4"/> */}
     {/* </video> */}
     </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
