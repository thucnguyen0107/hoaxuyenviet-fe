import React from 'react';
// import Logo from '../../assets/images/catalog/logo.png';
import Logo from '../../../assets/images/catalog/logo.png';
import NavigationItem from '../TopNavigation/NavigationItem/NavigationItem';
import './TopNavigation.css';
import { Link } from 'react-router-dom';
import { formatCurrency, isNotEmpty } from '../../../utilities/fnUtil';
import { Popconfirm } from "antd";
let tempTotalPrice = 0;
function focusSelected() {
  document.body.style.overflow = "hidden";

  const UnDark = document.querySelector('.UnDark');
  if (UnDark.classList.contains('UnDark')) {
    UnDark.classList.remove('UnDark');
    UnDark.classList.add('Dark');

    // document.querySelector('.inputField').style.zIndex = '22000';

  }
}

function blurSelected() {
  document.body.style.overflow = "visible";

  const Dark = document.querySelector('.Dark');
  if (Dark.classList.contains('Dark')) {
    Dark.classList.remove('Dark');
    Dark.classList.add('UnDark');

  }
}
let cartList = [];
function loadCart() {
  let arrayProductOrder = JSON.parse(localStorage.getItem('list'));
  tempTotalPrice = 0;
  cartList = (
    <>
      {
        isNotEmpty(arrayProductOrder) ?
          arrayProductOrder.map((order, index) => {
            tempTotalPrice += ((order.price - (order.price * order.discount / 100)) * order.quantity)
            return (
              <li key={index}>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td className="text-left">
                        <Link to={`/productDetail/${order._id}`}>
                          <img src={order.images[0]} alt={order.productName} title={order.productName} className="img-thumbnail imageSmall" />
                        </Link>
                      </td>
                      <td className="text-left">
                        <Link to={`/productDetail/${order._id}`}>{order.productName}</Link>
                        <p>Số lượng: {order.quantity}</p>
                        <p>Giá: {formatCurrency((order.price - (order.price * order.discount / 100)) * JSON.parse(order.quantity))} VND </p>
                      </td>


                      <td className="text-center"><button type="button" title="Remove" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button></td>

                    </tr>
                  </tbody></table>
              </li>
            );

          }) : <p>Giỏ hàng của bạn rỗng</p>
      }

    </>
  );

}
const topNavigation = (props) => {

  let zIndexStyle;
  zIndexStyle = {
    zIndex: '30000'
  }

  let styleInput;
  styleInput = {
    width: '60%',
    margin: '0 auto',
    fontFamily: 'auto',
    zIndex: '20000'
  }

  let navList = [];

  navList = (
    <>
      {

        props.listCategoriesName.map((category, index) => {
          return (
            <NavigationItem
              key={index} type={category.type}
              subNavList={category.subCategories}
              parentNav={category.id}>
              {category.name}
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
                    <button type="button" data-toggle="dropdown" data-loading-text="Loading..." className="btn btn-inverse btn-block btn-lg dropdown-toggle" onClick={loadCart()}>
                      <span id="cart-title">Giỏ hàng</span>
                      <i className="fa fa-angle-down"></i>
                      <span id="cart-total">
                        <span className="single-item">0</span>
                      </span>
                    </button>
                    <ul className="dropdown-menu pull-right cart-menu" style={zIndexStyle}>
                      {cartList}
                      <li>
                        <div>
                          <table className="table table-bordered">
                            <tbody>

                              <tr>
                                <td className="text-right"><strong>Tổng tiền</strong></td>
                                <td className="text-right">{formatCurrency(tempTotalPrice)} VND</td>
                              </tr>
                            </tbody></table>
                          <div className="text-right button-container"><Link className="addtocart" to="/cart"><strong>Giỏ hàng</strong></Link>&nbsp;&nbsp;&nbsp;<Link to="/checkout" className="checkout"><strong>Thanh toán</strong></Link></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search">
                {/* <div className="header-search dropdown-toggle" data-toggle="dropdown">
                  <span className="text-search">Search</span>
                  <i className="fa fa-angle-down"></i>
                </div> */}

                <div className="UnDark"></div>


                {/* <div id="search" className="input-group" style={{ zIndex: '20000' }}>
                  <input type="text" name="search" placeholder="Nhập từ khóa..." className="form-control input-lg inputField" onFocus={focusSelected} onBlur={blurSelected} />
                  <span className="input-group-btn">
                    <button type="button" className="btn-default btn-lg">
                      <span className="search_button"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </button>
                  </span>
                </div> */}

              </div>
              <div className="myaccount-wrapper">
                <div className="dropdown myaccount">
                  <a href="indexe223.html?route=account/account" title="My Account" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="account-title">My Account</span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right myaccount-menu" style={zIndexStyle}>
                    <li><a href="index5502.html?route=account/register">Đăng ký</a></li>
                    <li><a href="indexe223.html?route=account/login">Đăng nhập</a></li>
                    <nav id="top">
                      <div id="top-links" className="nav">
                        <ul className="list-inline">


                          <li><a href="index630e.html?route=checkout/checkout" title="Checkout"><span className="checkout">Kiểm tra</span></a></li>
                        </ul>
                      </div>
                    </nav>

                  </ul>
                </div>
              </div>
            </div>
            <div style={styleInput} id="flowerInput" className="input-group" >
              <input id="" type="text" name="search" placeholder="Bạn muốn gửi gắm yêu thương vào hoa gì?" className="form-control input-lg inputField" onFocus={focusSelected} onBlur={blurSelected} />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default topNavigation;