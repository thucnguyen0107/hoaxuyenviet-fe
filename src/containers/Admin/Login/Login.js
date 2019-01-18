import React from "react";
import Form from "../../../components/UI/Form/Form";
import classes from "./Login.scss";
class Login extends React.Component {
  state = {
    loginForm: {
      telephone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Nhập Số Điện Thoại"
        },
        value: "",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: /^\+?[0-9]+$/,
          errorMessage: "Phone must be between 9 and 32 numbers!"
        },
        valid: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Nhập Mật Khẩu"
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
        console.log("Valid Form Successfully");
      }
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

export default Login;
