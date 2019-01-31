import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import checkoutService from '../../../services/checkoutService';
import loginService from '../../../services/loginService';
import axios from 'axios';
import { isNotEmpty, getCurrentDate, cloneData } from '../../../utilities/fnUtil'
import { checkoutFormModel } from '../../../models/formModel';
import { endPoints } from "../../../services/config";
class Checkout extends React.Component {
  state = {
    checkoutForm: cloneData(checkoutFormModel),
    order: {},
    user: null
  };

  // init() {

  //   if (loginService.isAuthenticated()) {

  //     const userInfo = checkoutService.getInfoIfUserLogin();
  //     const authUser = JSON.parse(localStorage.getItem("authUser")) || {}
  //     const userPhone = authUser.userPhone

  //     let checkoutForm = { ...this.state.checkoutForm };    
  //     checkoutForm.fullName.value = userInfo.name;                        
  //     checkoutForm.email.value = userInfo.email;                        
  //     checkoutForm.telephone.value = userPhone;                        
  //     checkoutForm.address.value = userInfo.address;                       
  //     this.setState({ checkoutForm });



  //   }
  // }

  init() {
    const authUser = JSON.parse(localStorage.getItem('authUser')) || {};
    const userPhone = authUser.userPhone;
    axios.get(endPoints.GET_USER_BY_ID + userPhone)
      .then(res => {
        console.log(res);
        let checkoutForm = cloneData(this.state.checkoutForm);
        checkoutForm.fullName.value = res.userInfo.name;
        checkoutForm.email.value = res.userInfo.email;
        checkoutForm.address.value = res.userInfo.address;
        checkoutForm.telephone.value = userPhone;
        checkoutForm.orderDate.value = getCurrentDate();

        this.setState({ checkoutForm, user: res });
      })

  }







  componentWillMount() {
    this.init();
  }

  componentDidMount() {
    loadingScreen.hideLoading();
  }



  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        console.log("Valid Form Successfully");
        checkoutService.addUserInfoLS();
      }
    });
  };

  render() {
    return (
      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">Thanh toán</h2>
                <li>
                  <a href="/">
                    <i className="fa fa-home" />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    style={{ pointerEvents: "none", cursor: "default" }}
                  >
                    Thanh toán
                  </a>
                </li>
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
                    <h4 className="panel-title">
                      <a
                        href="collapse-payment-address"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        className="accordion-toggle collapsed"
                        aria-expanded="false"
                      >
                        Tài khoản  &amp; Chi tiết hóa đơn{" "}
                        <i className="fa fa-caret-down" />
                      </a>
                    </h4>
                  </div>
                  <div
                    className="panel-collapse collapse in"
                    id="collapse-payment-address"
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <fieldset id="account">
                            <legend>Thông tin cá nhân</legend>
                            <Form
                              idForm="checkoutForm"
                              nameForm="checkoutForm"
                              originalForm={this.state.checkoutForm}
                              setState={this.setStateForm}
                              btnName="Xác nhận"
                            />
                            {/* {form} */}
                          </fieldset>
                        </div>
                      </div>
                    </div>
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
