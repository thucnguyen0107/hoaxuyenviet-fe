import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import checkoutService from '../../../services/checkoutService';
import { isNotEmpty, cloneData, formatCurrency, showNotification } from '../../../utilities/fnUtil'
import { checkoutFormModel } from '../../../models/formModel';
import { endPoints } from "../../../services/config";
import { Link } from "react-router-dom";
import Iimg from "../../../components/UI/LoadingImage/Limg";
import classes from "./Checkout.scss";
import { connect } from "react-redux";
import Axios from "axios";
import Actions from "../../../redux/rootActions";
class Checkout extends React.Component {
  state = {
    checkoutForm: cloneData(checkoutFormModel),
    cartList: [],
  };

  initForm = (user) => {
    let checkoutForm = cloneData(this.state.checkoutForm);
    checkoutForm.fullName.value = user.userInfo.name;
    checkoutForm.email.value = user.userInfo.email;
    checkoutForm.address.value = user.userInfo.address;
    checkoutForm.telephone.value = user._id;

    this.setState({ checkoutForm });
  }

  componentWillMount = () => {
    if (isNotEmpty(this.props.user))
      this.initForm(this.props.user);

    if (this.props.authUser.auth) {
      if (isNotEmpty(this.props.cart)) {
        this.setState({ cartList: cloneData(this.props.cart.productOrder) });
      }
    } else {
      let cartListLS = JSON.parse(localStorage.getItem("list")) || [];
      this.setState({ cartList: cartListLS });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isNotEmpty(nextProps.user))
      this.initForm(nextProps.user);

    if (nextProps.authUser.auth) {
      loadingScreen.showLoading();
      if (isNotEmpty(nextProps.cart)) {
        this.setState({ cartList: cloneData(nextProps.cart.productOrder) }, loadingScreen.hideLoading);
      }
    }
  }

  clearAllCart = () => {
    if (this.props.authUser.auth) {
      let cartData = cloneData(this.props.cart);
      cartData.productOrder = [];
      this.props.removeCartItem(this.props.cart._id, cartData);
    } else {
      loadingScreen.showLoading();
      let cartListLS = [];
      localStorage.setItem('list', JSON.stringify(cartListLS))
      this.setState({ cartList: cartListLS });
      showNotification({ message: "Cập Nhật Giỏ Hàng Thành Công!" });
      loadingScreen.hideLoading();
    }
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        console.log("Valid Form Successfully");
        let orderData = null;
        if (this.props.authUser.auth) {
          orderData = checkoutService.createOrder(cloneData(this.props.cart.productOrder))
        } else {
          orderData = checkoutService.createOrder(JSON.parse(localStorage.getItem('list')))
        }
        Axios.post(endPoints.ORDER_API, orderData)
          .then(res => {
            console.log(res)
            this.clearAllCart();
            this.props.history.replace("/checkoutSuccess");
          }).catch(err => {
            console.log(err);

          })
      }
    });
  };

  render() {
    if (!this.state.cartList.length) {
      return (<>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">Thanh toán</h2>
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
                    Thanh toán
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <div className="text-center">
                <h2 >Giỏ Hàng Đang Trống! Vui Lòng Thêm Sản Phẩm Trước Khi Thanh Toán!</h2>
                <Link to="/home">Tiếp Tục Mua Sắm</Link>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }
    let listOder = null;
    listOder = (
      <>
        {isNotEmpty(this.state.cartList)
          ? this.state.cartList.map((order, index) => {
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
                    <span name="" size="1" className="form-control" style={{
                      padding: '6px 5px',
                      textAlign: 'center',
                      width: '40px',
                      border: 'none'
                    }}>{order.quantity}</span>
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
                <h2 className="page-title">Thanh toán</h2>
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
                    Thanh toán
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
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
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        href="collapse-payment-address"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        className="accordion-toggle collapsed"
                        aria-expanded="false"
                      >
                        Tài khoản  &amp; Chi tiết hóa đơn{" "}
                        <i className="fa fa-caret-down" />
                      </a>
                    </h4>
                  </div>
                  <div
                    className="panel-collapse collapse in"
                    id="collapse-payment-address"
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <fieldset id="account">
                            <legend>Thông tin cá nhân</legend>
                            <Form
                              idForm="checkoutForm"
                              nameForm="checkoutForm"
                              originalForm={this.state.checkoutForm}
                              setState={this.setStateForm}
                              btnName="Xác nhận"
                            />
                            {/* {form} */}
                          </fieldset>
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

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.userList.user,
    cart: state.userList.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCartItem: (cartId, cartData) =>
      dispatch(Actions.userActions.updateCartFromSV(cartId, cartData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

