import React from 'react';
import Header from '../../containers/Shop/Header/Header';
import Footer from '../../components/Shop/Footer/Footer';
import Home from '../../containers/Shop/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import Category from '../Shop/Category/Category';
import notFoundPage from '../../components/Shop/404/404';
import ProductDetail from '../Shop/ProductDetail/ProductDetail';
import Search from '../Shop/Search/Search';
import Cart from '../Shop/Cart/Cart';
import Checkout from '../Shop/Checkout/Checkout';
import Blog from '../Shop/Blog/Blog';
import Register from '../../components/Shop/Register/Register';
import ForGotPassWord from '../../components/Shop/ForGotPassword/ForGotPassword';

class Shop extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/category/:first/:second" exact component={Category} />
          <Route path="/product/:product_id" exact component={ProductDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/register" exact component={Register} />
          <Route path="/forgotpassword" exact component={ForGotPassWord} />
          <Redirect from="/" to="/home" exact />
          <Route path="/pageNotFound" exact component={notFoundPage} />
          <Redirect to="/pageNotFound" />
        </Switch>
        <Footer />
        <div id="spinner" ></div>
      </>
    )
  }
}

export default Shop;