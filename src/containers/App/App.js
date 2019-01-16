import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Admin from "../Admin/Admin";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "../../services/interceptors";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Shop} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
