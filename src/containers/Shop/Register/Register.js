import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import { Link } from "react-router-dom";
import {cloneData } from "../../../utilities/fnUtil";
import { registerFormModel } from "../../../models/formModel";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
class Register extends React.Component {
  state = {
    registerForm1: cloneData(registerFormModel)
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
        this.onRegister();
      }
    });
  };

  onRegister = () => {
    const userInfo = {
      name: this.state.registerForm1.name.value,
      email: this.state.registerForm1.email.value,
      address: this.state.registerForm1.address.value,
      birth: this.state.registerForm1.birth.value,
      gender: this.state.registerForm1.gender.value,
      rewardPoints: 0
    };

    const user = {
      userPermission: { password: this.state.registerForm1.password.value },
      userInfo: userInfo,
      _id: this.state.registerForm1.telephone.value
    };

    this.props.createNewUser(user);
  };

  render() {
    return (
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">ĐĂNG KÝ</h2>
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
                    Đăng Ký
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="content" style={{ margin: "auto", width: "50%" }}>
          <p>
            Nếu bạn đã có tài khoản. Vui lòng đăng nhập{" "}
            <Link to="/login">tại đây</Link>.
          </p>
          <div className="form-horizontal">
            <fieldset id="account">
              <h2>THÔNG TIN CÁ NHÂN</h2>
              <Form
                idForm="registerForm1"
                nameForm="registerForm1"
                originalForm={this.state.registerForm1}
                setState={this.setStateForm}
                noEdit={this.state.noEdit}
                btnName="Đăng ký"
              />
              {this.state.noEdit ? (
                <div className="text-center">
                  <button
                    className="btn"
                    style={{ marginBottom: "20px" }}
                    onClick={() => this.setState({ noEdit: false })}
                  >
                    {" "}
                    Đăng ký
                  </button>
                </div>
              ) : null}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: data =>
      dispatch(Actions.userActions.createNewUserFromSV(data))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Register);
