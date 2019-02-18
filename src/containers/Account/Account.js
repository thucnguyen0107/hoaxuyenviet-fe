import React from "react";
import SlideBarAccount from "../../components/Shop/SlideBarAccount/SlideBarAccount";
import { Route, Switch, Redirect } from "react-router";
import EditInformation from "./EditInformation/EditInformation";
import Order from "./Order/Order";
import Cart from "./Cart/Cart";
import Reward from "./Reward/Reward";
import { connect } from "react-redux";

class Account extends React.Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">TÀI KHOẢN CỦA TÔI</h2>
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
                    Tài Khoản Của Tôi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SlideBarAccount />
            </div>
            <div
              className="col-md-8"
              style={{ margin: "24px 16px 20px", overflow: "initial" }}
            >
              <Switch>
                <Route
                  path="/account/editinformation"
                  exact
                  component={EditInformation}
                />
                <Route path="/account/order" exact component={Order} />
                <Route path="/account/cart" exact component={Cart} />
                <Route path="/account/reward" exact component={Reward} />
                <Redirect from="/account" to="/account/editinformation" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps)(Account);
