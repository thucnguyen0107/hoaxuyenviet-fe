import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Admin from "../Admin/Admin";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "../../services/interceptors";
import Login from "../Admin/Login/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Shop} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
