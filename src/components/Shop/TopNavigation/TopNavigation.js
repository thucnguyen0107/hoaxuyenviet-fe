import React from "react";
// import Logo from '../../assets/images/catalog/logo.png';
import Logo from "../../../assets/images/catalog/logo.png";
import NavigationItem from "../TopNavigation/NavigationItem/NavigationItem";
import "./TopNavigation.css";
import { Link } from "react-router-dom";
import { formatCurrency, isNotEmpty } from "../../../utilities/fnUtil";
import cartService from "../../../services/cartService";
import { connect } from "react-redux";
let tempTotalPrice = 0;
function focusSelected() {
  document.body.style.overflow = "hidden";

  const UnDark = document.querySelector(".UnDark");
  if (UnDark.classList.contains("UnDark")) {
    UnDark.classList.remove("UnDark");
    UnDark.classList.add("Dark");
  }
}

function blurSelected() {
  document.body.style.overflow = "visible";

  const Dark = document.querySelector(".Dark");
  if (Dark.classList.contains("Dark")) {
    Dark.classList.remove("Dark");
    Dark.classList.add("UnDark");
  }
}

const closeMenu = () => {
  window.$('.myaccount a.dropdown-toggle').click();
}

const closeCartMenu = () => {
  window.$("#cart .dropdown-toggle").click();
}

// function onLogout() {
//   localStorage.removeItem("authUser");
// }

let cartList = [];
function loadCart(authUser, productOrder = []) {
  let arrayProductOrder = [];
  if(authUser.auth) {
    arrayProductOrder = productOrder.slice();
  } else {
    arrayProductOrder = cartService.getProductToCart();
  }
  
  tempTotalPrice = 0;
  cartList = (
    <>
      {arrayProductOrder.length ? (
        arrayProductOrder.map((order, index) => {
          tempTotalPrice +=
            (order.price - (order.price * order.discount) / 100) *
            order.quantity;
          return (
            <li key={index}>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="text-left">
                      <Link to={`/productDetail/${order._id}`}>
                        <img
                          src={order.images[0]}
                          alt={order.productName}
                          title={order.productName}
                          className="img-thumbnail imageSmall"
                        />
                      </Link>
                    </td>
                    <td className="text-left">
                      <Link to={`/productDetail/${order._id}`}>
                        {order.productName}
                      </Link>
                      <p>Số lượng: {order.quantity}</p>
                      <p>
                        Giá:{" "}
                        {formatCurrency(
                          (order.price - (order.price * order.discount) / 100) *
                          order.quantity
                        )}{" "}
                        VND{" "}
                      </p>
                    </td>

                    <td className="text-center">
                      <button
                        type="button"
                        title="Remove"
                        className="btn btn-danger btn-xs"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        })
      ) : (
          <p>Giỏ hàng của bạn rỗng</p>
        )}
    </>
  );
}
const topNavigation = props => {
  let zIndexStyle;
  zIndexStyle = {
    zIndex: "30000"
  };

  let styleInput;
  styleInput = {
    width: "60%",
    margin: "0 auto",
    fontFamily: "auto",
    zIndex: "20000"
  };

  let navList = [];

  navList = (
    <>
      {props.listCategoriesName.map((category, index) => {
        return (
          <NavigationItem
            key={index}
            type={category.type}
            subNavList={category.subCategories}
            parentNav={category.id}
          >
            {category.name}
          </NavigationItem>
        );
      })}
    </>
  );

  return (
    <header>
      <div className="header">
        <div className="header-middle">
          <div className="header-middle-wrapper">
            <div className="header-left">
              <div className="header-logo">
                <div id="logo">
                  <Link to="/home">
                    <img
                      src={Logo}
                      title="Style-Light"
                      alt="Style-Light"
                      className="img-responsive"
                    />
                  </Link>
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
                        <div className="expandable" />
                      </div>
                      <ul className="nav navbar-nav">{navList}</ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="header-cart-wrapper">
                <div className="header-cart" onLoad={loadCart(props.authUser, props.cart.productOrder)}>
                  <div id="cart" className="btn-group btn-block">
                    <button
                      type="button"
                      data-toggle="dropdown"
                      data-loading-text="Loading..."
                      className="btn btn-inverse btn-block btn-lg dropdown-toggle"
                    >
                      <span id="cart-title">Giỏ hàng</span>
                      <i className="fa fa-angle-down" />
                      <span id="cart-total">
                        <span className="single-item">0</span>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu pull-right cart-menu"
                      style={zIndexStyle} onClick={() => closeCartMenu()}
                    >
                      {cartList}
                      <li>
                        <div>
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="text-right">
                                  <strong>Tổng tiền</strong>
                                </td>
                                <td className="text-right">
                                  {formatCurrency(tempTotalPrice)} VND
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="text-right button-container">
                            <Link className="addtocart" to="/cart">
                              <strong>Giỏ hàng</strong>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/checkout" className="checkout">
                              <strong>Thanh toán</strong>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search">
                <div className="UnDark" />
              </div>
              <div className="myaccount-wrapper">
                <div className="dropdown myaccount">
                  <a
                    href="#"
                    title={
                      props.authUser.auth
                        ? isNotEmpty(props.user)
                          ? props.user.userInfo.name
                          : "My Account"
                        : "My Account"
                    }
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-angle-down" />
                  </a>
                  {!props.authUser.auth ? (
                    <ul
                      className="dropdown-menu dropdown-menu-right myaccount-menu"
                      style={zIndexStyle} onClick={() => closeMenu()}
                    >
                      <li>
                        <Link to="/register">Đăng ký</Link>
                      </li>
                      <li>
                        <Link to="/login">Đăng nhập</Link>
                      </li>
                      <nav id="top">
                        <div id="top-links" className="nav">
                          <ul className="list-inline">
                            <li>
                              <Link to="/checkout" title="Checkout">
                                <span className="checkout">Thanh Toán</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/logout" title="Logout">
                                <span className="logout">Thoát</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </ul>
                  ) : (
                      <ul
                        className="dropdown-menu dropdown-menu-right myaccount-menu"
                        style={zIndexStyle} onClick={() => closeMenu()}
                      >
                        <nav id="top">
                          <div id="top-links" className="nav">
                            <ul className="list-inline">
                              <li>
                                <Link to="/account" title="Checkout">
                                  <span className="checkout">Tài Khoản</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/checkout" title="Checkout">
                                  <span className="checkout">Thanh Toán</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/logout" title="Logout">
                                  <span className="logout">Thoát</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </ul>
                    )}
                </div>
              </div>
            </div>
            <div style={styleInput} id="flowerInput" className="input-group">
              <input
                id="searchInput"
                type="search"
                name="search"
                placeholder="Bạn muốn gửi gắm yêu thương vào hoa gì?"
                className="form-control input-lg inputField"
                onFocus={focusSelected}
                onBlur={blurSelected}
                onKeyUp={e => {
                  if (e.key === "Enter") {
                    props.history("/search");
                    document.getElementById("searchInput").blur();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.userList.user,
    cart: state.userList.cart
  };
};

export default connect(mapStateToProps)(topNavigation);
