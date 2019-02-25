import React from "react";
import ProductCard from "../../../components/UI/ProductCard";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  formatCurrency,
  isNotEmpty,
  cloneData,
  createContentHtmlString
} from "../../../utilities/fnUtil";
import { convertItemToName } from "../../../utilities/categoriesUtil";
import classes from "./ProductDetail.scss";
import { Tag } from "antd";
import cartService from "../../../services/cartService";
import { connect } from "react-redux";
import Actions from "../../../redux/rootActions";
import ImageGallery from 'react-image-gallery';
import Slider from "react-slick";
class ProductDetail extends React.Component {

  state = {
    product: {},
    randomList: []
  };

  constructor(props) {
    super(props);
    this.styleSale = {
      background: "#ffc107",
      padding: "0 5px",
      letterSpacing: "1px",
      textAlign: "center",
      verticalAlign: "middle",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
      marginTop: "20px",
      marginLeft: "20px"
    };
    this.styleHot = {
      background: "#ff6e07",
      padding: "0 5px",
      letterSpacing: "1px",
      textAlign: "center",
      verticalAlign: "middle",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
      marginLeft: "20px"
    };
    this.styleNew = {
      background: "#07ff31",
      padding: "0 5px",
      letterSpacing: "1px",
      textAlign: "center",
      verticalAlign: "middle",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
      marginLeft: "20px"
    };

    this.stylePercentSaving = {
      color: "#000",
      padding: "0",
      textAlign: "center",
      textTransform: "capitalize",
      background: "#fff",
      fontSize: "14px",
      height: "40px",
      width: "40px",
      borderRadius: " 50%",
      lineHeight: "40px",
      fontWeight: "500",
      boxShadow: "0 0 4px 2px rgba(0,0,0,0.15)",
      display: "inline-block",
      marginTop: "10px",
      marginLeft: "10px"
    };
  }

