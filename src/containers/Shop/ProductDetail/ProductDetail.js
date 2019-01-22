import React from 'react';
import { arrProductList } from '../../../data/data';
import ProductCard from '../../../components/UI/ProductCard';
import axios from 'axios';
import { endPoints } from '../../../services/config';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/UI/LoadingImage/Limg';
import { formatCurrency, isNotEmpty } from '../../../utilities/fnUtil';
import { convertItemToName } from '../../../utilities/categoriesUtil';
import classes from './ProductDetail.scss'
import { Tag } from 'antd';
class ProductDetail extends React.Component {

  createZoom = () => {
    let $ = window.$;
    if (!window.$('.zoomContainer')[0]) {
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
      } else {
        $(document).on('click', '.thumbnail', function () {
          $('.thumbnails').magnificPopup('open', 0);
          return false;
        });
      }

    }
  }

  init = () => {
    let $ = window.$;
    $(document).ready(function () {
      if ($(window).width() > 767) {
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
      randomList: {}
    }
    this.styleSale = {
      background: '#ffc107',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#fff',
      marginTop: '20px',
      marginLeft: '20px'
    }
    this.styleHot = {
      background: '#ff6e07',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#fff',
      marginLeft: '20px'
    }
    this.styleNew = {
      background: '#07ff31',
      padding: '0 5px',
      letterSpacing: '1px',
      textAlign: 'center',
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
      axios.get(endPoints.GET_RANDOM_LIST + res.type[0], {params: {
        productId: res._id
      }}).then((rl) => {
        this.setState({
          product: res,
          randomList: rl
        })
      })
    }).catch((err) => {
      loadingScreen.hideLoading();
      this.props.history.replace('/pageNotFound');
    })

  }

  shouldComponentUpdate(nextProps) {
    loadingScreen.showLoading();
    if (this.props.match.params.product_id !== nextProps.match.params.product_id) {
      axios.get(endPoints.GET_PRODUCT_BY_ID + nextProps.match.params.product_id).then((res) => {
        axios.get(endPoints.GET_RANDOM_LIST + res.type[0]).then((rl) => {
          this.setState({
            product: res,
            randomList: rl
          }, () => true)
        })
      }).catch((err) => {
        loadingScreen.hideLoading();
        this.props.history.replace('/pageNotFound');
      })
    }
    return true;
  }
  componentWillUpdate() {
    loadingScreen.showLoading();
  }

  componentDidUpdate() {
    if (isNotEmpty(this.state.product)) {
      window.productCarouselAutoSet();
      this.init();
    }
  }

  // componentDidMount() {
  //   this.init();
  // }

  componentWillUnmount() {
    window.$('.zoomContainer').remove()
  }

  render() {
    if (isNotEmpty(this.state.product)) {
      let listProductCardHTML = [];

      listProductCardHTML = (
        <>
          {
            this.state.randomList.map((card, index) => {
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

      let listAdditionalProductHTML = [];

      listAdditionalProductHTML = (
        this.state.product.images.map((img, index) => {
          return (
            <div className="slider-item" key={index}>
              <div className="product-block">
                <a href={img} title={this.state.product.productName} className="elevatezoom-gallery"
                  data-image={img}
                  data-zoom-image={img} >
                  <Iimg src={img} title={`${this.state.product.productName}`} alt={`${this.state.product.productName}`} />
                </a>
              </div>
            </div>
          )
        })
      );
      loadingScreen.hideLoading();
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
                            <a className="thumbnail" href={this.state.product.images[0]} title="MacBook" >
                              <Iimg id="tmzoom" src={this.state.product.images[0]} data-zoom-image={this.state.product.images[0]}
                                onLoad={() => this.createZoom()}
                                title="MacBook" alt="MacBook" />
                            </a>
                          </div>

                          <div className="additional-carousel">
                            <div className="customNavigation">
                              <a className="fa prev fa-angle-left"></a>
                              <a className="fa next fa-angle-right"></a>
                            </div>

                            <div id="additional-carousel" className="image-additional product-carousel">
                              {listAdditionalProductHTML}

                            </div>
                            <span className="additional_default_width" style={{ display: 'none', visibility: "hidden" }}></span>
                          </div>

                          {/* <!-- Cloud-Zoom Image Effect End--> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 product-right">
                      <h3 className="product-title">{this.state.product.productName}</h3>
                      {this.state.product.hot === true ? <span className="saleicon hot" style={this.styleHot}>Hot</span> : null}
                      {this.state.product.new === true ? <span className="saleicon new" style={this.styleNew}>New</span> : null}
                      {this.state.product.sale === true ? <span className="saleicon sale" style={this.styleSale}>Sale</span> : null}
                      <ul className="list-unstyled" style={{ borderTop: 'none' }}>
                        <li className={classes.Category}><span className="desc">Loại hoa: {convertItemToName(this.state.product.type, 'type').map((name, index) => <Tag color="cyan" key={index}>{name}</Tag>)}</span></li>
                        <li className={classes.Category}><span className="desc">Hình thức: {convertItemToName(this.state.product.form, 'form').map((name, index) => <Tag color="cyan" key={index}>{name}</Tag>)}</span></li>
                        <li className={classes.Category}><span className="desc">Màu sắc: {convertItemToName(this.state.product.color, 'color').map((name, index) => <Tag color="cyan" key={index}>{name}</Tag>)}</span> </li>

                      </ul>
                      <ul className="list-unstyled price">
                        <li>
                          <h2>{formatCurrency((this.state.product.price - (this.state.product.discount * this.state.product.price / 100)))} VND</h2>
                        </li>
                        {this.state.product.discount > 0 ? <span style={{ fontSize: '18px' }}>Giảm</span> : null}
                        {this.state.product.discount > 0 ? <span style={this.stylePercentSaving} className="stylePercentSaving">{`${this.state.product.discount}%`}</span> : null}

                        {this.state.product.discount > 0 ? <span style={{ display: 'block', color: '#ffc107', textDecoration: 'line-through', fontSize: '20px' }}>{formatCurrency(this.state.product.price)} VND</span> : <span></span>}


                      </ul>
                      <div id="product">
                        <div className="form-group cart">
                          <label className="control-label qty" htmlFor="input-quantity">Số lượng</label>
                          <input type="text" name="quantity" defaultValue="1" size="2" id="input-quantity" className="form-control" />
                          <button type="button" id="button-cart" data-loading-text="Loading..." onClick={this.SaveDataToLocalStorage} className="btn btn-primary btn-lg btn-block" style={{ marginLeft: '20px' }}>Thêm vào giỏ hàng</button>

                          <div className="btn-group">
                            <button type="button" className="btn btn-primary wishlist" >Thanh Toán</button>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* <!-- product page tab code start--> */}
                    <div className="col-md-12">
                      <div id="tabs_info" className="product-tab col-sm-12">
                        <ul className="nav nav-tabs">
                          <li className="active"><a href="/" data-toggle="tab">Description</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab-description">
                            <div>
                              {this.state.product.description}
                            </div>
                          </div>

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
    } else {
      // loadingScreen.showLoading();
      return (
        null
      )
    }
  }

}

export default ProductDetail;