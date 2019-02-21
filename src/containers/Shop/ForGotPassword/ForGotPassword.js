import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import { endPoints } from "../../../services/config";
import axios from "axios";
import { showNotification } from "../../../utilities/fnUtil";
class ForgotPassword extends React.Component {
  state = {
    forgotPasswordForm: {
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
          numberValid: "^[0-9]+$",
          errorMessage: "Số điện thoại không đúng hoặc chưa được đăng ký!"
        },
        valid: true
      },
    },
    formIsValid: false
  };


  componentDidMount() {
    loadingScreen.hideLoading();
  }

  componentWillMount() {
    loadingScreen.showLoading();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        this.onForgotPWD();
      }
    });
  };

  onForgotPWD = () => {
    loadingScreen.showLoading();
    const user = {
      userPhone : this.state.forgotPasswordForm.telephone.value,
      origin: window.location.origin
    }

    axios
      .post(endPoints.FORGOT_PASSWORD_API, user)
      .then(res => {
        loadingScreen.hideLoading();
        if(!res) {
          showNotification({
            type: 'error',
            message: 'Số Điện Thoại Không Đúng Hoặc Chưa Đăng Ký! Vui Lòng Thao Tác Lại!'
          })
        } else {
          showNotification({
            message: 'Vui Lòng Kiểm Tra Email Để Thay Đổi Mật Khẩu Theo Đường Dẫn Web!'
          })
          
        }
      }).catch(err => {
        loadingScreen.hideLoading();
        showNotification({
          type: 'error',
          message: 'Số Điện Thoại Không Đúng Hoặc Chưa Đăng Ký! Vui Lòng Thao Tác Lại!'
        })
      })
  };
  render() {
    return (
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">QUÊN MẬT KHẨU</h2>
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
                    Quên Mật Khẩu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="content" style={{ margin: "auto", width: "60%" }}>
          <p>
            Vui Lòng Nhập Số Điện Thoại của bạn. Sau
            Đó Bấm Nút Xác Nhận Để Nhận Mật Khẩu Mới Qua E-mail.
          </p>

          <Form
            idForm="forgotPasswordForm"
            nameForm="forgotPasswordForm"
            originalForm={this.state.forgotPasswordForm}
            setState={this.setStateForm}
            btnName="Xác Nhận"
          />

        </div>
      </div>
    );
  }
}

export default ForgotPassword;

