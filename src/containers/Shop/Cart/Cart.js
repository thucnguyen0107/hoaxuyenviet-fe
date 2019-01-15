import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/Shop/UI/LoadingImage/Limg';
class Cart extends React.Component {

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
                <h2 className="page-title">Giỏ hàng</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Giỏ hàng</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <h2 className="page-title">Specials
                      &nbsp;(1.00kg)
              </h2>
              <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=checkout/cart/edit" method="post" encType="multipart/form-data">
                <div className="table-responsive">
                  <table className="table table-bordered shopping-cart">
                    <thead>
                      <tr>
                        <td className="text-center">Image</td>
                        <td className="text-left">Product Name</td>
                        <td className="text-left">Model</td>
                        <td className="text-left">Quantity</td>
                        <td className="text-right">Unit Price</td>
                        <td className="text-right">Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <a href="/"><img src={'../../../assets/images/catalog/product/11-70x86.jpg'} alt="HP LP3065" title="HP LP3065" className="img-thumbnail" />
                          </a>
                        </td>
                        <td className="text-left"><a href="/">HP LP3065</a><br />
                          <small>Delivery Date: 2011-04-22</small><br />
                          <small>Reward Points: 300</small>
                        </td>
                        <td className="text-left">Product 3</td>
                        <td className="text-left"><div className="input-group btn-block" style={{ maxWidth: "200px" }}>
                          <input type="text" name="quantity[5]" defaultValue="1" size="1" className="form-control"></input>
                          <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-refresh"></i></button>
                            <button type="button" className="btn btn-danger"><i className="fa fa-times-circle"></i></button>
                          </span></div></td>
                        <td className="text-right">$122.00</td>
                        <td className="text-right">$122.00</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </form>
              <h2>What would you like to do next?</h2>
              <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-coupon" className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">Use Coupon Code <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div id="collapse-coupon" className="panel-collapse collapse" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body">
                      <label className="col-sm-2 control-label" htmlFor="input-coupon">Enter your coupon here</label>
                      <div className="input-group">
                        <input type="text" name="coupon" defaultValue="" placeholder="Enter your coupon here" id="input-coupon" className="form-control" />
                        <span className="input-group-btn">
                          <input type="button" defaultValue="Apply Coupon" id="button-coupon" data-loading-text="Loading..." className="btn btn-primary" /></span></div>

                    </div>
                  </div>
                </div>

                {/* <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-shipping" className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">Estimate Shipping &amp; Taxes <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div id="collapse-shipping" className="panel-collapse collapse" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body">
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className="form-horizontal">
                        <div className="form-group required">
                          <label className="col-sm-2 control-label" htmlFor="input-country">Country</label>
                          <div className="col-sm-10">
                            <select name="country_id" id="input-country" className="form-control hasCustomSelect" style={{ WebkitAppearance: 'menulist-button', width: '100px', position: 'absolute', opacity: '0', height: '40px', fontSize: '14px' }}>
                              <option defaultValue=""> --- Please Select --- </option>

                            </select><span className="customSelect form-control customSelectDisabled" style={{ display: 'inline-block' }}><span className="customSelectInner" style={{ width: '95px', display: 'inline-block' }}>United Kingdom</span></span>
                          </div>
                        </div>
                        <div className="form-group required">
                          <label className="col-sm-2 control-label" htmlFor="input-zone">Region / State</label>
                          <div className="col-sm-10">
                            <select name="zone_id" id="input-zone" className="form-control hasCustomSelect" style={{ WebkitAppearance: 'menulist-button', width: '100px', position: 'absolute', opacity: '0', height: '40px', fontSize: '14px' }}><option defaultValue=""> --- Please Select --- </option><option defaultValue="3612">Wrexham</option></select><span className="customSelect form-control" style={{ display: 'inline-block' }}><span className="customSelectInner" style={{ width: '95px', display: 'inline-block' }}>&nbsp;</span></span>
                          </div>
                        </div>
                        <div className="form-group required">
                          <label className="col-sm-2 control-label" htmlFor="input-postcode">Post Code</label>
                          <div className="col-sm-10">
                            <input type="text" name="postcode" defaultValue="" placeholder="Post Code" id="input-postcode" className="form-control" />
                          </div>
                        </div>
                        <button type="button" id="button-quote" data-loading-text="Loading..." className="btn btn-primary">Get Quotes</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#collapse-voucher" data-toggle="collapse" data-parent="#accordion" className="accordion-toggle collapsed" aria-expanded="false">Use Gift Certificate <i className="fa fa-caret-down"></i></a></h4>
                  </div>
                  <div id="collapse-voucher" className="panel-collapse collapse" aria-expanded="false" style={{ height: '0px' }}>
                    <div className="panel-body">
                      <label className="col-sm-2 control-label" htmlFor="input-voucher">Enter your gift certificate code here</label>
                      <div className="input-group">
                        <input type="text" name="voucher" defaultValue="" placeholder="Enter your gift certificate code here" id="input-voucher" className="form-control" />
                        <span className="input-group-btn">
                          <input type="submit" defaultValue="Apply Gift Certificate" id="button-voucher" data-loading-text="Loading..." className="btn btn-primary" />
                        </span> </div>

                    </div>
                  </div>
                </div> */}

              </div>
              <br />
              <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                  <table className="table table-bordered">
                    <tbody><tr>
                      <td className="text-right"><strong>Sub-Total:</strong></td>
                      <td className="text-right">$100.00</td>
                    </tr>
                      <tr>
                        <td className="text-right"><strong>Eco Tax (-2.00):</strong></td>
                        <td className="text-right">$2.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>VAT (20%):</strong></td>
                        <td className="text-right">$20.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Total:</strong></td>
                        <td className="text-right">$122.00</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="buttons clearfix">
                <div className="pull-left"><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=common/home" className="btn btn-default">Continue Shopping</a></div>
                <div className="pull-right"><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=checkout/checkout" className="btn btn-primary">Checkout</a></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;