  componentWillMount() {
    loadingScreen.showLoading();
    axios
      .get(endPoints.PRODUCT_API + this.props.match.params.product_id)
      .then(res => {
        axios
          .get(endPoints.GET_RANDOM_LIST + res.type[0], {
            params: {
              productId: res._id
            }
          })
          .then(rl => {
            this.setState({
              product: res,
              randomList: rl
            }, loadingScreen.hideLoading);
          });
      })
      .catch(err => {
        loadingScreen.hideLoading();
        this.props.history.replace("/pageNotFound");
      });
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.match.params.product_id !== nextProps.match.params.product_id
    ) {
      axios
        .get(endPoints.PRODUCT_API + nextProps.match.params.product_id)
        .then(res => {
          axios.get(endPoints.GET_RANDOM_LIST + res.type[0]).then(rl => {
            this.setState(
              {
                product: res,
                randomList: rl
              },
              loadingScreen.hideLoading
            );
          });
        })
        .catch(err => {
          loadingScreen.hideLoading();
          this.props.history.replace("/pageNotFound");
        });
    }
    return true;
  }

  addProductToCart() {
    if (this.props.authUser.auth) {
      let cart = cloneData(this.props.cart);
      const cartItem = cloneData(this.state.product);
      cartItem.quantity = +document.getElementById("input-quantity").value;
      cart.productOrder = cartService.checkExistingItem(
        cartItem,
        cart.productOrder
      );
      this.props.updateCart(this.props.cart._id, cart);
    } else cartService.saveCartItemLSGuest(this.state.product);
  }

  onCheckout() {
    if (this.props.authUser.auth) {
      let cart = cloneData(this.props.cart);
      const cartItem = cloneData(this.state.product);
      cartItem.quantity = +document.getElementById("input-quantity").value;
      cart.productOrder = cartService.checkExistingItem(
        cartItem,
        cart.productOrder
      );
      this.props.updateCart(this.props.cart._id, cart);
      this.props.history.push({ pathname: '/checkout' })
    } else {
      cartService.saveCartItemLSGuest(this.state.product);
      this.props.history.push({ pathname: '/checkout' })
    }
  }


  render() {

    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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



    if (isNotEmpty(this.state.product)) {
      

      const imagesArray = this.state.product.images.map((image) => ({
        original: image,
        thumbnail: image,
      }));

      // loadingScreen.hideLoading();
      return (
        <div className="main-content">
          <div id="breadcrumb">
            <div className="container">
              <div className="row">
                <ul className="breadcrumb">
                  <h2
                    className="page-title"
                    style={{ fontFamily: "Times New Roman" }}
                  >
                    {this.state.product.productName}
                  </h2>
                  <li>
                    <a href="/">
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
                      {this.state.product.productName}
                    </a>
                  </li>
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
                          <ImageGallery showFullscreenButton={false} showPlayButton={false} showNav={false} sizes items={imagesArray} />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 product-right">
                      <h3 className="product-title">
                        {this.state.product.productName}
                      </h3>
                      {this.state.product.hot === true ? (
                        <span className="saleicon hot" style={this.styleHot}>
                          Hot
                        </span>
                      ) : null}
                      {this.state.product.new === true ? (
                        <span className="saleicon new" style={this.styleNew}>
                          New
                        </span>
                      ) : null}
                      {this.state.product.sale === true ? (
                        <span className="saleicon sale" style={this.styleSale}>
                          Sale
                        </span>
                      ) : null}
                      <ul
                        className="list-unstyled"
                        style={{ borderTop: "none" }}
                      >
                        <li className={classes.Category}>
                          <span className="desc">
                            Loại hoa:{" "}
                            {convertItemToName(
                              this.state.product.type,
                              "type"
                            ).map((name, index) => (
                              <Tag color="cyan" key={index}>
                                {name}
                              </Tag>
                            ))}
                          </span>
                        </li>
                        <li className={classes.Category}>
                          <span className="desc">
                            Hình thức:{" "}
                            {convertItemToName(
                              this.state.product.form,
                              "form"
                            ).map((name, index) => (
                              <Tag color="cyan" key={index}>
                                {name}
                              </Tag>
                            ))}
                          </span>
                        </li>
                        <li className={classes.Category}>
                          <span className="desc">
                            Màu sắc:{" "}
                            {convertItemToName(
                              this.state.product.color,
                              "color"
                            ).map((name, index) => (
                              <Tag color="cyan" key={index}>
                                {name}
                              </Tag>
                            ))}
                          </span>{" "}
                        </li>
                      </ul>
                      <ul className="list-unstyled price">
                        <li>
                          <h2>
                            {formatCurrency(
                              this.state.product.price -
                              (this.state.product.discount *
                                this.state.product.price) /
                              100
                            )}{" "}
                            VND
                          </h2>
                        </li>
                        {this.state.product.discount > 0 ? (
                          <span style={{ fontSize: "18px" }}>Giảm</span>
                        ) : null}
                        {this.state.product.discount > 0 ? (
                          <span
                            style={this.stylePercentSaving}
                            className="stylePercentSaving"
                          >{`${this.state.product.discount}%`}</span>
                        ) : null}

                        {this.state.product.discount > 0 ? (
                          <span
                            style={{
                              display: "block",
                              color: "#ffc107",
                              textDecoration: "line-through",
                              fontSize: "20px"
                            }}
                          >
                            {formatCurrency(this.state.product.price)} VND
                          </span>
                        ) : (
                            <span />
                          )}
                      </ul>
                      <div id="product">
                        <div className="form-group cart">
                          <label
                            className="control-label qty"
                            htmlFor="input-quantity"
                          >
                            Số Lượng
                          </label>
                          <input
                            type="number"
                            name="quantity"
                            defaultValue="1"
                            size="2"
                            id="input-quantity"
                            className="form-control"
                            min="1"
                          />
                          <button
                            type="button"
                            id="button-cart"
                            data-loading-text="Loading..."
                            onClick={() => this.addProductToCart()}
                            className="btn btn-primary btn-lg btn-block"
                            style={{ marginLeft: "20px" }}
                          >
                            Thêm vào giỏ hàng
                          </button>

                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-primary wishlist"
                              onClick={() => this.onCheckout()}
                            >
                              Thanh Toán
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- product page tab code start--> */}
                    <div className="col-md-12">
                      <div id="tabs_info" className="product-tab col-sm-12">
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="/" data-toggle="tab">
                              Mô tả
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab-description">
                            <div dangerouslySetInnerHTML={createContentHtmlString(this.state.product.description)}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Slider {...settings}  className={classes.relate_products} >
                    {this.state.randomList.map((card, index) => {
                      return (
                        <div className="box-product"  key={index}>
                          <ProductCard cardContent={card}/>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.userList.user,
    cart: state.userList.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (cartId, cartData) =>
      dispatch(Actions.userActions.updateCartFromSV(cartId, cartData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
