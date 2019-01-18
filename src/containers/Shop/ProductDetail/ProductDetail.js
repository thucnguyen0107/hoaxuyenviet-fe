import React from 'react';
import { arrProductList } from '../../../data/data';
import ProductCard from '../../../components/UI/ProductCard';
import axios from 'axios';
import { endPoints } from '../../../services/config';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/UI/LoadingImage/Limg';
import $ from 'jquery'
class ProductDetail extends React.Component {

  createZoom = () => {
    let $ = window.$;
    if ($(window).width() > 767) {
      window.$("#tmzoom").elevateZoom({
        // gallery: 'additional-carousel',
        //inner zoom				 
        zoomType: "inner",
        cursor: "crosshair"
        /*//tint
        tint:true, 
        tintColour:'#F90', 
        tintOpacity:0.5
        //lens zoom
        zoomType : "lens", 
        lensShape : "round", 
        lensSize : 200 
        //Mousewheel zoom
        scrollZoom : true*/
      });
    }
  }

  init = () => {
    let $ = window.$;
    // let quickbox = () => {
    //   if ($(window).width() > 767) {
    //     $('.quickview').magnificPopup({
    //       type: 'iframe',
    //       delegate: 'a',
    //       preloader: true,
    //       tLoading: 'Loading image #%curr%...',
    //     });
    //   }
    // }
    // window.jQuery(document).ready(function () { quickbox(); });
    // window.jQuery(window).resize(function () { quickbox(); });
    $(document).ready(function () {
      if ($(window).width() > 767) {
        window.$("#tmzoom").elevateZoom({
          // gallery: 'additional-carousel',
          //inner zoom				 
          zoomType: "inner",
          cursor: "crosshair"
          /*//tint
          tint:true, 
          tintColour:'#F90', 
          tintOpacity:0.5
          //lens zoom
          zoomType : "lens", 
          lensShape : "round", 
          lensSize : 200 
          //Mousewheel zoom
          scrollZoom : true*/
        });
        var z_index = 0;
        $(document).on('click', '.thumbnail', function () {
          $('.thumbnails').magnificPopup('open', z_index);
          return false;
        });
        $('.additional-carousel a').click(function () {
          var smallImage = $(this).attr('data-image');
          var largeImage = $(this).attr('data-zoom-image');
          var ez = $('#tmzoom').data('elevateZoom');
          $('.thumbnail').attr('href', largeImage);
          ez.swaptheimage(smallImage, largeImage);
          z_index = $(this).index('#additional-carousel a');
          return false;
        });
      } else {
        $(document).on('click', '.thumbnail', function () {
          $('.thumbnails').magnificPopup('open', 0);
          return false;
        });
      }
    });
    $(document).ready(function () {
      $('.thumbnails').magnificPopup({
        delegate: 'a.elevatezoom-gallery',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function (item) {
            return item.el.attr('title');
          }
        }
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      product: {},
    }
    this.styleSale = {
      fontSize: '12px',
      background: '#ffc107',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#fff',
      marginTop: '20px'
    }
    this.styleHot = {
      fontSize: '12px',
      background: '#ff6e07',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#fff',
      marginLeft: '20px'
    }
    this.styleNew = {
      fontSize: '12px',
      background: '#07ff31',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#fff',
      marginLeft: '20px'
    }

    this.stylePercentSaving = {
      color: '#000',
      padding: '0',
      textAlign: 'center',
      textTransform: 'capitalize',
      background: '#fff',
      fontSize: '14px',
      height: '40px',
      width: '40px',
      borderRadius: ' 50%',
      lineHeight: '40px',
      fontWeight: '500',
      boxShadow: '0 0 4px 2px rgba(0,0,0,0.15)',
      display: 'inline-block',
      marginTop: '10px',
      marginLeft: '10px',
    }

  }

  componentWillMount() {
    loadingScreen.showLoading();
    axios.get(endPoints.GET_PRODUCT_BY_ID + this.props.match.params.product_id).then((res) => {
      console.log(res);
      this.setState({
        product: res,
      }, loadingScreen.hideLoading())
    }).catch((err) => {
      loadingScreen.hideLoading();
      console.error(err);
    })
  }


  componentDidMount() {
    window.productCarouselAutoSet();
    this.init();
  }
  // hide Search Input when change page
  componentWillUnmount() {
    window.$('.zoomContainer').remove();

  }
  render() {

    let listProductCardHTML = [];

    listProductCardHTML = (
      <>
        {
          arrProductList.map((card, index) => {
            return (
              <div className="slider-item" key={index}>
                <ProductCard cardContent={card}>
                </ProductCard>
              </div>
            )
          })
        }

      </>
    );



    return (

      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title" style={{ fontFamily: 'Times New Roman' }}>{this.state.product.productName}</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>{this.state.product.productName}</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div className="productpage">
          <div id="product-product" className="container">
            <div className="row">
              <div id="content" className="col-sm-12 productpage">
                <div className="row">
                  <div className="col-sm-8 product-left">
                    <div className="product-info">
                      <div className="left product-image thumbnails">

                        {/* <!-- Cloud-Zoom Image Effect Start --> */}
                        <div className="image">
                          <a className="thumbnail" href={'../../../assets/images/catalog/product/11-813x1000.jpg'} title="MacBook" >
                            <Iimg id="tmzoom" src={'../../../assets/images/catalog/product/11-813x1000.jpg'} data-zoom-image={'../../../assets/images/catalog/product/11-813x1000.jpg'} onLoad={() => this.createZoom()}
                              title="MacBook" alt="MacBook" />
                          </a>
                        </div>

                        <div className="additional-carousel">
                          <div className="customNavigation">
                            <a className="fa prev fa-angle-left"></a>
                            <a className="fa next fa-angle-right"></a>
                          </div>

                          <div id="additional-carousel" className="image-additional product-carousel">
                            <div className="slider-item">
                              <div className="product-block">
                                <a href={'../../../assets/images/catalog/product/11-813x1000.jpg'} title="MacBook" className="elevatezoom-gallery"
                                  data-image={'../../../assets/images/catalog/product/11-813x1000.jpg'}
                                  data-zoom-image={'../../../assets/images/catalog/product/11-813x1000.jpg'} >
                                  <Iimg src={'../../../assets/images/catalog/product/11-813x1000.jpg'} width="74" height="74" title="MacBook" alt="MacBook" />
                                </a>
                              </div>
                            </div>
                            <div className="slider-item">
                              <div className="product-block">
                                <a href={'../../../assets/images/catalog/product/13-813x1000.jpg'} title="MacBook" className="elevatezoom-gallery"
                                  data-image={'../../../assets/images/catalog/product/13-813x1000.jpg'}
                                  data-zoom-image={'../../../assets/images/catalog/product/13-813x1000.jpg'} >
                                  <Iimg src={'../../../assets/images/catalog/product/13-813x1000.jpg'} width="74" height="74" title="MacBook" alt="MacBook" />
                                </a>
                              </div>
                            </div>
                            <div className="slider-item">
                              <div className="product-block">
                                <a href={'../../../assets/images/catalog/product/14-813x1000.jpg'} title="MacBook" className="elevatezoom-gallery"
                                  data-image={'../../../assets/images/catalog/product/14-813x1000.jpg'}
                                  data-zoom-image={'../../../assets/images/catalog/product/14-813x1000.jpg'} >
                                  <Iimg src={'../../../assets/images/catalog/product/14-813x1000.jpg'} width="74" height="74" title="MacBook" alt="MacBook" />
                                </a>
                              </div>
                            </div>
                            <div className="slider-item">
                              <div className="product-block">
                                <a href={'../../../assets/images/catalog/product/15-813x1000.jpg'} title="MacBook" className="elevatezoom-gallery"
                                  data-image={'../../../assets/images/catalog/product/15-813x1000.jpg'}
                                  data-zoom-image={'../../../assets/images/catalog/product/15-813x1000.jpg'}>
                                  <Iimg src={'../../../assets/images/catalog/product/15-813x1000.jpg'} width="74" height="74" title="MacBook" alt="MacBook" />
                                </a>
                              </div>
                            </div>

                          </div>
                          <span className="additional_default_width" style={{ display: 'none', visibility: "hidden" }}></span>
                        </div>

                        {/* <!-- Cloud-Zoom Image Effect End--> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 product-right">
                    <h3 className="product-title">{this.state.product.productName}</h3>
                    <ul className="list-unstyled" style={{ borderTop: 'none' }}>
                      <li><span className="desc">Loại hoa:</span> Thiên Điển </li>
                      <li><span className="desc">Hình thức:</span> Bình Hoa</li>
                      <li><span className="desc">Màu sắc:</span> Tím </li>
                      <li><span className="desc"></span> </li>

                    </ul>
                    <ul className="list-unstyled price">
                      <li>
                        <h2>{(this.state.product.price - (this.state.product.discount * this.state.product.price / 100)).toLocaleString('vi-VN', { currency: 'VND' })} VND</h2>
                      </li>
                      {this.state.product.discount > 0 ? <span style={{ fontSize: '18px' }}>Giảm</span> : null}
                      {this.state.product.discount > 0 ? <span style={this.stylePercentSaving} className="stylePercentSaving">{`${this.state.product.discount}%`}</span> : null}

                      {this.state.product.discount > 0 ? <span style={{ display: 'block', color: '#ffc107', textDecoration: 'line-through', fontSize: '20px' }}>{this.state.product.price.toLocaleString('vi-VN', { currency: 'VND' })} VND</span> : <span></span>}
                      {this.state.product.hot === true ? <span className="saleicon hot" style={this.styleHot}>Hot</span> : null}
                      {this.state.product.new === true ? <span className="saleicon new" style={this.styleNew}>New</span> : null}
                      {this.state.product.sale === true ? <span className="saleicon sale" style={this.styleSale}>Sale</span> : null}

                    </ul>
                    <div id="product">
                      {/* <h3 className="product-option">Available Options</h3>
                      <div className="form-group required">
                      </div> */}
                      <div className="form-group cart">
                        <label className="control-label qty" htmlFor="input-quantity">Số lượng</label>
                        <input type="text" name="quantity" defaultValue="1" size="2" id="input-quantity" className="form-control" />
                        <button type="button" id="button-cart" data-loading-text="Loading..." className="btn btn-primary btn-lg btn-block" style={{ marginLeft: '20px' }}>Thêm vào giỏ hàng</button>

                        <div className="btn-group">
                          <button type="button" className="btn btn-primary wishlist" >Thanh Toán</button>
                          {/* <button type="button" className="btn btn-primary compare" >Add to Compare</button> */}
                        </div>
                      </div>
                      {/* <input type="hidden" name="product_id" defaultValue="43" /> */}

                      {/* <!-- AddThis Button BEGIN --> */}
                      {/* <div className="addthis_toolbox addthis_default_style" data-url="indexb8ca.html?route=product/product&amp;product_id=43">
                        <a href="/" className="addthis_button_facebook_like"></a>
                        <a href="/" className="addthis_button_tweet"></a> <a className="addthis_button_pinterest_pinit"></a>
                        <a href="/" className="addthis_counter addthis_pill_style"></a>
                      </div>
                      <script type="text/javascript" src="../../../../../s7.addthis.com/js/300/addthis_widget.js#pubid=ra-515eeaf54693130e"></script> */}
                      {/* <!-- AddThis Button END --> */}
                    </div>
                  </div>
                  {/* <!-- product page tab code start--> */}
                  <div className="col-md-12">
                    <div id="tabs_info" className="product-tab col-sm-12">
                      <ul className="nav nav-tabs">
                        <li className="active"><a href="/" data-toggle="tab">Description</a></li>
                        {/* <li><a href="#tab-specification" data-toggle="tab">Specification</a></li>
                        <li><a href="#tab-review" data-toggle="tab">Reviews (1)</a></li> */}
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab-description">
                          <div>
                            <p>
                              <b>Intel Core 2 Duo processor</b></p>
                            <p>
                              Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.</p>
                            <p>
                              <b>1GB memory, larger hard drives</b></p>
                            <p>
                              The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect
												for running more of your favorite applications and storing growing media collections.</p>
                            <p>
                              <b>Sleek, 1.08-inch-thin design</b></p>
                            <p>
                              MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless
                              technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally
												trips on the cord.</p>
                            <p>
                              <b>Built-in iSight camera</b></p>
                            <p>
                              Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or
												take fun pictures with Photo Booth</p>
                          </div>
                        </div>
                        {/* <div className="tab-pane" id="tab-specification">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <td colSpan="2"><strong>Memory</strong></td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>test 1</td>
                                <td>8gb</td>
                              </tr>
                            </tbody>
                            <thead>
                              <tr>
                                <td colSpan="2"><strong>Processor</strong></td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>No. of Cores</td>
                                <td>1</td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                        {/* <div className="tab-pane" id="tab-review">
                          <form className="form-horizontal" id="form-review">
                            <div id="review"></div>
                            <h4>Write a review</h4>
                            <div className="form-group required">
                              <div className="col-sm-12">
                                <label className="control-label" htmlFor="input-name">Your Name</label>
                                <input type="text" name="name" defaultValue="" id="input-name" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group required">
                              <div className="col-sm-12">
                                <label className="control-label" htmlFor="input-review">Your Review</label>
                                <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                                <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                              </div>
                            </div>
                            <div className="form-group required">
                              <div className="col-sm-12">
                                <label className="control-label">Rating</label>
                                &nbsp;&nbsp;&nbsp; Bad&nbsp;
													<input type="radio" name="rating" defaultValue="1" />
                                &nbsp;
													<input type="radio" name="rating" defaultValue="2" />
                                &nbsp;
													<input type="radio" name="rating" defaultValue="3" />
                                &nbsp;
													<input type="radio" name="rating" defaultValue="4" />
                                &nbsp;
													<input type="radio" name="rating" defaultValue="5" />
                                &nbsp;Good
												</div>
                            </div>

                            <div className="buttons clearfix">
                              <div className="pull-right">
                                <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                              </div>
                            </div>
                          </form>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box related">
                  <div className="box-heading">
                    <h2 className="products-section-title">Related Products</h2>
                  </div>
                  <div className="tabs">
                    <div className="box-content">
                      <div id="products-related" className="related-products">

                        <div className="customNavigation">
                          <a className="fa prev fa-angle-left"></a>
                          <a className="fa next fa-angle-right"></a>
                        </div>
                        <div className="box-product product-carousel" id="related-carousel">
                          <div className="slider-item">
                            <div className="product-block product-thumb transition">
                              <div className="product-block-inner">
                                <div className="image">
                                  <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                    <Iimg src={'../../../assets/images/catalog/product/14-813x1000.jpg'} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                    <Iimg className="img-responsive hover-image" src={'../../../assets/images/catalog/product/16-813x1000.jpg'} title="Nikon D300"
                                      alt="Nikon D300" />
                                  </a>
                                  <div className="extra-info">
                                  </div>
                                </div>
                                <div className="caption">
                                  <div className="product-deacription-wrapper">
                                    <h4><a href="index.html">Nikon D300 </a></h4>
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
                                      <button className="btn btn-primary compare" type="button">
                                        <i className="fa fa-clone"></i>
                                        Add to Compare
																</button>
                                      <div className="quickview">
                                        <a href="/" className="btn btn-primary">
                                          <i className="fa fa-eye"></i>

                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span className="related_default_width" style={{ display: 'none', visibility: "hidden" }}></span>
                                {/* <!-- Related Products Start --> */}
                              </div>
                            </div>
                          </div>

                          {listProductCardHTML}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </>
    );
  }
}

export default ProductDetail;