import React from 'react';

// import emailInputImage from '../../../assets/images/themeimage/special-discount-block.jpg';
import { slideShowDelayTime, baseURL } from '../../../services/config';


import BannersSlider from '../../../components/Shop/Slider/BannersSlider/BannersSlider';
import CategoriesSlider from '../../../components/Shop/Slider/CategoriesSlider/CategoriesSlider';
import TabCategories from '../../../components/Shop/TabCategories/TabCategories';
// import Blog_News from '../../../components/Slider/Blog_News/Blog_News';
import classes from './Home.scss'
import $ from 'jquery';
import axios from 'axios';
import {htmlContentModel} from '../../../models/htmlContentModel';
class Body extends React.Component {
  state = {
    htmlContentModel

  }


  createNewSlider = (id) => {
    const slideShow = {
      mode: 'horizontal',
      slidesPerView: 1,
      pagination: false,
      paginationClickable: true,
      nextButton: `.swiper-button-next.${id}`,
      prevButton: `.swiper-button-prev.${id}`,
      spaceBetween: 0,
      autoplay: slideShowDelayTime,
      autoplayDisableOnInteraction: true,
      loop: true,
      preloadImages: true
    }

    return slideShow;
  }

  createSwiper = (...arg) => {
    for (const item of arg) {
      window.$(`#${item}`).swiper(this.createNewSlider(item));
    }
  }

  hoverBanner = (element, childElement = '') => {
    window.$(`${element} ${childElement}`).hover(function () {
      document.querySelector(element).swiper.stopAutoplay()
    }, function () {
      document.querySelector(element).swiper.startAutoplay()
    });
  }


  constructor(props) {
    super(props);


  }

  componentWillMount() {
    axios.get(`${baseURL}/datatest/HTMLContent_test.json`).then((res) => {
      console.log(res);
      this.setState({ htmlContentModel: res })
    }).catch((err) => {
      console.error(err);
    })
  }

  componentDidUpdate() {
    this.createSwiper('slideshow0', 'slideshow1');
    this.hoverBanner('#slideshow0');
    this.hoverBanner('#slideshow1', '.categorycmsblock-wrapper');
  }

  componentDidMount() {
    $(document).ready(function () {
      $("#spinner").fadeOut("slow");
    });

  }




  render() {
    return (
      <>
        <div className={classes.GlobalBanner}>
          <strong>GIAO HÀNG MIỄN PHÍ</strong>
        </div>
        <div id="common-home">
          <div className="content-top">
            <div id="content">
              {/**Slider */}
              {/* {<BannersSlider listBannerSlider={this.state.htmlContentModel.bannerSlider} />} */}
              {<BannersSlider listBannerSlider={this.state.htmlContentModel.bannerSlide} />}
              {/**End Slider */}

              {/**Test Category Block SlideShow */}

              {!window.jQuery.isEmptyObject(this.state.htmlContentModel.eventSlide) ? <CategoriesSlider listCatBannerSlider={this.state.htmlContentModel.eventSlide} /> : null}
              {/**END Test Category Block SlideShow */}



              {/**Special Discount Block */}
              {/* <div id="special-discount-block" className="special-discount-block">
              <div className="container">
                <div className="row">
                  <div className="special-discount-block-wrapper">
                    <div className="box-heading">
                      <h2 className="products-section-title">Special Offer</h2>
                    </div>
                    <span className="special-discount-block-subtitle">Big discount</span>
                    <span className="special-discount-block-description">Lorem ipsum dolor sit amet, consectetur adipiscing sed do
									eiusmod tempor.</span>
                    <a href="index.html" className="special-discount-block-link">View More</a>
                  </div>
                </div>
              </div>
            </div> */}

              {/**End Special Discount Block */}

              {/*--------------TAB CATEGORY --------------- */}
              <div id="Tab_Category_Slider" className="category_tab box">
                {!window.jQuery.isEmptyObject(this.state.htmlContentModel.otherSlide) ? <TabCategories listTabCategory={this.state.htmlContentModel.otherSlide} /> : null}
                {/**------------- END--TAB CATEGORY--------------------- */}


                {/**-----------------NEWSLETTER------------------- */}

                {/* <div className="block_newsletter-wrapper parallax" data-source-url={emailInputImage}>
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
              </div> */}
                {/**--------------END---NEWSLETTER------------------- */}


                {/**-----------------LATEST NEWS------------------- */}
                {/* <Blog_News listNews_Blog={arrLatestNew} /> */}

                {/**-----------END------LATEST NEWS------------------- */}

                <span className="blog_default_width" style={{ display: "none", visibility: "hidden" }}></span>
                {/* <div className="banners-slider-carousel">
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
                              <a href="index.html"><img src={arrManufacturer[0].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[1].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[2].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[3].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[4].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[5].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[6].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[7].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[8].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="index.html"><img src={arrManufacturer[9].srcImg} alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                <span className="module_default_width" style={{ display: "none", visibility: "hidden" }}></span>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Body;