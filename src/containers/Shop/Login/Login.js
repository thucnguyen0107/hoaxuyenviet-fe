import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { endPoints } from "../../../services/config";
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
          placeholder: "Số điện thoại",
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
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Mật khẩu",
          name: "Mật Khẩu"
        },
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Mật khẩu không đúng. Vui lòng nhập lại!"
        },
        valid: true
      }
    },
    formIsValid: false
  };

  componentDidMount() {
    loadingScreen.hideLoading();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        // loginService.loginLS();
        // this.props.history.push({pathname:'/home'})

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
        this.props.getUserById(res.userPhone);
        this.props.getCartFromSV(res.userPhone);
        this.props.history.push("/account");
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
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">ĐĂNG NHẬP</h2>
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
                    Đăng Nhập
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="content" className="col-sm-9" style={{ height: "430px" }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="well">
                <h2>Khách Hàng Mới</h2>
                <p>
                  <strong>Đăng Ký</strong>
                </p>
                <p>
                  Bằng cách tạo tài khoản, bạn sẽ có thể mua sắm nhanh hơn, cập
                  nhật trạng thái của đơn hàng và theo dõi các đơn hàng bạn đã
                  thực hiện trước đó.
                </p>
                <Link to="/register" className="btn btn-default">
                  Tiếp tục
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="well">
                <h2>Đăng Nhập</h2>
                <p>
                  <strong>Chào mừng bạn quay trở lại!</strong>
                </p>
                <Form
                  idForm="loginForm"
                  nameForm="loginForm"
                  originalForm={this.state.loginForm}
                  setState={this.setStateForm}
                  btnName="Đăng nhập"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateAuthUser: authUser =>
      dispatch(Actions.authActions.getAuthUser(authUser)),
    getUserById: id => dispatch(Actions.userActions.getUserFromSV(id)),
    getCartFromSV: id => dispatch(Actions.userActions.getCartFromSV(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
