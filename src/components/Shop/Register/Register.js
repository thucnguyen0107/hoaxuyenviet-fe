import React from 'react';

const Register = () => {
  return (
    <>
      <div id="breadcrumb">
        <div className="container">
          <div className="row">
            <ul className="breadcrumb">
              <h2 className="page-title">ĐĂNG KÝ</h2>
              <li><a href="/"><i className="fa fa-home"></i></a></li>
              <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Đăng Ký</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="content" style={{ margin: 'auto', width: '60%' }}>
        <p>If you already have an account with us, please login at the <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/login">login page</a>.</p>
        <form className="form-horizontal">
          <fieldset id="account">
            <legend>Your Personal Details</legend>
            <div className="form-group required" style={{ display: 'none' }}>
              <label className="col-sm-2 control-label">Customer Group</label>
              <div className="col-sm-10">                            <div className="radio">
                <label>
                  <input type="radio" name="customer_group_id" defaultValue="1" defaultChecked="checked"></input>
                  Default</label>
              </div>
              </div>
            </div>
            <div className="form-group required has-error">
              <label className="col-sm-2 control-label" htmlFor="input-firstname">First Name</label>
              <div className="col-sm-10">
                <input type="text" name="firstname" defaultValue="" placeholder="First Name" id="input-firstname" className="form-control"></input>
                <div className="text-danger">First Name must be between 1 and 32 characters!</div>
              </div>
            </div>
            <div className="form-group required has-error">
              <label className="col-sm-2 control-label" htmlFor="input-lastname">Last Name</label>
              <div className="col-sm-10">
                <input type="text" name="lastname" defaultValue="" placeholder="Last Name" id="input-lastname" className="form-control"></input>
                <div className="text-danger">Last Name must be between 1 and 32 characters!</div>
              </div>
            </div>
            <div className="form-group required has-error">
              <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail</label>
              <div className="col-sm-10">
                <input type="email" name="email" defaultValue="" placeholder="E-Mail" id="input-email" className="form-control"></input>
                <div className="text-danger">E-Mail Address does not appear to be valid!</div>
              </div>
            </div>
            <div className="form-group required has-error">
              <label className="col-sm-2 control-label" htmlFor="input-telephone">Telephone</label>
              <div className="col-sm-10">
                <input type="tel" name="telephone" defaultValue="" placeholder="Telephone" id="input-telephone" className="form-control"></input>
                <div className="text-danger">Telephone must be between 3 and 32 characters!</div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Your Password</legend>
            <div className="form-group required has-error">
              <label className="col-sm-2 control-label" htmlFor="input-password">Password</label>
              <div className="col-sm-10">
                <input type="password" name="password" defaultValue="" placeholder="Password" id="input-password" className="form-control"></input>
                <div className="text-danger">Password must be between 4 and 20 characters!</div>
              </div>
            </div>
            <div className="form-group required">
              <label className="col-sm-2 control-label" htmlFor="input-confirm">Password Confirm</label>
              <div className="col-sm-10">
                <input type="password" name="confirm" defaultValue="" placeholder="Password Confirm" id="input-confirm" className="form-control"></input>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Newsletter</legend>
            <div className="form-group">
              <label className="col-sm-2 control-label">Subscribe</label>
              <div className="col-sm-10">               <label className="radio-inline">
                <input type="radio" name="newsletter" defaultValue="1"></input>
                Yes</label>
                <label className="radio-inline">
                  <input type="radio" name="newsletter" defaultValue="0" defaultChecked="checked"></input>
                  No</label>
              </div>
            </div>
          </fieldset>
          <div className="buttons">
            <div className="pull-right">I have read and agree to the <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=information/information/agree&amp;information_id=3" className="agree"><b>Privacy Policy</b></a>
              <input type="checkbox" name="agree" defaultValue="1"></input>
              &nbsp;
            <input type="submit" value="Continue" className="btn btn-primary"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;