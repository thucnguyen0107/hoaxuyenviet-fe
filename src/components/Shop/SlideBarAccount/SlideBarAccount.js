import React from 'react';
import { Menu, Icon, Slider } from 'antd';
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
  // rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  // onOpenChange = (openKeys) => {
  //   const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
  //   if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     this.setState({ openKeys });
  //   } else {
  //     this.setState({
  //       openKeys: latestOpenKey ? [latestOpenKey] : [],
  //     });
  //   }
  // }

  render() {
    return (
      <>
      <div id="content" className="col-sm-9" style={{ height: '375px', marginBottom:'30px' }}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          // onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>Tài khoản của tôi</span></span>}>
          
            <Menu.Item key="1"> Chỉnh sửa thông tin</Menu.Item>
            <Menu.Item key="2">Đổi mật khẩu</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="shopping" /><span>Đơn hàng</span></span>}>
            <Menu.Item key="5">Lịch sử giao dịch</Menu.Item>
            <Menu.Item key="6">Điểm thưởng</Menu.Item>
            <Menu.Item key="7">Giao dịch</Menu.Item>
            <Menu.Item key="8">Thông tin thanh toán</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="bank" /><span>Tài khoản liên kết</span></span>}>
            <Menu.Item key="9">Đăng ký tài khoản liên kết</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="message" /><span>Bản tin</span></span>}>
            <Menu.Item key="10">Bản tin</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      </>
    );
  }
}; 
// { hideLS() }



export default SlideBarAccount;