import React, { Component } from 'react';
import Banner1 from '../../../assets/images/catalog/banners/main-banner-1-1903x928.jpg';
import Banner2 from '../../../assets/images/catalog/banners/main-banner-2-1903x928.jpg';
import catBanner1 from '../../../assets/images/catalog/demo/cat-banner-1.png';
import catBanner2 from '../../../assets/images/catalog/demo/cat-banner-2.png';
import catBanner3 from '../../../assets/images/catalog/demo/cat-banner-3.png';
import catBanner4 from '../../../assets/images/catalog/demo/cat-banner-4.png';

import $ from 'jquery';
class Body extends Component {

  arrImageTabCategorySlider = [
    { id: 1, srcImg: require("../../../assets/images/catalog/product/3-366x450.jpg") },
    { id: 2, srcImg: require("../../../assets/images/catalog/product/5-366x450.jpg") },
    { id: 3, srcImg: require("../../../assets/images/catalog/product/7-366x450.jpg") },
    { id: 4, srcImg: require("../../../assets/images/catalog/product/9-366x450.jpg") },
    { id: 5, srcImg: require("../../../assets/images/catalog/product/11-366x450.jpg") },
    { id: 6, srcImg: require("../../../assets/images/catalog/product/13-366x450.jpg") },
    { id: 7, srcImg: require("../../../assets/images/catalog/product/14-366x450.jpg") },
    { id: 8, srcImg: require("../../../assets/images/catalog/product/16-366x450.jpg") },
    { id: 9, srcImg: require("../../../assets/images/catalog/product/17-366x450.jpg") },
    { id: 10, srcImg: require("../../../assets/images/catalog/product/19-366x450.jpg") },
    { id: 11, srcImg: require("../../../assets/images/catalog/product/19-366x450.jpg") },
    { id: 12, srcImg: require("../../../assets/images/catalog/product/2-366x450.jpg") },
    { id: 13, srcImg: require("../../../assets/images/catalog/product/3-366x450.jpg") },
    { id: 14, srcImg: require("../../../assets/images/catalog/product/5-366x450.jpg") },
    { id: 15, srcImg: require("../../../assets/images/catalog/product/7-366x450.jpg") },
    { id: 16, srcImg: require("../../../assets/images/catalog/product/9-366x450.jpg") },
    { id: 17, srcImg: require("../../../assets/images/catalog/product/11-366x450.jpg") },
    { id: 18, srcImg: require("../../../assets/images/catalog/product/13-366x450.jpg") },
    { id: 19, srcImg: require("../../../assets/images/catalog/product/14-366x450.jpg") },



  ];

  arrImageLatestNew = [
    { id: 1, srcImg: require("../../../assets/images/catalog/blogs/1-835x455.jpg") },
    { id: 2, srcImg: require("../../../assets/images/catalog/blogs/2-835x455.jpg") },
    { id: 3, srcImg: require("../../../assets/images/catalog/blogs/3-835x455.jpg") },
    { id: 4, srcImg: require("../../../assets/images/catalog/blogs/4-835x455.jpg") },
    { id: 5, srcImg: require("../../../assets/images/catalog/blogs/5-835x455.jpg") },
  ]

  arrImageBrand = [
    { id: 1, srcImg: require("../../../assets/images/catalog/manufacturer/brand1-108x108.png") },
    { id: 2, srcImg: require("../../../assets/images/catalog/manufacturer/brand2-108x108.png") },
    { id: 3, srcImg: require("../../../assets/images/catalog/manufacturer/brand3-108x108.png") },
    { id: 4, srcImg: require("../../../assets/images/catalog/manufacturer/brand4-108x108.png") },
    { id: 5, srcImg: require("../../../assets/images/catalog/manufacturer/brand5-108x108.png") },
    { id: 6, srcImg: require("../../../assets/images/catalog/manufacturer/brand6-108x108.png") },
    { id: 7, srcImg: require("../../../assets/images/catalog/manufacturer/brand7-108x108.png") },
    { id: 8, srcImg: require("../../../assets/images/catalog/manufacturer/brand8-108x108.png") },
    { id: 9, srcImg: require("../../../assets/images/catalog/manufacturer/brand9-108x108.png") },
    { id: 10, srcImg: require("../../../assets/images/catalog/manufacturer/brand10-108x108.png") },
  ]


