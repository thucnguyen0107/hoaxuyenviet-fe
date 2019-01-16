import React from "react";
import {
  Layout
} from "antd";
import classes from "./Admin.scss";
import SideBar from "../../components/Admin/SideBar/SideBar";
import {
  Route,
  Switch,
  Redirect
} from "react-router";
import ProductManagement from "./ProductManagement/ProductManagement";
import HtmlContentManagement from "./HtmlContentManagement/HtmlContentManagement";
import UserManagement from "./UserManagement/UserManagement";
import OrderManagement from "./OrderManagement/OrderManagement";

const {
  Content
} = Layout;

class Admin extends React.Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const ml200 = this.state.collapsed ? "100px" : "200px";
    return (
      <Layout>
        <SideBar
          collapsed={this.state.collapsed}
          classTrigger={classes.trigger}
          toggle={() => this.toggle()}
        />
        <Layout
          style={{ marginLeft: ml200, transition: "margin 0.2s ease-out" }}
        >
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Switch>
              <Route
                path="/admin/productManagement"
                exact
                component={ProductManagement}
              />
              <Route
                path="/admin/orderManagement"
                exact
                component={OrderManagement}
              />
              <Route
                path="/admin/htmlContentManagement"
                exact
                component={HtmlContentManagement}
              />
              <Route
                path="/admin/userManagement"
                exact
                component={UserManagement}
              />
              <Redirect from="/admin" to="/admin/productManagement" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
