import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import checkoutService from '../../../services/checkoutService';
import loginService from '../../../services/loginService';
import axios from 'axios';
import { isNotEmpty, getCurrentDate } from '../../../utilities/fnUtil'

class Checkout extends React.Component {
  state = {
    checkoutForm: {
      fullName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Họ và Tên",
          name: "Họ và Tên"
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 32,
          errorMessage:
            "Họ và tên phải từ 10 đến 32 ký tự!"
        },
        valid: true
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-Mail",
          name: "E-Mail"
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 32,
          errorMessage: "Email chưa hợp lệ!"
        },
        valid: true
      },
      telephone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Số Điện Thoại",
          name: "Số Điện Thoại"
        },
        value: "",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: '^[0-9]+$',
          errorMessage: "Số điện thoại phải từ 9 đến 32 chữ số!"
        },
        valid: true
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Địa Chỉ",
          name: "Địa Chỉ"
        },
        value: "",
        validation: {
          required: true,
          minLength: 15,
          errorMessage: "Địa chỉ phải trên 15 ký tự!"
        },
        valid: true
      },
      fullNameReceivePerson: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Họ và Tên ",
          name: "Họ và Tên Người Nhận (nếu có)"
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true
      },
      telephoneReceivePerson: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Số Điện Thoại",
          name: "Số Điện Thoại Người Nhận (nếu có)"
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true
      },
      addressReivePerson: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Địa Chỉ",
          name: "Địa Chỉ Người Nhận (nếu không nhập thì địa chỉ cá nhân của bạn sẽ là địa chỉ nhận hàng)"
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true
      },
      orderDate: {
        elementType: "orderDate",
        elementConfig: {
          type: "text",
          name: "Ngày Đặt Hàng"
        },
        value: getCurrentDate(),
        validation: {

        },
        valid: true
      },
      paymentMethod: {
        elementType: "radioPayment",
        elementConfig: {
          type: "text",
          name: "Hình Thức Thanh Toán"
        },
        value: "",
        validation: {
          required: true,
          errorMessage: "Vui Lòng Chọn Hình Thức Thanh Toán!"
        },
        valid: true
      },
      note: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Ghi Chú",
          name: "Ghi Chú"
        },
        value: "",
        validation: {
        },
        valid: true
      }
    },
    order: {}
  };

  init() {

    if (loginService.isAuthenticated()) {

      const userInfo = checkoutService.getInfoIfUserLogin();
      const authUser = JSON.parse(localStorage.getItem("authUser")) || {}
      const userPhone = authUser.userPhone

      let checkoutForm = { ...this.state.checkoutForm };    //creating copy of object
      checkoutForm.fullName.value = userInfo.name;                        //updating value
      checkoutForm.email.value = userInfo.email;                        //updating value
      checkoutForm.telephone.value = userPhone;                        //updating value
      checkoutForm.address.value = userInfo.address;                        //updating value
      this.setState({ checkoutForm });



    }
  }

  componentDidMount() {
    loadingScreen.hideLoading();

    this.init();
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
