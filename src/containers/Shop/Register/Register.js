import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { Link } from 'react-router-dom';
import { isNotEmpty, cloneData } from '../../../utilities/fnUtil'
import { registerFormModel } from '../../../models/formModel';
import axios from 'axios';
 import { endPoints } from "../../../services/config";
 import { showNotification } from '../../../utilities/fnUtil';
class Register extends React.Component {
  state = {
    registerForm1: 
      cloneData(registerFormModel)
  }
  componentDidMount() {
    loadingScreen.hideLoading();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        console.log("Valid Form Successfully");

        this.onRegister();
      }
    });
  };

  onRegister = () => {
    loadingScreen.showLoading();

    const userInfo = {
      name: this.state.registerForm1.name.value,
      email: this.state.registerForm1.email.value,
      address: this.state.registerForm1.address.value,
      birth: this.state.registerForm1.birth.value,
      gender: this.state.registerForm1.gender.value,
      rewardPoints: 0,
    }


    const user = {
      userPermission: {password: this.state.registerForm1.password.value},
      userInfo: userInfo,
      _id: this.state.registerForm1.telephone.value,
    }

    axios
    .post(endPoints.CREATE_USER_API, user)
    .then(res => {
        console.log(res);
        loadingScreen.hideLoading();
    })
    .catch(err => {
        loadingScreen.hideLoading();
        showNotification({type: 'error', message: err});
    });
  }
  
  render() {
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
        <div id="content" style={{ margin: 'auto', width: '50%' }}>
          <p>Nếu bạn đã có tài khoản. Vui lòng đăng nhập <Link to="/login" >tại đây</Link>.</p>
          <form className="form-horizontal">
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
            { this.state.noEdit ? 
          <div className="text-center">
            <button className="btn" style={{ marginBottom: "20px" }} onClick={() => this.setState({noEdit: false})}> Đăng ký</button>
          </div> : null}
            {/* {form} */}
            </fieldset> 
          </form>
        </div>
      </>
    );
  }
}
export default Register;