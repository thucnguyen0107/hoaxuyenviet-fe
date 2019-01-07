import React from 'react';
import Header from '../../containers/Shop/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../containers/Shop/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import Category from '../Shop/Category/Category'

class Shop extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/category" exact component={Category} />
          <Redirect from="/" to="/home" />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Shop;