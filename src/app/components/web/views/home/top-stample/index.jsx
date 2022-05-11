import React, { Component } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux';
import { addToCart } from '../../../../../store/actions/cartActions';

import { Link } from 'react-router-dom';
import GroceryStampleDetails from '../../../../services/GroceryStampleDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
// import './App.css';

class Topstample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productlist: [
                
                    {
                        slug:'rkbazar',
                        id:'1',
                        discountPer:'10',
                        photo:'/assets/images/items/2020-07-18.jpeg',
                        name:'Grocery Food',
                        price:'100',
                        netPrice:'120'
                   },
                   {
                    slug:'rkbazar2',
                    id:'1',
                    discountPer:'10',
                    photo:'/assets/images/items/1-295.jpeg',
                    name:'Grocery Food',
                    price:'29',
                    netPrice:'120'
                    },
                   {
                        slug:'rkbazar',
                        id:'1',
                        discountPer:'10',
                        photo:'/assets/images/items/40161771-9_2-fortune-sunflower-oil.webp',
                        name:'Grocery Food',
                        price:'499',
                        netPrice:'120'
                   },
                   {
                    slug:'rkbazar2',
                    id:'1',
                    discountPer:'10',
                    photo:'/assets/images/items/bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company-and-pepsico-WX0H55.jpeg',
                    name:'Grocery Food',
                    price:'40',
                    netPrice:'120'
                    },
                    {
                        slug:'rkbazar',
                        id:'1',
                        discountPer:'10',
                        photo:'/assets/images/items/Haldirams-e1444215772838.jpeg',
                        name:'Grocery Food',
                        price:'99',
                        netPrice:'120'
                   },
                   ,
                    {
                        slug:'rkbazar',
                        id:'1',
                        discountPer:'10',
                        photo:'/assets/images/items/mdhj.jpeg',
                        name:'Grocery Food',
                        price:'20',
                        netPrice:'120'
                   },
                   
                    ,{
                    slug:'rkbazar2',
                    id:'1',
                    discountPer:'10',
                    photo:'/assets/images/items/offer-1.jpg',
                    name:'Grocery Food',
                    price:'100',
                    netPrice:'120'
                    },
                    {
                    slug:'rkbazar2',
                    id:'1',
                    discountPer:'10',
                    photo:'/assets/images/items/Loose-Grocery.jpeg',
                    name:'Grocery Food',
                    price:'100',
                    netPrice:'120'
                    }

                   
                
            ],
            isloaded:true
        }
    }
     componentDidMount() {
        // let list = await GroceryStampleDetails.getAllGroceryStaple();
        // if(list){
           let temp=[];
            // let list={
            //     products:[
            //     slug:'rkbazar',
            //     id:'1',
            //     discountPer:'10',
            //     photo:'/assets/images/items/Loose-Grocery.jpeg',
            //     name:'Grocery Food',
            //     price:'100',
            //     netPrice:'120'
            // ]
            // }
            // temp.push(list)
            // alert(temp);
            // this.setState({productlist:temp});
        // }
    }
    render() {
        let list = this.state.productlist;
        console.log('listfgfg--------->',list)
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                {/* New Item slider */}
                <section className="product-items-slider section-padding">
                    <div className="container" id="header-category-bk">
                        <div className="section-header">
                            {/* <span>For You</span> */}
                            <header class="section-heading">
                        {/* <a href="#" class="btn btn-outline-primary float-right">See all</a> */}
                        {/* <a href="#" class="btn btn-outline-primary float-right" >React Native</a> */}
                        {/* <a href="" class="" >Online Framework</a> */}
                        <h3 class="section-title">Popular products</h3>
                        <h5 className="heading-design-h5">
                            <span>10% OFF</span>
                                <Link to={{
                                    pathname: `/shop`,
                                    state: list
                                }}><span className="float-right text-secondary">View All</span></Link>
                            </h5>
                    </header>
                           
                         
            {/* <section className="section145">
                <div class="container"> */}
                    <div class="row">
                    <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="../assets/images/items/Loose-Grocery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Loose Grocery</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="../assets/images/items/Branded-Grocery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Branded Grocery</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Packaged-Food-1.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Bansal Packed Grocery</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Dairy-Frozen-Products.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Dairy & Frozen Products</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Snacks-Beverages-1.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Snacks & Beverages</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Packaged-Food.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Packaged Food</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Household-Essentials.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Household Essentials</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Personal-Care.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Personal Care</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Baby-Care.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Baby Care</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Bed-N-Bath.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Bed N Bath</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Crockery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Crockery</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Plastics-Articles.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Small Home Appliances</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Stationery-.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">JStationery</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Steel.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Steel</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Pooja-Items.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Pooja Items</a><br/>
                                    <del class="oldprice">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Toys-Gift-Articles.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">JToys & Gift Articles</a><br/>
                                    <del class="title">₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                    </div>

                {/* </div>
            </section> */}
                        </div>
                        <Slider {...settings}>
                            {
                            !this.state.isloaded ?<div className="progress-bar-bk"><CircularProgress color="secondary" /></div>:
                                list.map((row, index) => (
                                    <div key={index} className="item">
                                        <div className="product">
                                            <Link to={{
                                                // pathname: `/p/${row.slug}/${row.id}`,
                                                pathname:'/',
                                                state: row

                                            }}>
                                                <div className="product-header">
                                                    <span className="badge badge-success">{row.discountPer}% OFF</span>
                                                    <img className="img-fluid" src={row.photo} alt="product" />
                                                    {/* <span className="veg text-success mdi mdi-circle" /> */}
                                                </div>
                                                <div className="product-body">
                                                    <h5>{row.name}</h5>
                                                    <h6><strong><span className="mdi mdi-approval" /> Available in</strong> - {row.unitSize}</h6>
                                                </div>
                                            </Link>
                                            <div className="product-footer">
                                                <button type="button" className="btn btn-secondary btn-sm float-right" onClick={() => this.props.addToCart(row)}><i className="mdi mdi-cart-outline" /> Add To Cart</button>
                                                <p className="offer-price mb-0">&#x20B9;{row.price} <i className="mdi mdi-tag-outline" /><br /><span className="regular-price">&#x20B9;{row.netPrice}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                        </Slider>
                    </div>
                </section>

                {/* End New item slider */}
            </div>
        )
    }
}
export default connect(null, { addToCart })(Topstample);