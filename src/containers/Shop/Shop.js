import React from 'react';
import Header from '../../containers/Shop/Header/Header';
// import Footer from '../../components/Shop/Footer/Footer';
import Footer from '../../containers/Shop/Footer/Footer'
import Home from '../../containers/Shop/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import Category from '../Shop/Category/Category';
import notFoundPage from '../../components/Shop/404/404';
import ProductDetail from '../Shop/ProductDetail/ProductDetail';
import Search from '../Shop/Search/Search';
import Cart from '../Shop/Cart/Cart';
import Checkout from '../Shop/Checkout/Checkout';
import Login from '../../containers/Shop/Login/Login';
import Blogs from '../Shop/Blogs/Blogs';
import Account from '../../containers/Account/Account';
import BlogDetail from '../Shop/BlogDetail/BlogDetail';
import Register from '../../containers/Shop/Register/Register';
import ForGotPassWord from '../../containers/Shop/ForGotPassword/ForGotPassword';
import { connect } from "react-redux";

class Shop extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/category/:first/:second" exact component={Category} />
          <Route path="/productDetail/:product_id" exact component={ProductDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogDetail/:blog_id" exact component={BlogDetail} />
          {/* {this.props.authUser.auth ? <Route path="/account" exact component={Account} /> : <Route path="/pageNotFound" exact component={notFoundPage} />} */}
          <Route path="/register" exact component={Register} />
          <Route path="/forgotpassword" exact component={ForGotPassWord} />
          <Route path="/account" component={Account} />
          <Route path="/login" exact component={Login} />
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

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(
  mapStateToProps
)(Shop);
