import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
class Account extends React.Component {
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
                <h2 className="page-title" style={{ fontFamily: 'Times New Roman' }}>Tài khoản</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Tài khoản</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="account" className="container">
          <div className="row">
            <aside id="column-left" className="col-sm-3 hidden-xs">
              <div class="box bestseller">
                <div class="category-tab-container">
                  <div class="box-heading">
                    <h2 class="products-section-title">Sửa thông tin cá nhân</h2>
                  </div>

                </div>
              </div>
              <div class="box bestseller">
                <div class="category-tab-container">
                  <div class="box-heading">
                    <h2 class="products-section-title">Giỏ hàng</h2>
                  </div>

                </div>
              </div>
              <div class="box bestseller">
                <div class="category-tab-container">
                  <div class="box-heading">
                    <h2 class="products-section-title">Điểm tích lũy</h2>
                  </div>

                </div>
              </div>
              <div class="box bestseller">
                <div class="category-tab-container">
                  <div class="box-heading">
                    <h2 class="products-section-title">Lịch sử giao dịch</h2>
                  </div>

                </div>
              </div>
            </aside>
            <div id="content" class="col-sm-9">
              <div class="row">
                <div class="col-sm-6">
                  <div class="well">
                    <h2>New Customer</h2>
                    <p><strong>Register</strong></p>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/register" class="btn btn-primary">Continue</a></div>
                </div>
                <div class="col-sm-6">
                  <div class="well">
                    <h2>Returning Customer</h2>
                    <p><strong>I am a returning customer</strong></p>
                    <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/login" method="post" enctype="multipart/form-data">
                      <div class="form-group">
                        <label class="control-label" for="input-email">E-Mail Address</label>
                        <input type="text" name="email" value="" placeholder="E-Mail Address" id="input-email" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label class="control-label" for="input-password">Password</label>
                        <input type="password" name="password" value="" placeholder="Password" id="input-password" class="form-control" />
                        <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/forgotten">Forgotten Password</a></div>
                      <input type="submit" value="Login" class="btn btn-primary" />
                      <input type="hidden" name="redirect" value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/edit" />
                    </form>
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

export default Account;