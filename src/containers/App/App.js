import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Admin from "../Admin/Admin";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import "../../services/interceptors";
import Login from "../Admin/Login/Login";
import { connect } from "react-redux";
import Actions from "../../redux/rootActions";

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("authUser")) this.props.getAuthUserFromLS();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {window.location.pathname.includes("admin") ? (
            this.props.authUser.auth && this.props.authUser.role === "ADMIN" ? (
              <Route path="/admin" component={Admin} />
            ) : (
              <Route to="/admin/login" exact component={Login} />
            )
          ) : (
            <Route path="/" component={Shop} />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthUserFromLS: () => dispatch(Actions.userActions.getAuthUserFromLS())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
