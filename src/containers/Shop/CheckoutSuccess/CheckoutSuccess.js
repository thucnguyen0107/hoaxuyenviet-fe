import React from "react";
import SuccessImg from '../../../assets/images/catalog/success.png';
import { Link } from "react-router-dom";
import loadingScreen from "../../../utilities/loadingScreen";
class CheckoutSuccess extends React.Component {
  state = {
    orderInfo: {}
  }
  componentDidMount() {
    loadingScreen.hideLoading();
  }
  render() {
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
        <div className="text-center" style={{ padding: '50px 0' }}>
          <img style={{ display: 'block', margin: '0 auto', width: "100px", height: '100px', marginBottom: '30px' }} className="img-responsive" src={SuccessImg} alt="Success" />
          <h2 style={{ marginBottom: '30px' }}>Bạn Đã Đặt Hàng Thành Công</h2>
          <h2 style={{ marginBottom: '30px' }}>Vui Lòng Kiểm Tra Email Để Theo Dõi Đơn Hàng</h2>
          <Link to="/home">Tiếp Tục Mua Sắm</Link>
        </div>
      </>
    );
  }

}

export default CheckoutSuccess;