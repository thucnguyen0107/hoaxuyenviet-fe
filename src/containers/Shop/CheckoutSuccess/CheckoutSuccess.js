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

  componentWillMount() {

  }


  render() {
    return (
      <>
        <div className="text-center">
          <img style={{ display: 'block', margin: '0 auto', width: "100px", height: '100px' }} className="img-responsive" src={SuccessImg} alt="Success" />
          <h2>Bạn Đã Đặt Hàng Thành Công, Vui Lòng Kiểm Tra Email Để Theo Dõi Đơn Hàng</h2>
          <Link to="/home">Tiếp Tục Mua Sắm</Link>
        </div>
      </>
    );
  }

}

export default CheckoutSuccess;