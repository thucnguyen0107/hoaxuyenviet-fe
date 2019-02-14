import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Iimg from "../../../components/UI/LoadingImage/Limg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
  formatCurrency,
  isNotEmpty,
  cloneData
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

  }


  componentWillMount = () => {
    loadingScreen.showLoading();
    if (this.props.authUser.auth) {
      if (isNotEmpty(this.props.cart)) {
        this.setState({ cartList: cloneData(this.props.cart.productOrder) }, loadingScreen.hideLoading);
      }
    } else {
      let cartListLS = JSON.parse(localStorage.getItem("list")) || [];
      loadingScreen.showLoading();
      this.setState({ cartList: cartListLS });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.authUser.auth) {
      if (isNotEmpty(nextProps.cart)) {
        this.setState({ cartList: cloneData(nextProps.cart.productOrder) });
      }
    }
  }

  onRemoveCartItem = (item) => {
    if (this.props.authUser.auth) {
      let cartData = cloneData(this.props.cart);
      cartData.productOrder.splice(cartData.productOrder.indexOf(item), 1);
      this.props.removeCartItem(this.props.cart._id, cartData);
    } else {
      let cartData = cloneData(this.state.cartList);
      this.state.cartList.splice(cartData.indexOf(item), 1);
      let cartListLS = this.state.cartList.slice(0);
      localStorage.setItem("list", JSON.stringify(cartListLS));
      this.setState({ cartList: cartListLS });
    }
  };

  render() {
    if (!this.state.cartList.length) {
      return (
        <div className="text-center">
          <h2>Giỏ hàng hiện tại đang rỗng!</h2>
          <Link to="/home">Tiếp tục mua sắm</Link>
        </div>
      )
    }

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


        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <h2 className="page-title">
                Thông Tin Giỏ Hàng
              </h2>
              <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=checkout/cart/edit" method="post" encType="multipart/form-data">
                <div className="table-responsive">
                  <table className="table table-bordered shopping-cart">
                    <thead>
                      <tr>
                        <td className="text-center">Hình Ảnh</td>
                        <td className="text-left">Tên Sản Phẩm</td>
                        <td className="text-left">Số Lượng</td>
                        <td className="text-right">Giảm Giá</td>
                        <td className="text-right">Đơn Giá</td>
                        <td className="text-right">Thành Tiền</td>
                        <td className="text-right">Trạng Thái</td>
                      </tr>
                    </thead>
                    {listOder}
                  </table>
                </div>
              </form>
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
      dispatch(Actions.userActions.updateCartFromSV(cartId, cartData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