  slideShow = {
    mode: 'horizontal',
    slidesPerView: 1,
    //pagination: '.slideshow0',
    pagination: false,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    autoplay: 5000,
    autoplayDisableOnInteraction: true,
    loop: true/*,
    paginationType: 'bullets'*/
  }

  

 

  componentDidMount() {
    $(document).ready(function () {
      $("#spinner").fadeOut("slow");
    });
    window.$('#slideshow0').swiper(this.slideShow);
    window.$('#slideshow1').swiper(this.slideShow);
  }


  render() {
    return (
      <div id="common-home">
        <div className="content-top">
          <div id="content">
            {/**Slider */}
            <div className="main-slider">
              <div id="spinner"></div>
              <div className="swiper-viewport">
                <div id="slideshow0" className="swiper-container" style={{ opacity: "1" }}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide text-center">
                      <a href="#"><img src={Banner1} alt="Main-banner-1" className="img-responsive" /></a></div>
                    <div className="swiper-slide text-center">
                      <a href="#"><img src={Banner2} alt="Main-banner-2" className="img-responsive" /></a></div>
                  </div>
                </div>
                <div className="swiper-pagination slideshow0"></div>
                <div className="swiper-pager">
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
            {/**End Slider */}

            {/**Test Category Block SlideShow */}
            <div className="main-slider">
              <div className="swiper-viewport">
                <div id="slideshow1" className="swiper-container" style={{ opacity: "1" }}>
                  <div className="swiper-wrapper">
                    {/**Category Block Slide 1*/}
                    <div className="swiper-slide text-center">
                      <div id="categorycmsblock" className="categorycmsblock">
                        <div className="container">
                          <div className="row">
                            <div className="categorycmsblock-wrapper">
                              <div className="row">
                                <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                  <div className="categorycmsblock-item categorycmsblock-item-1">
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner1} alt="Cat-banner-1" />
                                    </div>
                                    <div className="categorycmsblock-title-link-wrapper">
                                      <span className="categorycmsblock-title">Hanging lighting Collection</span>
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                  <div className="categorycmsblock-item categorycmsblock-item-2">
                                    <div className="categorycmsblock-title-wrapper">
                                      <span className="categorycmsblock-title">Best Table Lamp</span>
                                    </div>
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner2} alt="Cat-banner-2" />
                                    </div>
                                    <div className="categorycmsblock-link-wrapper">
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                  <div className="categorycmsblock-item categorycmsblock-item-3">
                                    <div className="categorycmsblock-title-wrapper">
                                      <span className="categorycmsblock-title">New Night lamp</span>
                                    </div>
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner3} alt="Cat-banner-3" />
                                    </div>
                                    <div className="categorycmsblock-link-wrapper">
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                  <div className="categorycmsblock-item categorycmsblock-item-4">
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner4} alt="Cat-banner-4" />
                                    </div>
                                    <div className="categorycmsblock-title-link-wrapper">
                                      <span className="categorycmsblock-title">Living room Lighting</span>
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**Category Block Slide 2*/}
                    <div className="swiper-slide text-center">
                      <div id="categorycmsblock" className="categorycmsblock">
                        <div className="container">
                          <div className="row">
                            <div className="categorycmsblock-wrapper">
                              <div className="row">
                                <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                  <div className="categorycmsblock-item categorycmsblock-item-1">
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner4} alt="Cat-banner-1" />
                                    </div>
                                    <div className="categorycmsblock-title-link-wrapper">
                                      <span className="categorycmsblock-title">Hanging lighting Collection</span>
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                  <div className="categorycmsblock-item categorycmsblock-item-2">
                                    <div className="categorycmsblock-title-wrapper">
                                      <span className="categorycmsblock-title">Best Table Lamp</span>
                                    </div>
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner2} alt="Cat-banner-2" />
                                    </div>
                                    <div className="categorycmsblock-link-wrapper">
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                  <div className="categorycmsblock-item categorycmsblock-item-3">
                                    <div className="categorycmsblock-title-wrapper">
                                      <span className="categorycmsblock-title">New Night lamp</span>
                                    </div>
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner3} alt="Cat-banner-3" />
                                    </div>
                                    <div className="categorycmsblock-link-wrapper">
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                  <div className="categorycmsblock-item categorycmsblock-item-4">
                                    <div className="categorycmsblock-image">
                                      <img src={catBanner4} alt="Cat-banner-4" />
                                    </div>
                                    <div className="categorycmsblock-title-link-wrapper">
                                      <span className="categorycmsblock-title">Living room Lighting</span>
                                      <a className="categorycmsblock-link" href="#">View More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="swiper-pagination slideshow0"></div>
                <div className="swiper-pager">
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div> */}
              </div>
            </div>

            {/**END Test Category Block SlideShow */}

            {/**Category Block */}
            <div id="categorycmsblock" className="categorycmsblock">
              <div className="container">
                <div className="row">
                  <div className="categorycmsblock-wrapper">
                    <div className="row">
                      <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="categorycmsblock-item categorycmsblock-item-1">
                          <div className="categorycmsblock-image">
                            <img src={catBanner1} alt="Cat-banner-1" />
                          </div>
                          <div className="categorycmsblock-title-link-wrapper">
                            <span className="categorycmsblock-title">Hanging lighting Collection</span>
                            <a className="categorycmsblock-link" href="#">View More</a>
                          </div>
                        </div>
                        <div className="categorycmsblock-item categorycmsblock-item-2">
                          <div className="categorycmsblock-title-wrapper">
                            <span className="categorycmsblock-title">Best Table Lamp</span>
                          </div>
                          <div className="categorycmsblock-image">
                            <img src={catBanner2} alt="Cat-banner-2" />
                          </div>
                          <div className="categorycmsblock-link-wrapper">
                            <a className="categorycmsblock-link" href="#">View More</a>
                          </div>
                        </div>
                      </div>
                      <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="categorycmsblock-item categorycmsblock-item-3">
                          <div className="categorycmsblock-title-wrapper">
                            <span className="categorycmsblock-title">New Night lamp</span>
                          </div>
                          <div className="categorycmsblock-image">
                            <img src={catBanner3} alt="Cat-banner-3" />
                          </div>
                          <div className="categorycmsblock-link-wrapper">
                            <a className="categorycmsblock-link" href="#">View More</a>
                          </div>
                        </div>
                        <div className="categorycmsblock-item categorycmsblock-item-4">
                          <div className="categorycmsblock-image">
                            <img src={catBanner4} alt="Cat-banner-4" />
                          </div>
                          <div className="categorycmsblock-title-link-wrapper">
                            <span className="categorycmsblock-title">Living room Lighting</span>
                            <a className="categorycmsblock-link" href="#">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**End Category Block */}

            {/**Special Discount Block */}
            <div id="special-discount-block" className="special-discount-block">
              <div className="container">
                <div className="row">
                  <div className="special-discount-block-wrapper">
                    <div className="box-heading">
                      <h2 className="products-section-title">Special Offer</h2>
                    </div>
                    <span className="special-discount-block-subtitle">Big discount</span>
                    <span className="special-discount-block-description">Lorem ipsum dolor sit amet, consectetur adipiscing sed do
									eiusmod tempor.</span>
                    <a href="#" className="special-discount-block-link">View More</a>
                  </div>
                </div>
              </div>
            </div>

            {/**End Special Discount Block */}

            {/*--------------TAB CATEGORY SLIDER--------------- */}
            <div id="Tab_Category_Slider" className="category_tab box">
              <div className="container">
                <div className="row">
                  <div className="category-tab-container">
                    <div className="category-tab-heading-wrapper">
                      <div className="box-heading">
                        <h2 className="products-section-title">New Arrivals</h2>
                      </div>
                      <div className="etabs">
                        <ul className="nav nav-tabs">
                          <li className="active"><a href="#All collection" data-toggle="tab">All
													collection</a></li>
                          <li><a href="#New arrivals" data-toggle="tab">New arrivals</a></li>
                          <li><a href="#Top rated" data-toggle="tab">Top rated</a></li>
                          <li><a href="#Best Seller" data-toggle="tab">Best Seller</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="tabs">
                      <div className="tab-content">
                        <div className="tab-pane active" id="All collection">
                          <div className="box-product">
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexd21c.html?route=product/product&amp;product_id=47">
                                        <img src={this.arrImageTabCategorySlider[0].srcImg} title="HP LP3065" alt="HP LP3065" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[2].srcImg} title="HP LP3065"
                                          alt="HP LP3065" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">HP LP3065 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb77e.html?route=product/product&amp;product_id=48">
                                        <img src={this.arrImageTabCategorySlider[1].srcImg} title="iPod classNameic" alt="iPod classNameic"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[3].srcImg} title="iPod classNameic"
                                          alt="iPod classNameic" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb77e.html?route=product/product&amp;product_id=48">iPod classNameic </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexdd37.html?route=product/quick_view&amp;product_id=48">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb8ca.html?route=product/product&amp;product_id=43">
                                        <img src={this.arrImageTabCategorySlider[2].srcImg} title="MacBook" alt="MacBook" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[4].srcImg} title="MacBook"
                                          alt="MacBook" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb8ca.html?route=product/product&amp;product_id=43">MacBook </a></h4>
                                        <span className="price">
                                          <span className="price-new">$602.00</span>
                                          <span className="price-tax">Ex Tax: $500.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexff8a.html?route=product/quick_view&amp;product_id=43">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                        <img src={this.arrImageTabCategorySlider[3].srcImg} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[5].srcImg} title="Nikon D300"
                                          alt="Nikon D300" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexbfcf.html?route=product/product&amp;product_id=31">Nikon D300 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$98.00</span>
                                          <span className="price-tax">Ex Tax: $80.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index73c4.html?route=product/quick_view&amp;product_id=31">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index6a4d.html?route=product/product&amp;product_id=33">
                                        <img src={this.arrImageTabCategorySlider[4].srcImg} title="Samsung SyncMaster 941BW" alt="Samsung SyncMaster 941BW"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[6].srcImg} title="Samsung SyncMaster 941BW"
                                          alt="Samsung SyncMaster 941BW" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index6a4d.html?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW </a></h4>
                                        <span className="price">
                                          <span className="price-new">$242.00</span>
                                          <span className="price-tax">Ex Tax: $200.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index0ac7.html?route=product/quick_view&amp;product_id=33">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index2ebe.html?route=product/product&amp;product_id=46">
                                        <img src={this.arrImageTabCategorySlider[5].srcImg} title="Sony VAIO" alt="Sony VAIO" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[7].srcImg} title="Sony VAIO"
                                          alt="Sony VAIO" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index2ebe.html?route=product/product&amp;product_id=46">Sony VAIO </a></h4>
                                        <span className="price">
                                          <span className="price-new">$1,202.00</span>
                                          <span className="price-tax">Ex Tax: $1,000.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index30de.html?route=product/quick_view&amp;product_id=46">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="New arrivals">
                          <div className="box-product">
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexd21c.html?route=product/product&amp;product_id=47">
                                        <img src={this.arrImageTabCategorySlider[6].srcImg} title="HP LP3065" alt="HP LP3065" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[8].srcImg} title="HP LP3065"
                                          alt="HP LP3065" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">HP LP3065 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb77e.html?route=product/product&amp;product_id=48">
                                        <img src={this.arrImageTabCategorySlider[7].srcImg} title="iPod classNameic" alt="iPod classNameic"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[9].srcImg} title="iPod classNameic"
                                          alt="iPod classNameic" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb77e.html?route=product/product&amp;product_id=48">iPod classNameic </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexdd37.html?route=product/quick_view&amp;product_id=48">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb8ca.html?route=product/product&amp;product_id=43">
                                        <img src={this.arrImageTabCategorySlider[8].srcImg} title="MacBook" alt="MacBook" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[10].srcImg} title="MacBook"
                                          alt="MacBook" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb8ca.html?route=product/product&amp;product_id=43">MacBook </a></h4>
                                        <span className="price">
                                          <span className="price-new">$602.00</span>
                                          <span className="price-tax">Ex Tax: $500.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexff8a.html?route=product/quick_view&amp;product_id=43">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                        <img src={this.arrImageTabCategorySlider[9].srcImg} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[11].srcImg} title="Nikon D300"
                                          alt="Nikon D300" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexbfcf.html?route=product/product&amp;product_id=31">Nikon D300 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$98.00</span>
                                          <span className="price-tax">Ex Tax: $80.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index73c4.html?route=product/quick_view&amp;product_id=31">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index6a4d.html?route=product/product&amp;product_id=33">
                                        <img src={this.arrImageTabCategorySlider[10].srcImg} title="Samsung SyncMaster 941BW" alt="Samsung SyncMaster 941BW"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[12].srcImg} title="Samsung SyncMaster 941BW"
                                          alt="Samsung SyncMaster 941BW" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index6a4d.html?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW </a></h4>
                                        <span className="price">
                                          <span className="price-new">$242.00</span>
                                          <span className="price-tax">Ex Tax: $200.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index0ac7.html?route=product/quick_view&amp;product_id=33">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index2ebe.html?route=product/product&amp;product_id=46">
                                        <img src={this.arrImageTabCategorySlider[11].srcImg} title="Sony VAIO" alt="Sony VAIO" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[13].srcImg} title="Sony VAIO"
                                          alt="Sony VAIO" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index2ebe.html?route=product/product&amp;product_id=46">Sony VAIO </a></h4>
                                        <span className="price">
                                          <span className="price-new">$1,202.00</span>
                                          <span className="price-tax">Ex Tax: $1,000.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index30de.html?route=product/quick_view&amp;product_id=46">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="Top rated">
                          <div className="box-product">
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexd21c.html?route=product/product&amp;product_id=47">
                                        <img src={this.arrImageTabCategorySlider[12].srcImg} title="HP LP3065" alt="HP LP3065" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[14].srcImg} title="HP LP3065"
                                          alt="HP LP3065" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">HP LP3065 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb77e.html?route=product/product&amp;product_id=48">
                                        <img src={this.arrImageTabCategorySlider[13].srcImg} title="iPod classNameic" alt="iPod classNameic"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[15].srcImg} title="iPod classNameic"
                                          alt="iPod classNameic" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb77e.html?route=product/product&amp;product_id=48">iPod classNameic </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexdd37.html?route=product/quick_view&amp;product_id=48">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb8ca.html?route=product/product&amp;product_id=43">
                                        <img src={this.arrImageTabCategorySlider[14].srcImg} title="MacBook" alt="MacBook" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[16].srcImg} title="MacBook"
                                          alt="MacBook" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb8ca.html?route=product/product&amp;product_id=43">MacBook </a></h4>
                                        <span className="price">
                                          <span className="price-new">$602.00</span>
                                          <span className="price-tax">Ex Tax: $500.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexff8a.html?route=product/quick_view&amp;product_id=43">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                        <img src={this.arrImageTabCategorySlider[15].srcImg} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[17].srcImg} title="Nikon D300"
                                          alt="Nikon D300" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexbfcf.html?route=product/product&amp;product_id=31">Nikon D300 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$98.00</span>
                                          <span className="price-tax">Ex Tax: $80.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index73c4.html?route=product/quick_view&amp;product_id=31">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index6a4d.html?route=product/product&amp;product_id=33">
                                        <img src={this.arrImageTabCategorySlider[16].srcImg} title="Samsung SyncMaster 941BW" alt="Samsung SyncMaster 941BW"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[18].srcImg} title="Samsung SyncMaster 941BW"
                                          alt="Samsung SyncMaster 941BW" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index6a4d.html?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW </a></h4>
                                        <span className="price">
                                          <span className="price-new">$242.00</span>
                                          <span className="price-tax">Ex Tax: $200.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index0ac7.html?route=product/quick_view&amp;product_id=33">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index2ebe.html?route=product/product&amp;product_id=46">
                                        <img src={this.arrImageTabCategorySlider[18].srcImg} title="Sony VAIO" alt="Sony VAIO" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[0].srcImg} title="Sony VAIO"
                                          alt="Sony VAIO" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index2ebe.html?route=product/product&amp;product_id=46">Sony VAIO </a></h4>
                                        <span className="price">
                                          <span className="price-new">$1,202.00</span>
                                          <span className="price-tax">Ex Tax: $1,000.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index30de.html?route=product/quick_view&amp;product_id=46">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="Best Seller">
                          <div className="box-product">
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexd21c.html?route=product/product&amp;product_id=47">
                                        <img src={this.arrImageTabCategorySlider[1].srcImg} title="HP LP3065" alt="HP LP3065" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[3].srcImg} title="HP LP3065"
                                          alt="HP LP3065" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">HP LP3065 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb77e.html?route=product/product&amp;product_id=48">
                                        <img src={this.arrImageTabCategorySlider[2].srcImg} title="iPod classNameic" alt="iPod classNameic"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[4].srcImg} title="iPod classNameic"
                                          alt="iPod classNameic" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb77e.html?route=product/product&amp;product_id=48">iPod classNameic </a></h4>
                                        <span className="price">
                                          <span className="price-new">$122.00</span>
                                          <span className="price-tax">Ex Tax: $100.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexdd37.html?route=product/quick_view&amp;product_id=48">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexb8ca.html?route=product/product&amp;product_id=43">
                                        <img src={this.arrImageTabCategorySlider[3].srcImg} title="MacBook" alt="MacBook" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[5].srcImg} title="MacBook"
                                          alt="MacBook" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexb8ca.html?route=product/product&amp;product_id=43">MacBook </a></h4>
                                        <span className="price">
                                          <span className="price-new">$602.00</span>
                                          <span className="price-tax">Ex Tax: $500.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="indexff8a.html?route=product/quick_view&amp;product_id=43">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                        <img src={this.arrImageTabCategorySlider[4].srcImg} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[6].srcImg} title="Nikon D300"
                                          alt="Nikon D300" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="indexbfcf.html?route=product/product&amp;product_id=31">Nikon D300 </a></h4>
                                        <span className="price">
                                          <span className="price-new">$98.00</span>
                                          <span className="price-tax">Ex Tax: $80.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index73c4.html?route=product/quick_view&amp;product_id=31">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index6a4d.html?route=product/product&amp;product_id=33">
                                        <img src={this.arrImageTabCategorySlider[5].srcImg} title="Samsung SyncMaster 941BW" alt="Samsung SyncMaster 941BW"
                                          className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[7].srcImg} title="Samsung SyncMaster 941BW"
                                          alt="Samsung SyncMaster 941BW" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index6a4d.html?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW </a></h4>
                                        <span className="price">
                                          <span className="price-new">$242.00</span>
                                          <span className="price-tax">Ex Tax: $200.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index0ac7.html?route=product/quick_view&amp;product_id=33">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item text-center">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-block product-thumb transition">
                                  <div className="product-block-inner">
                                    <div className="image">
                                      <a href="index2ebe.html?route=product/product&amp;product_id=46">
                                        <img src={this.arrImageTabCategorySlider[6].srcImg} title="Sony VAIO" alt="Sony VAIO" className="img-responsive reg-image" />
                                        <img className="img-responsive hover-image" src={this.arrImageTabCategorySlider[8].srcImg} title="Sony VAIO"
                                          alt="Sony VAIO" />
                                      </a>
                                      <div className="extra-info">
                                      </div>
                                    </div>
                                    <div className="caption">
                                      <div className="product-deacription-wrapper">
                                        <h4><a href="index2ebe.html?route=product/product&amp;product_id=46">Sony VAIO </a></h4>
                                        <span className="price">
                                          <span className="price-new">$1,202.00</span>
                                          <span className="price-tax">Ex Tax: $1,000.00</span>

                                        </span>
                                        <div className="rating">
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                          <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                        </div>
                                        <div className="button-group">
                                          <button type="button" className="btn btn-primary addtocart" >
                                            <i className="fa fa-shopping-basket"></i>
                                            Add to Cart
																			</button>
                                          <button className="btn btn-primary wishlist" type="button" >
                                            <i className="fa fa-heart"></i>
                                            Add to Wish List
																			</button>
                                          <button className="btn btn-primary compare" type="button" >
                                            <i className="fa fa-clone"></i>
                                            Add to Compare
																			</button>
                                          <div className="quickview">
                                            <a className="btn btn-primary" href="index30de.html?route=product/quick_view&amp;product_id=46">
                                              <i className="fa fa-eye"></i>

                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**------------------------------------ */}


              {/**-----------------NEWSLETTER------------------- */}

              <div className="block_newsletter-wrapper parallax" data-source-url="image/catalog/parralex.jpg">
                <div className="container">
                  <div className="row">
                    <div className="newsletter-content-wrapper">
                      <div className="box-heading">
                        <h2 className="products-section-title">Newsletter</h2>
                      </div>
                      <div className="email-description">
                        <p>Lorem ipsum dolor amet consectetur adipiscing consectetur the eiusmod</p>
                      </div>
                      <div className="newsletter-form">
                        <form method="post">
                          <div className="form-group required">
                            <div className="input-news">
                              <input type="email" name="txtemail" id="txtemail" placeholder="Enter Your Email" className="form-control input-lg" />
                            </div>
                            <div className="subscribe-btn">
                              <button type="submit" className="btn btn-default btn-lg" >Subscribe</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**--------------END---NEWSLETTER------------------- */}


              {/**-----------------LATEST NEWS------------------- */}
              <div id="homeblog">
                <div className="container">
                  <div className="row">
                    <div className="box-heading">
                      <h2 className="products-section-title">Latest News</h2>
                    </div>
                    <div className="blog-module latest blog">
                      <div className="box">
                        <div className="box-content">
                          <div className="customNavigation">
                            <a className="fa prev fa-angle-left"></a>
                            <a className="fa next fa-angle-right"></a>
                          </div>
                          <ul className="box-product owl-carousel blogcarousel blog_grid_holder" id="blog-carousel">

                            <li className="blog_item blog-item-1">
                              <div className="product-block blog-item">
                                <div className="summary">

                                  <div className="blog-left">
                                    <div className="image">
                                      <img src={this.arrImageLatestNew[0].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                                      <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/6-835x455.jpg"
                                          data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                                        <a className="icon dots" title="Read More" href="index2c9f.html?route=information/blogger&amp;blogger_id=6"><i
                                          className="fa fa-ellipsis-h"></i> </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="blog-right">
                                    <div className="blog_stats">
                                      <div className="date-time hl">10 / Sep / 2018</div>
                                    </div>
                                    <h2 className="blog_title"><a href="index2c9f.html?route=information/blogger&amp;blogger_id=6">Nullam
																	ullamcorper nis...</a> </h2>
                                    <div className="desc">
                                      <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ... </p>
                                    </div>

                                    <div className="readmore">
                                      <a className="btn btn-primary read-more-link" href="index2c9f.html?route=information/blogger&amp;blogger_id=6">
                                        Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="blog_item blog-item-2">
                              <div className="product-block blog-item">
                                <div className="summary">

                                  <div className="blog-left">
                                    <div className="image">
                                      <img src={this.arrImageLatestNew[1].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                                      <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/5-835x455.jpg"
                                          data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                                        <a className="icon dots" title="Read More" href="indexed5d.html?route=information/blogger&amp;blogger_id=5"><i
                                          className="fa fa-ellipsis-h"></i> </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="blog-right">
                                    <div className="blog_stats">
                                      <div className="date-time hl">10 / Sep / 2018</div>
                                    </div>
                                    <h2 className="blog_title"><a href="indexed5d.html?route=information/blogger&amp;blogger_id=5">Morbi
																	condimentum mole...</a> </h2>
                                    <div className="desc">
                                      <p> Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestib... </p>
                                    </div>

                                    <div className="readmore">
                                      <a className="btn btn-primary read-more-link" href="indexed5d.html?route=information/blogger&amp;blogger_id=5">
                                        Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="blog_item blog-item-3">
                              <div className="product-block blog-item">
                                <div className="summary">

                                  <div className="blog-left">
                                    <div className="image">
                                      <img src={this.arrImageLatestNew[2].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                                      <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/4-835x455.jpg"
                                          data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                                        <a className="icon dots" title="Read More" href="index4b1d.html?route=information/blogger&amp;blogger_id=4"><i
                                          className="fa fa-ellipsis-h"></i> </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="blog-right">
                                    <div className="blog_stats">
                                      <div className="date-time hl">10 / Sep / 2018</div>
                                    </div>
                                    <h2 className="blog_title"><a href="index4b1d.html?route=information/blogger&amp;blogger_id=4">Urna pretium
																	elit maur...</a> </h2>
                                    <div className="desc">
                                      <p> Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum fauci... </p>
                                    </div>

                                    <div className="readmore">
                                      <a className="btn btn-primary read-more-link" href="index4b1d.html?route=information/blogger&amp;blogger_id=4">
                                        Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="blog_item blog-item-4">
                              <div className="product-block blog-item">
                                <div className="summary">

                                  <div className="blog-left">
                                    <div className="image">
                                      <img src={this.arrImageLatestNew[3].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                                      <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/3-835x455.jpg"
                                          data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                                        <a className="icon dots" title="Read More" href="indexaa69.html?route=information/blogger&amp;blogger_id=3"><i
                                          className="fa fa-ellipsis-h"></i> </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="blog-right">
                                    <div className="blog_stats">
                                      <div className="date-time hl">10 / Sep / 2018</div>
                                    </div>
                                    <h2 className="blog_title"><a href="indexaa69.html?route=information/blogger&amp;blogger_id=3">Ipsum cursus
																	vestibulu...</a> </h2>
                                    <div className="desc">
                                      <p> Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget ... </p>
                                    </div>

                                    <div className="readmore">
                                      <a className="btn btn-primary read-more-link" href="indexaa69.html?route=information/blogger&amp;blogger_id=3">
                                        Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="blog_item blog-item-5">
                              <div className="product-block blog-item">
                                <div className="summary">

                                  <div className="blog-left">
                                    <div className="image">
                                      <img src={this.arrImageLatestNew[4].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                                      <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/2-835x455.jpg"
                                          data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                                        <a className="icon dots" title="Read More" href="index5463.html?route=information/blogger&amp;blogger_id=2"><i
                                          className="fa fa-ellipsis-h"></i> </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="blog-right">
                                    <div className="blog_stats">
                                      <div className="date-time hl">10 / Sep / 2018</div>
                                    </div>
                                    <h2 className="blog_title"><a href="index5463.html?route=information/blogger&amp;blogger_id=2">Turpis at
																	eleifend ps ...</a> </h2>
                                    <div className="desc">
                                      <p> Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestib... </p>
                                    </div>

                                    <div className="readmore">
                                      <a className="btn btn-primary read-more-link" href="index5463.html?route=information/blogger&amp;blogger_id=2">
                                        Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/**-----------END------LATEST NEWS------------------- */}

              <span className="blog_default_width" style={{ display: "none", visibility: "hidden" }}></span>
              <div className="banners-slider-carousel">
                <div className="container">
                  <div className="row">
                    <div id="carousel-0" className="banners-slider">
                      <div className="customNavigation">
                        <a className="prev fa fa-angle-left"></a>
                        <a className="next fa fa-angle-right"></a>
                      </div>
                      <div id="module-0-carousel" className="product-carousel">
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[0].srcImg} alt="Brand-1" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[1].srcImg} alt="Brand-2" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[2].srcImg} alt="Brand-3" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[3].srcImg} alt="Brand-4" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[4].srcImg} alt="Brand-5" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[5].srcImg} alt="Brand-6" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[6].srcImg} alt="Brand-7" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[7].srcImg} alt="Brand-8" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[8].srcImg} alt="Brand-9" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrImageBrand[9].srcImg} alt="Brand-10" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="module_default_width" style={{ display: "none", visibility: "hidden" }}></span>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;