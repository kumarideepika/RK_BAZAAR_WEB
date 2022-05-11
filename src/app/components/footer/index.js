import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                    <p>Order on Whatsapp </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6>
                                    <p>Try it now</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6>
                                    <p>Best Offer 10-15 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <h4 className="mb-5 mt-0"><a className="logo" href="https://www.google.com/maps/place/R+K+Bazaar/@22.1747629,83.3533459,15z/data=!4m2!3m1!1s0x0:0xcc72f5a145203247?sa=X&ved=2ahUKEwi3j_6Ottb3AhXcUGwGHQhLCXEQ_BJ6BAg_EAU"><img src="img/best-offers/logo-footer.png" alt="RK BAZAAR" /></a></h4>
                                <p className="mb-0"><a className="text-dark" href="#">Gharghoda-Lailunga Rd, Sichai Colony, Gharghoda, Chhattisgarh 496111</a></p>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone" />8770447886</a></p>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone" />9589060031, 9993755333</a></p>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">Brand </h6>
                                <ul>
                                <li> <a href="#">Ashirwad</a></li>
                    <li> <a href="#">Haldiram</a></li>
                    <li> <a href="#">DAAWAT Rice</a></li>
                    <li> <a href="#">Kohinoor Basmati Rice</a></li>
                                    <ul>
                                    </ul>
                                    </ul>
                                    
                                    </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">CATEGORIES</h6>
                                <ul>
                                    {/* <li><a href="#">Vegetables</a></li> */}
                                    <li><a href="#">Grocery &amp; Staples</a></li>
                                    <li><a href="#">Breakfast &amp; Dairy</a></li>
                                    <li><a href="#">Soft Drinks</a></li>
                                    <li><a href="#">Sports &amp; </a></li>
                                    <li><a href="#">Steels &amp; </a></li>
                                    <ul>
                                    </ul></ul></div>
                        
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-4">Download App</h6>
                                <div className="app">
                                    <a href="#"><img src="img/google.png" alt /></a>
                                    <a href="#"><img src="img/apple.png" alt /></a>
                                </div>
                                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="#"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="#"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="#"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="#"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Footer */}
                {/* Copyright */}
                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">© Copyright 2022 <strong className="text-dark">RKtechnologies.com</strong>. All Rights Reserved<br />
                                    <small className="mt-0 mb-0">Made by Deepika Keshri
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Copyright */}
            </div>
        )
    }
}


