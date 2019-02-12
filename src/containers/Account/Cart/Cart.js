import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/UI/LoadingImage/Limg';
import Input from '../../../components/UI/Input/Input';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isNotEmpty, cloneData } from '../../../utilities/fnUtil';
class Cart extends React.Component {
  state = {
    HTMLOrderModel: [],
    totalPrice: 0
  }



  componentDidMount() {
    loadingScreen.hideLoading();
  }

  // componentWillMount() {
  //   loadingScreen.showLoading();
  //   axios.get('/datatest/Order.json').then((res) => {
  //     console.log(res);
  //     this.setState({ HTMLOrderModel: res }, loadingScreen.hideLoading)
  //   }).catch((err) => {
  //     loadingScreen.hideLoading();
  //     console.error(err);
  //   })
  // }

  componentWillMount() {
    if (this.props.authUser.auth) {
      if (isNotEmpty(this.props.cart) && this.props.cart.productOrder.length) {
        this.setState({ HTMLOrderModel: cloneData(this.props.cart.productOrder) });
      }
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.authUser.auth) {
  //     if (isNotEmpty(nextProps.cart) && nextProps.cart.productOrder.length) {
  //       this.setState({ HTMLOrderModel: cloneData(nextProps.cart.productOrder) });
  //     }
  //   }
  // }


  render() {

    let listOrder = null;
    let tempTotalPrice = this.state.totalPrice;
    listOrder = (
      <>
        {
          this.state.HTMLOrderModel.map(order => {
            tempTotalPrice += order.productOrder.unitPrice * order.productOrder.quantity
            return (

              <tbody key={order._id}>
                <tr>
                  <td className="text-center">
                    <Link to={`/product/${order.productOrder.productId}`}><Iimg src={'../../../assets/images/catalog/product/1-70x86.jpg'} alt="HP LP3065" title="HP LP3065" className="img-thumbnail" />
                    </Link>
                  </td>
                  <td className="text-left"><Link to={`/product/${order.productOrder.productId}`}>{order.productOrder.productName}</Link><br />
                    <small>Ngày giao hàng: {order.deliveryDate}</small><br />
                    <small>Điểm nhận: 300</small>
                  </td>

                  <td className="text-left"><div className="input-group btn-block" style={{ maxWidth: "200px" }}>
                    <input type="text" name="quantity[5]" defaultValue={order.productOrder.quantity} size="1" className="form-control" style={{
                      padding: '6px 5px',
                      textAlign: 'center',
                      width: '40px'
                    }}></input>
                    {/* <Input inputtype="input" className="form-control" defaultValue="1" size="1"/> */}
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-primary"><i className="fa fa-refresh"></i></button>
                      <button type="button" className="btn btn-danger"><i className="fa fa-times-circle"></i></button>
                    </span></div></td>
                  <td className="text-right">{order.productOrder.discount} %</td>
                  <td className="text-right">{order.productOrder.unitPrice.toLocaleString('vi-VN', { currency: 'VND' })} VND</td>

                  <td className="text-right">{(order.productOrder.unitPrice * order.productOrder.quantity).toLocaleString('vi-VN', { currency: 'VND' })} VND</td>
                </tr>
              </tbody>

            );
          })
        }
      </>
    );



    return (
      <>
        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <h2 className="page-title">
                Danh sách sản phẩm đã chọn
              </h2>
              <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=checkout/cart/edit" method="post" encType="multipart/form-data">
                <div className="table-responsive">
                  <table className="table table-bordered shopping-cart">
                    <thead>
                      <tr>
                        <td className="text-center">Hình ảnh</td>
                        <td className="text-left">Tên sản phẩm</td>
                        <td className="text-left">Số lượng</td>
                        <td className="text-right">Giảm giá</td>
                        <td className="text-right">Đơn giá</td>
                        <td className="text-right">Thành tiền</td>
                      </tr>
                    </thead>
                    {listOrder}
                  </table>
                </div>
              </form>
              <h2>Nhập mã giảm giá </h2>

              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-coupon" className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">Sử dụng mã giảm giá <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div id="collapse-coupon" className="panel-collapse collapse" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body">
                      <label className="col-sm-2 control-label" htmlFor="input-coupon">Nhập mã giảm giá ở đây</label>
                      <div className="input-group">
                        {/* <input type="text" name="coupon" defaultValue="" placeholder="Enter your coupon here" id="input-coupon" className="form-control" /> */}
                        <Input inputtype="input" className="form-control" name="coupon" defaultValue="" placeholder="Enter your coupon here" id="input-coupon" />
                        <span className="input-group-btn">
                          <button style={{ marginTop: '30px' }} type="button" defaultValue="Apply Coupon" id="button-coupon" data-loading-text="Loading..." className="btn btn-primary" >Xác nhận mã</button></span>
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
                        <td className="text-right"><strong>Tổng tiền:</strong></td>
                        <td className="text-right">{tempTotalPrice.toLocaleString('vi-VN', { currency: 'VND' })} VND</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>

              <div className="buttons clearfix">
                <div className="pull-left"><Link to="/home" className="btn btn-default">Tiếp tục mua sắm</Link></div>
                <div className="pull-right"><Link to="/checkout" className="btn btn-primary">Thanh toán</Link></div>
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

export default connect(mapStateToProps)(Cart);