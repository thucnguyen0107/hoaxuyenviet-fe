import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Iimg from "../../../components/UI/LoadingImage/Limg";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cartService from '../../../services/cartService'
import "./Cart.css";
import {
  formatCurrency,
  isNotEmpty,
  cloneData,
  showNotification
} from "../../../utilities/fnUtil";
import classes from "./Cart.scss";
import { Popconfirm } from "antd";
import Actions from "../../../redux/rootActions";
class Cart extends React.Component {
  state = {
    cartList: [],
    totalPrice: 0,
  };

  componentDidMount() {
    loadingScreen.hideLoading();

    window.$('.input-number-increment').click(function() {
      
    });
    
    window.$('.input-number-decrement').click(function() {
      var $input = window.$(this).parents('.input-number-group').find('.input-number');
      var val = parseInt($input.val(), 10);
      $input.val(val - 1);
    })
    
    
  }

  componentWillMount = () => {
    loadingScreen.showLoading();
    if (this.props.authUser.auth) {
      if (isNotEmpty(this.props.cart)) {
        this.setState({ cartList: cloneData(this.props.cart.productOrder) });
      }
    } else {
      let cartListLS = cartService.getCartFromLS();
      loadingScreen.showLoading();
      this.setState({ cartList: cartListLS });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.authUser.auth) {
      if (isNotEmpty(nextProps.cart)) {
        this.setState({ cartList: cloneData(nextProps.cart.productOrder) });
      }
    }
  };

  onIncreQuantity = (orderItem, index) => {
    if(this.props.authUser.auth){
      let cartData = cloneData(this.props.cart);
      cartData.productOrder[index].quantity = ++orderItem.quantity
      this.props.updateCariItem(this.props.cart._id, cartData);
    }else{
      this.state.cartList[index].quantity = ++orderItem.quantity;
      let cartListLS =  cartService.getCartFromLS();
      cartListLS[index].quantity = this.state.cartList[index].quantity;
      loadingScreen.showLoading();
      showNotification({ message: "Cập Nhật Giỏ Hàng Thành Công!" });
      localStorage.setItem("list", JSON.stringify(cartListLS));
      this.setState({ cartList:cartListLS})
      loadingScreen.hideLoading();
    }
    
  }

  onDecreQuantity = (orderItem, index) => {
    if(this.props.authUser.auth){
      let cartData = cloneData(this.props.cart);
      cartData.productOrder[index].quantity = --orderItem.quantity
      if(cartData.productOrder[index].quantity < 1){
        cartData.productOrder[index].quantity = 1;
      }
      this.props.updateCariItem(this.props.cart._id, cartData);
    }else{
      this.state.cartList[index].quantity = --orderItem.quantity;
      if( this.state.cartList[index].quantity < 1){
        this.state.cartList[index].quantity = 1;
      }
      let cartListLS =  cartService.getCartFromLS();
      cartListLS[index].quantity = this.state.cartList[index].quantity;
      loadingScreen.showLoading();
      showNotification({ message: "Cập Nhật Giỏ Hàng Thành Công!" });
      localStorage.setItem("list", JSON.stringify(cartListLS));
      this.setState({ cartList:cartListLS})
      loadingScreen.hideLoading();
    }
    
  }

  onRemoveCartItem = index => {
    if (this.props.authUser.auth) {
      let cartData = cloneData(this.props.cart);
      cartData.productOrder.splice(index, 1);
      this.props.removeCartItem(this.props.cart._id, cartData);
    } else {
      // let cartData = cloneData(this.state.cartList);
      this.state.cartList.splice(index, 1);
      let cartListLS = this.state.cartList.slice(0);
      localStorage.setItem("list", JSON.stringify(cartListLS));
      this.setState({ cartList: cartListLS });
    }
  };

