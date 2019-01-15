import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/Shop/UI/LoadingImage/Limg';

class Checkout extends React.Component {
  componentDidMount() {
    loadingScreen.hideLoading();
  }
  render() {
    return (
      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">Thanh toán</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Thanh toán</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-checkout-option" data-toggle="collapse" data-parent="#accordion" className="accordion-toggle collapsed" aria-expanded="false">Step 1: Checkout Options <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div className="panel-collapse collapse" id="collapse-checkout-option" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body"><div className="row">
                      <div className="col-sm-6">
                        <h2>New Customer</h2>
                        <p>Checkout Options:</p>
                        <div className="radio">
                          <label>         <input type="radio" name="account" defaultValue="register" defaultChecked="defaultChecked" />
                            Register Account</label>
                        </div>
                        <div className="radio">
                          <label>         <input type="radio" name="account" defaultValue="guest" />
                            Guest Checkout</label>
                        </div>
                        <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <input type="button" defaultValue="Continue" id="button-account" data-loading-text="Loading..." className="btn btn-primary" />
                      </div>
                      <div className="col-sm-6">
                        <h2>Returning Customer</h2>
                        <p>I am a returning customer</p>
                        <div className="form-group">
                          <label className="control-label" htmlFor="input-email">E-Mail</label>
                          <input type="text" name="email" defaultValue="" placeholder="E-Mail" id="input-email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="control-label" htmlFor="input-password">Password</label>
                          <input type="password" name="password" defaultValue="" placeholder="Password" id="input-password" className="form-control" />
                          <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/forgotten">Forgotten Password</a></div>
                        <input type="button" defaultValue="Login" id="button-login" data-loading-text="Loading..." className="btn btn-primary" />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-payment-address" data-toggle="collapse" data-parent="#accordion" className="accordion-toggle collapsed" aria-expanded="false">Step 2: Account &amp; Billing Details <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div className="panel-collapse collapse" id="collapse-payment-address" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body"><div className="row">
                      <div className="col-sm-6">
                        <fieldset id="account">
                          <legend>Your Personal Details</legend>
                          <div className="form-group" style={{ display: "none" }}>
                            <label className="control-label">Customer Group</label>
                            <div className="radio">
                              <label>
                                <input type="radio" name="customer_group_id" defaultValue="1" defaultChecked="defaultChecked" />
                                Default</label>
                            </div>
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-firstname">First Name</label>
                            <input type="text" name="firstname" defaultValue="" placeholder="First Name" id="input-payment-firstname" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-lastname">Last Name</label>
                            <input type="text" name="lastname" defaultValue="" placeholder="Last Name" id="input-payment-lastname" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-email">E-Mail</label>
                            <input type="text" name="email" defaultValue="" placeholder="E-Mail" id="input-payment-email" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-telephone">Telephone</label>
                            <input type="text" name="telephone" defaultValue="" placeholder="Telephone" id="input-payment-telephone" className="form-control" />
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>Your Password</legend>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-password">Password</label>
                            <input type="password" name="password" defaultValue="" placeholder="Password" id="input-payment-password" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-confirm">Password Confirm</label>
                            <input type="password" name="confirm" defaultValue="" placeholder="Password Confirm" id="input-payment-confirm" className="form-control" />
                          </div>
                        </fieldset>
                      </div>
                      <div className="col-sm-6">
                        <fieldset id="address">
                          <legend>Your Address</legend>
                          <div className="form-group">
                            <label className="control-label" htmlFor="input-payment-company">Company</label>
                            <input type="text" name="company" defaultValue="" placeholder="Company" id="input-payment-company" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-address-1">Address 1</label>
                            <input type="text" name="address_1" defaultValue="" placeholder="Address 1" id="input-payment-address-1" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label className="control-label" htmlFor="input-payment-address-2">Address 2</label>
                            <input type="text" name="address_2" defaultValue="" placeholder="Address 2" id="input-payment-address-2" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-city">City</label>
                            <input type="text" name="city" defaultValue="" placeholder="City" id="input-payment-city" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-postcode">Post Code</label>
                            <input type="text" name="postcode" defaultValue="" placeholder="Post Code" id="input-payment-postcode" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-country">Country</label>
                            <select name="country_id" id="input-payment-country" className="form-control">
                              <option defaultValue=""> --- Please Select --- </option>

                            </select>
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-zone">Region / State</label>
                            <select name="zone_id" id="input-payment-zone" className="form-control"><option defaultValue=""> --- Please Select --- </option><option defaultValue="3513">Aberdeen</option></select>
                          </div>
                        </fieldset>

                      </div>
                    </div>
                      <div className="checkbox">
                        <label htmlFor="newsletter">
                          <input type="checkbox" name="newsletter" defaultValue="1" id="newsletter" />
                          I wish to subscribe to the Style-Light newsletter.</label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="shipping_address" defaultValue="1" defaultChecked="defaultChecked" />
                          My delivery and billing addresses are the same.</label>
                      </div>
                      <div className="buttons clearfix">
                        <div className="pull-right">I have read and agree to the <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=information/information/agree&amp;information_id=3" className="agree"><b>Privacy Policy</b></a>
                          &nbsp;
                        <input type="checkbox" name="agree" defaultValue="1" />
                          <input type="button" defaultValue="Continue" id="button-register" data-loading-text="Loading..." className="btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">Step 5: Payment Method</h4>
                  </div>
                  <div class="panel-collapse collapse" id="collapse-payment-method">
                    <div class="panel-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;