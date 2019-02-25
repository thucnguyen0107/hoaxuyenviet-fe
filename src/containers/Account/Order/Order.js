import React from 'react';
import { Table } from 'antd';
import { connect } from "react-redux";
import Axios from 'axios';
import { endPoints } from '../../../services/config';
import {
  formatCurrency,
  formatDate,
  convertStatus
} from "../../../utilities/fnUtil";
import loadingScreen from '../../../utilities/loadingScreen';
class Order extends React.Component {
  state = {
    orderList: []
  }

  componentWillMount() {
    loadingScreen.showLoading();
    if (this.props.authUser.auth) {
      Axios.get(endPoints.ORDER_LIST_API + "/" + this.props.user._id)
        .then(res => {
          this.setState({ orderList: res }, loadingScreen.hideLoading)
        }).catch(err => {
        })
    }
  }

  render() {
    const columns = [
      {
        title: 'Mã Đơn Hàng',
        dataIndex: 'id',
      },
      {
        title: 'Trạng Thái',
        dataIndex: 'status',
      },
      {
        title: 'Ngày Đặt Hàng',
        dataIndex: 'createdAt',
      },
      {
        title: 'Ngày Giao Hàng',
        dataIndex: 'deliveryDate',
      },
      {
        title: 'Địa Chỉ Nhận',
        dataIndex: 'address',
      },
      {
        title: 'Tổng Tiền',
        dataIndex: 'price',
      },
      {
        title: 'Ghi Chú',
        dataIndex: 'note',
      }

    ];
    let data = !this.state.orderList.length
      ? []
      : this.state.orderList.map(item => {
        return {
          key: item._id,
          id: item._id,
          status: item.order ? convertStatus(item.order.status) : "",
          createdAt: item.createdAt ? formatDate(item.createdAt) : "",
          deliveryDate: item.order ? item.order.deliveryDate : "",
          address: item.receiverInfo.address ? item.receiverInfo.address : item.customerInfo.address,
          price: item.order ? `${formatCurrency(item.order.finalPrice)} VND` : "",
          note: item.order ? item.order.note : ""

          // key: item._id,
          // _id: item._id,
          // customerInfo: item.customerInfo ? item.customerInfo : "",
          // receiverInfo: item.receiverInfo ? item.receiverInfo : "",
          // deliveryDate: item.order ? item.order.deliveryDate : "",
          // note: item.order ? item.order.note : "",
          // payment: item.order ? item.order.payment : "",
          // finalPrice: item.order ? item.order.finalPrice : "",
          // status: item.order ? item.order.status : "",
          // productOrder: item.order ? item.order.productOrder : "",
          // createdAt: item.createdAt,
          // updatedAt: item.updatedAt
        };
      });

    return (
      <>
        <div >
          <Table columns={columns} dataSource={data} bordered
            scroll={{ x: true }} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.userList.user,
  };
};



export default connect(
  mapStateToProps,
)(Order);