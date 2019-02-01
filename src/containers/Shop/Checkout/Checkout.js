import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import checkoutService from '../../../services/checkoutService';
import loginService from '../../../services/loginService';
import axios from 'axios';
import { isNotEmpty, cloneData } from '../../../utilities/fnUtil'
import { checkoutFormModel } from '../../../models/formModel';
import { endPoints } from "../../../services/config";
import { connect } from "react-redux";
class Checkout extends React.Component {
  state = {
    checkoutForm: cloneData(checkoutFormModel),

  };


  initForm = (user) => {
    let checkoutForm = cloneData(this.state.checkoutForm);
    checkoutForm.fullName.value = user.userInfo.name;
    checkoutForm.email.value = user.userInfo.email;
    checkoutForm.address.value = user.userInfo.address;
    checkoutForm.telephone.value = user._id;

    this.setState({ checkoutForm });
  }

  componentWillReceiveProps(nextProps) {
    if (isNotEmpty(nextProps.user))
      this.initForm(nextProps.user);
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

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    user: state.userList.user
  };
};

export default connect(mapStateToProps)(Checkout);

