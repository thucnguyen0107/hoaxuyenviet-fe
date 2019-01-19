import React from 'react';
import SlideBarAccount from '../../components/Shop/SlideBarAccount/SlideBarAccount';
import {Layout} from "antd";
import {Route, Switch, Redirect} from "react-router";
import ChangePassword from './ChangePassword/ChangePassword';
import classes from "./Account.scss";

const {
    Content
  } = Layout;
 class Account extends React.Component{
    state = {
        collapsed: false
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
      };
     render(){
        const ml200 = this.state.collapsed ? "100px" : "200px";
         return(
         <>
         <div id="breadcrumb">
        <div className="container">
          <div className="row">
            <ul className="breadcrumb">
              <h2 className="page-title">TÀI KHOẢN CỦA TÔI</h2>
              <li><a href="/"><i className="fa fa-home"></i></a></li>
              <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Tài Khoản Của Tôi</a></li>
            </ul>
          </div>
        </div>
      </div>
     
         <SlideBarAccount
         />
         <Layout style={{ marginLeft: "200px", transition: "margin 0.2s ease-out" }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Switch>
              <Route
                path="/account/changepassword"
                exact
                component={ChangePassword}
              />
              
              <Redirect from="/admin" to="/account/changepassword" />
            </Switch>
          </Content>
        </Layout>
     
         </>
         );
     }
 }
 export default Account;