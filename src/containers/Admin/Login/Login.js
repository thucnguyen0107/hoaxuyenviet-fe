import React from "react";
import Form from "../../../components/UI/Form/Form";
import classes from "./Login.scss";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
import { showNotification } from "../../../utilities/fnUtil";
class Login extends React.Component {
  state = {
    loginForm: {
      telephone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Nhập Số Điện Thoại",
          name: "Số Điện Thoại"
        },
        value: "",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: "^\\+?[0-9]+$",
          errorMessage: "Phone must be between 9 and 32 numbers!"
        },
        valid: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Nhập Mật Khẩu",
          name: "Mật Khẩu"
        },
        value: "",
        validation: {
          required: true,
          errorMessage: "Password Empty"
        },
        valid: true
      }
    }
  };

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        this.onLogin();
      }
    });
  };

  onLogin = () => {
    loadingScreen.showLoading();
    const user = {
      userphone: this.state.loginForm.telephone.value,
      password: this.state.loginForm.password.value
    };
    axios
      .post(endPoints.HOAXUYENVIET_LOGIN, user)
      .then(res => {
        localStorage.setItem("authUser", JSON.stringify(res));
        this.props.updateAuthUser(res);
        this.props.history.push("/admin");
        loadingScreen.hideLoading();
      })
      .catch(err => {
        loadingScreen.hideLoading();
        showNotification({
          type: "error",
          message:
            "Không thể đăng nhập! Vui lòng kiểm tra lại tài khoản hoặc mật khẩu!"
        });
      });
  };

  render() {
    return (
      <div className={classes.Login}>
        <h2 className="text-center">Đăng Nhập Quản Trị</h2>
        <Form
          idForm="loginForm"
          nameForm="loginForm"
          originalForm={this.state.loginForm}
          setState={this.setStateForm}
          btnName="Đăng Nhập"
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAuthUser: authUser =>
      dispatch(Actions.authActions.getAuthUser(authUser))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
