import React from 'react';

import emailInputImage from '../../../assets/images/themeimage/special-discount-block.jpg';
import { slideShowDelayTime } from '../../../shared/config';


import BannersSlider from '../../../components/Slider/BannersSlider/BannersSlider';
import CategoriesSlider from '../../../components/Slider/CategoriesSlider/CategoriesSlider';
import TabCategoriesSlider from '../../../components/TabCategories/TabCategories';
import Blog_News from '../../../components/Slider/Blog_News/Blog_News';

import $ from 'jquery';
class Body extends React.Component {


  arrBannerSlider = [

    { id: 1, srcImg: require('../../../assets/images/catalog/banners/main-banner-1-1903x928.jpg') },
    { id: 2, srcImg: require('../../../assets/images/catalog/banners/main-banner-2-1903x928.jpg') },
  ]

  arrCatBannerSlider = [
    { id: 1, name: 'Hanging lighting Collection', srcImg: require('../../../assets/images/catalog/demo/cat-banner-1.png') },
    { id: 2, name: 'Best Table Lamp', srcImg: require('../../../assets/images/catalog/demo/cat-banner-2.png') },
    { id: 3, name: 'New Night lamp', srcImg: require('../../../assets/images/catalog/demo/cat-banner-3.png') },
    { id: 4, name: 'Living room Lighting', srcImg: require('../../../assets/images/catalog/demo/cat-banner-4.png') },
  ]

  arrTabCategory = [
    {
      id: 1,
      categoryName: "All Collection",
      categoryProductList: [
        { id: 1, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/3-366x450.jpg") },
        { id: 2, name:'IPOD CLASSNAMEIC', srcImg: require("../../../assets/images/catalog/product/5-366x450.jpg") },
        { id: 3, name:'MACBOOK', srcImg: require("../../../assets/images/catalog/product/7-366x450.jpg") },
        { id: 4, name:'NIKON D300', srcImg: require("../../../assets/images/catalog/product/9-366x450.jpg") },
        { id: 5, name:'SAMSUNG SYNCMASTER 941BW', srcImg: require("../../../assets/images/catalog/product/11-366x450.jpg") },
        { id: 6, name:'SONY VAIO', srcImg: require("../../../assets/images/catalog/product/13-366x450.jpg") },
        { id: 7, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/14-366x450.jpg") },
        { id: 8, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/16-366x450.jpg") },
      ],
    },
    {
      id: 2,
      categoryName: "New Arrivals",
      categoryProductList: [
        { id: 1, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/3-366x450.jpg") },
        { id: 2, name:'IPOD CLASSNAMEIC', srcImg: require("../../../assets/images/catalog/product/5-366x450.jpg") },
        { id: 3, name:'MACBOOK', srcImg: require("../../../assets/images/catalog/product/7-366x450.jpg") },
        { id: 4, name:'NIKON D300', srcImg: require("../../../assets/images/catalog/product/9-366x450.jpg") },
        { id: 5, name:'SAMSUNG SYNCMASTER 941BW', srcImg: require("../../../assets/images/catalog/product/11-366x450.jpg") },
        { id: 6, name:'SONY VAIO', srcImg: require("../../../assets/images/catalog/product/13-366x450.jpg") },
        { id: 7, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/14-366x450.jpg") },
        { id: 8, name:'HP LP3065', srcImg: require("../../../assets/images/catalog/product/16-366x450.jpg") },
      ],
    }
  ];

  arrLatestNew = [
    { id: 1, srcImg: require("../../../assets/images/catalog/blogs/1-835x455.jpg") },
    { id: 2, srcImg: require("../../../assets/images/catalog/blogs/2-835x455.jpg") },
    { id: 3, srcImg: require("../../../assets/images/catalog/blogs/3-835x455.jpg") },
    { id: 4, srcImg: require("../../../assets/images/catalog/blogs/4-835x455.jpg") },
    { id: 5, srcImg: require("../../../assets/images/catalog/blogs/5-835x455.jpg") },
  ]

  arrManufacturer = [
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
      loop: true
    }

    return slideShow;
  }

  hoverBanner = (element) => {
    window.$(element).hover(function () {
      document.querySelector(element).swiper.stopAutoplay()
    }, function () {
      document.querySelector(element).swiper.startAutoplay()
    });
  }





  componentDidMount() {
    $(document).ready(function () {
      $("#spinner").fadeOut("slow");
    });
    let slideShow0 = window.$('#slideshow0');
    let slideShow1 = window.$('#slideshow1');

    slideShow0.swiper(this.createNewSlider('slideshow0'));
    slideShow1.swiper(this.createNewSlider('slideshow1'));
    this.hoverBanner('#slideshow0');
    this.hoverBanner('#slideshow1');

  }


  render() {
    return (
      <div id="common-home">
        <div className="content-top">
          <div id="content">
            {/**Slider */}
            <BannersSlider listBannerSlider={this.arrBannerSlider} />
            {/**End Slider */}

            {/**Test Category Block SlideShow */}

            <CategoriesSlider listCatBannerSlider={this.arrCatBannerSlider} />
            {/**END Test Category Block SlideShow */}



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

            {/*--------------TAB CATEGORY --------------- */}
            <div id="Tab_Category_Slider" className="category_tab box">
              <TabCategoriesSlider tabCategory={this.arrTabCategory[0].categoryProductList} listTabCategoryHeader={this.arrTabCategory} />
              {/**------------- END--TAB CATEGORY--------------------- */}


              {/**-----------------NEWSLETTER------------------- */}

              <div className="block_newsletter-wrapper parallax" data-source-url={emailInputImage}>
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
              <Blog_News listNews_Blog={this.arrLatestNew} />

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
                              <a href="#"><img src={this.arrManufacturer[0].srcImg} alt="Brand-1" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[1].srcImg} alt="Brand-2" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[2].srcImg} alt="Brand-3" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[3].srcImg} alt="Brand-4" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[4].srcImg} alt="Brand-5" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[5].srcImg} alt="Brand-6" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[6].srcImg} alt="Brand-7" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[7].srcImg} alt="Brand-8" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[8].srcImg} alt="Brand-9" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="product-block">
                            <div className="product-block-inner">
                              <a href="#"><img src={this.arrManufacturer[9].srcImg} alt="Brand-10" /></a>
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