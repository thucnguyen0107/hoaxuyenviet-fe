import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Iimg from "../../../components/UI/LoadingImage/Limg";
import Input from "../../../components/UI/Input/Input";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  formatCurrency,
  showNotification,
  isNotEmpty
} from "../../../utilities/fnUtil";
import classes from "./Cart.scss";
import cartService from "../../../services/cartService";
import loginService from '../../../services/loginService';
import { Popconfirm } from "antd";
class Cart extends React.Component {
  state = {
    cartList: [],
    totalPrice: 0,
  };



  componentDidMount() {
    loadingScreen.hideLoading();

  }

  componentWillMount = () => {
    // let arrayProductOrder = JSON.parse(localStorage.getItem("listAuth"));
    let arrayProductOrder = cartService.getProductToCart();
    loadingScreen.showLoading();
    this.setState({ cartList: arrayProductOrder });
  };

  removeCartItemLS = (cartList, itemID) => {
    const newCartList = cartService.removeCartItemLS(cartList, itemID);
    this.setState({ cartList: newCartList });
    showNotification({ message: "Xóa thành công!" });


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
                    <small>Ngày giao hàng: </small>
                    <br />
                    <small>Điểm nhận: 300</small>
                  </td>

                  <td className="text-left"><div className="input-group btn-block" style={{ maxWidth: "200px" }}>
                    <input type="number" name="quantity[5]" defaultValue={order.quantity} size="1" className="form-control" style={{
                      padding: '6px 5px',
                      textAlign: 'center',
                      width: '40px'
                    }}></input>
                    {/* <Input inputtype="input" className="form-control" defaultValue="1" size="1"/> */}
                    <span className="input-group-btn">
                      {/* <button type="submit" className="btn btn-primary"><i className="fa fa-refresh"></i></button> */}

                      <Popconfirm
                        title="Bạn có chắc chắn muốn xóa?"
                        onConfirm={() => this.removeCartItemLS(this.state.cartList, order._id)}
                        okText="Đồng Ý"
                        cancelText="Hủy">
                        <button type="button" className="btn btn-danger"><i className="fa fa-times-circle" ></i></button></Popconfirm>
                    </span>
                  </div>
                  </td>

                  <td className="text-right">
                    {formatCurrency(order.price)} VND
                    </td>
                  <td className="text-right">{order.discount} %</td>
                  <td className="text-right">{formatCurrency((order.price - (order.price * order.discount / 100)))} VND</td>
                  <td className="text-right">{formatCurrency((order.price - (order.price * order.discount / 100)) * order.quantity)} VND</td>
                </tr>
              </tbody>
            );
          })
          : null}
      </>
    );

    return (
      <>
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
                        <td className="text-center">Hình ảnh</td>
                        <td className="text-left">Tên sản phẩm</td>
                        <td className="text-left">Số lượng</td>
                        <td className="text-right">Đơn giá</td>
                        <td className="text-right">Giảm giá</td>
                        <td className="text-right">Giá sau khi giảm</td>
                        <td className="text-right">Thành tiền</td>
                      </tr>
                    </thead>
                    {listOder}
                  </table>
                </div>
              </form>
              <h2>Nhập mã giảm giá </h2>

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
                        Sử dụng mã giảm giá <i className="fa fa-caret-down" />
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
                        Nhập mã giảm giá ở đây
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
                            style={{ marginTop: "30px" }}
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
                          <strong>Tổng tiền:</strong>
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
      </>
    );
  }
}

export default Cart;
