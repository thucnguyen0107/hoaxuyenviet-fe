import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideBar = props => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0
      }}
    >
      <Icon
        className={props.classTrigger}
        type={props.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={props.toggle}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={{ pathname: "/admin/productManagement" }}>
            <Icon type="database" />
            <span>Quản lý sản phẩm</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={{ pathname: "/admin/orderManagement" }}>
            <Icon type="shopping-cart" />
            <span>Quản lý đơn hàng</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={{ pathname: "/admin/userManagement" }}>
            <Icon type="user" />
            <span>Quản lý người dùng</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={{ pathname: "/admin/htmlContentManagement" }}>
            <Icon type="shop" />
            <span>Quản lý nội dung</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
