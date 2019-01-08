import React from 'react';
import Header from '../../containers/Shop/Header/Header';
import Footer from '../../components/Shop/Footer/Footer';
import Home from '../../containers/Shop/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import Category from '../Shop/Category/Category';
import notFoundPage from '../../components/Shop/404/404';
import ProductDetail from '../Shop/ProductDetail/ProductDetail';

class Shop extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/category/:first/:second" exact component={Category} />
          <Route path="/test" exact component={ProductDetail} />
          <Redirect from="/" to="/home" exact />
          <Route path="/pageNotFound" exact component={notFoundPage} />
          <Route component={notFoundPage} />

        </Switch>
        <Footer />
      </>
    )
  }
}

export default Shop;