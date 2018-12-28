import React from 'react';
import Logo from '../../assets/images/catalog/logo.png';
import NavigationItem from '../TopNavigation/NavigationItem/NavigationItem';

const topNavigation = (props) => {

  let navList = [];
  console.log(props.listCategoriesName)

  navList = (
    <>
      {
        props.listCategoriesName.map(category => {
          return (
            <NavigationItem
              key={category.id} type={category.type}
              subNavList={category.subCategories}
            >{category.name}
            </NavigationItem>
          )
        })
      }

    </>
  )



  return (
    <header>
      <div className="header">
        <div className="header-middle">
          <div className="header-middle-wrapper">
            <div className="header-left">
              <div className="header-logo">
                <div id="logo">
                  <a href="index9328.html?route=common/home"><img src={Logo} title="Style-Light" alt="Style-Light"
                    className="img-responsive" /></a>
                </div>
              </div>
            </div>
            <div className="header-center">
              <div className="main-menu-wrapper">
                <nav className="nav-container" role="navigation">
                  <div className="nav-inner">
                    <div id="menu" className="main-menu">
                      <div className="nav-responsive">
                        <span>Menu</span>
                        <div className="expandable"></div>
                      </div>
                      <ul className="nav navbar-nav">
                        {navList}

                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="header-cart-wrapper">
                <div className="header-cart">
                  <div id="cart" className="btn-group btn-block">
                    <button type="button" data-toggle="dropdown" data-loading-text="Loading..." className="btn btn-inverse btn-block btn-lg dropdown-toggle">
                      <span id="cart-title">My Cart</span>
                      <i className="fa fa-angle-down"></i>
                      <span id="cart-total">
                        <span className="single-item">0</span>
                      </span>
                    </button>
                    <ul className="dropdown-menu pull-right cart-menu">
                      <li>
                        <p className="text-center">Your shopping cart is empty!</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search">
                <div className="header-search dropdown-toggle" data-toggle="dropdown">
                  <span className="text-search">Search</span>
                  <i className="fa fa-angle-down"></i>
                </div>
                <div id="search" className="input-group">
                  <input type="text" name="search" placeholder="Search here..." className="form-control input-lg" />
                  <span className="input-group-btn">
                    <button type="button" className="btn-default btn-lg">
                      <span className="search_button"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </button>
                  </span>
                </div>
              </div>
              <div className="myaccount-wrapper">
                <div className="dropdown myaccount">
                  <a href="indexe223.html?route=account/account" title="My Account" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="account-title">My Account</span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right myaccount-menu">
                    <li><a href="index5502.html?route=account/register">Register</a></li>
                    <li><a href="indexe223.html?route=account/login">Login</a></li>
                    <nav id="top">
                      <div id="top-links" className="nav">
                        <ul className="list-inline">


                          <li><a href="index630e.html?route=checkout/checkout" title="Checkout"><span className="checkout">Checkout</span></a></li>
                        </ul>
                      </div>
                    </nav>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default topNavigation;