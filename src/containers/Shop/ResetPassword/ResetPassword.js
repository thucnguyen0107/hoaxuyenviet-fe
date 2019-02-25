import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import { endPoints } from "../../../services/config";
import axios from "axios";
import { showNotification } from "../../../utilities/fnUtil";
class ResetPassword extends React.Component {
  state = {
    resetPasswordForm: {
        password: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "Nhập Mật Khẩu Mới",
              name: "Mật Khẩu Mới"
            },
            value: "",
            validation: {
              required: true,
              minLength: 1,
              maxLength: 32,
              errorMessage: "Mật Khẩu Phải Trên 1 Ký Tự!"
            },
            valid: true
          },
          confirmPassword: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "Nhập Lại Mật Khẩu Mới",
              name: "Nhập Lại Mật Khẩu Mới"
            },
            value: "",
            validation: {
              required: true,
              minLength: 1,
              maxLength: 32,
              errorMessage: "Mật Khẩu Phải Trên 1 Ký Tự!"
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
        this.onResetPWD();
      }
    });
  };

  onResetPWD = () => {
    if(this.state.resetPasswordForm.password.value !== this.state.resetPasswordForm.confirmPassword.value){
        showNotification({
            type: "error",
            message: "Mật Khẩu Không Khớp, Vui Lòng Nhập Lại"
        })
    }else{
        const user = {
            userPhone : this.props.match.params.userPhone, 
            password: this.state.resetPasswordForm.password.value,
            resetLink: window.location.href
          }
      
          axios
            .post(endPoints.RESET_PASSWORD_API, user)
            .then(res => {
            }).catch(err => {
            })
    }
    
  };
  render() {
    return (
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">TẠO MẬT KHẨU MỚI</h2>
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
                   TẠO MẬT KHẨU MỚI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="content" style={{ margin: "auto", width: "60%" }}>
          <p>
            Vui Lòng Nhập Mật Khẩu Mới
          </p>

          <Form
            idForm="resetPasswordForm"
            nameForm="resetPasswordForm"
            originalForm={this.state.resetPasswordForm}
            setState={this.setStateForm}
            btnName="Xác Nhận"
          />

        </div>
      </div>
    );
  }
}

export default ResetPassword;