  render() {
    let listOder = null;
    let tempTotalPrice = this.state.totalPrice;
    listOder = (
      <>
        {isNotEmpty(this.state.cartList)
          ? this.state.cartList.map((order, index) => {
              tempTotalPrice +=
                (order.price - (order.price * order.discount) / 100) *
                order.quantity;
              return (
                <tbody key={index}>
                  <tr>
                    <td className="text-center">
                      <Link to={`/productDetail/${order._id}`}>
                        <Iimg
                          className={classes.imageSmall}
                          src={order.images[0]}
                          alt={order.productName}
                          title={order.productName}
                        />
                      </Link>
                    </td>
                    <td className="text-left">
                      <Link to={`/productDetail/${order._id}`}>
                        {order.productName}
                      </Link>
                      <br />
                    </td>

                    <td className="text-left">
                      <div
                        className="input-group btn-block"
                        style={{ maxWidth: "200px" }}
                      >
                        <div className="input-group input-number-group">
                          <div className="input-group-button">
                            <span className="input-number-decrement" onClick={()=>this.onDecreQuantity(order, index)}>-</span>
                          </div>
                          <input readOnly className="input-number" type="number" min="1" value={order.quantity} />
                          <div className="input-group-button">
                            <span className="input-number-increment" onClick={()=>this.onIncreQuantity(order, index)}>+</span>
                          </div>
                        </div>

                        <span className="input-group-btn">
                          <Popconfirm
                            title="Bạn có chắc chắn muốn xóa?"
                            onConfirm={() => this.onRemoveCartItem(index)}
                            okText="Đồng Ý"
                            cancelText="Hủy"
                          >
                            <button type="button" className="btn btn-danger">
                              <i className="fa fa-times-circle" />
                            </button>
                          </Popconfirm>
                        </span>
                      </div>
                    </td>

                    <td className="text-right">
                      {formatCurrency(order.price)} VND
                    </td>
                    <td className="text-right">{order.discount} %</td>
                    <td className="text-right">
                      {formatCurrency(
                        order.price - (order.price * order.discount) / 100
                      )}{" "}
                      VND
                    </td>
                    <td className="text-right">
                      {formatCurrency(
                        (order.price - (order.price * order.discount) / 100) *
                          order.quantity
                      )}{" "}
                      VND
                    </td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </>
    );

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
                  Giỏ hàng
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
                    Giỏ hàng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <h2 className="page-title">Danh sách sản phẩm đã chọn</h2>
              <form
                action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=checkout/cart/edit"
                method="post"
                encType="multipart/form-data"
              >
                <div className="table-responsive">
                  <table className="table table-bordered shopping-cart">
                    <thead>
                      <tr>
                        <td className="text-center">Hình Ảnh</td>
                        <td className="text-left">Tên Sản Phẩm</td>
                        <td className="text-left">Số Lượng</td>
                        <td className="text-right">Đơn Giá</td>
                        <td className="text-right">Giảm Giá</td>
                        <td className="text-right">Giá Sau Khi Giảm</td>
                        <td className="text-right">Thành Tiền</td>
                      </tr>
                    </thead>
                    {listOder}
                  </table>
                </div>
              </form>
              <h2>Nhập Mã Giảm Giá </h2>

              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        href="#collapse-coupon"
                        className="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded="false"
                      >
                        Sử Dụng Mã Giảm Giá <i className="fa fa-caret-down" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapse-coupon"
                    className="panel-collapse collapse"
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="input-coupon"
                      >
                        Nhập Mã Giảm Giá Ở Đây
                      </label>
                      <div className="input-group">
                        {/* <input type="text" name="coupon" defaultValue="" placeholder="Enter your coupon here" id="input-coupon" className="form-control" /> */}
                        <Input
                          inputtype="input"
                          className="form-control"
                          name="coupon"
                          defaultValue=""
                          placeholder="Enter your coupon here"
                          id="input-coupon"
                        />
                        <span className="input-group-btn">
                          <button
                            type="button"
                            defaultValue="Apply Coupon"
                            id="button-coupon"
                            data-loading-text="Loading..."
                            className="btn btn-primary"
                          >
                            Xác nhận mã
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td className="text-right">
                          <strong>Tổng Tiền:</strong>
                        </td>
                        <td className="text-right">
                          {formatCurrency(tempTotalPrice)} VND
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="buttons clearfix">
                <div className="pull-left">
                  <Link to="/home" className="btn btn-default">
                    Tiếp tục mua sắm
                  </Link>
                </div>
                <div className="pull-right">
                  <Link to="/checkout" className="btn btn-primary">
                    Thanh toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
    removeCartItem: (cartId, cartData) =>
      dispatch(Actions.userActions.updateCartFromSV(cartId, cartData)),

      updateCariItem: (cartId, cartData) =>
      dispatch(Actions.userActions.updateCartFromSV(cartId, cartData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
