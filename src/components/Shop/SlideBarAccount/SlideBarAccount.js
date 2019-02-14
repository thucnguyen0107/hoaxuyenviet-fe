import React from 'react';
import { Menu, Icon } from 'antd';
import loadingScreen from '../../../utilities/loadingScreen';
import { Link } from "react-router-dom";


const SubMenu = Menu.SubMenu;
// const hideLS = () => {
//   window.$(document).ready(() => {
//     loadingScreen.hideLoading();
//   })
// }


class SlideBarAccount extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256, height: 390 }}
        >
          <Menu.Item key="1">
            <Link to={{ pathname: "/account/editinformation" }}>
              <Icon type="user"></Icon>
              <span>
                Tài Khoản Của Tôi
            </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to={{ pathname: "/account/order" }}>
              <Icon type="shopping"></Icon>
              <span>
                Lịch Sử Đơn Hàng
            </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to={{ pathname: "/account/reward" }}>
              <Icon type="trophy"></Icon>
              <span>
                Điểm Thưởng
            </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to={{ pathname: "/account/cart" }}>
              <Icon type="shopping-cart"></Icon>
              <span>
                Giỏ Hàng
            </span>
            </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
};
// { hideLS() }



export default SlideBarAccount;