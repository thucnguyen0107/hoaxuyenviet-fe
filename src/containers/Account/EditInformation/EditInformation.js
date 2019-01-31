
import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { connect } from "react-redux";
import loginService from '../../../services/loginService';
import checkoutService from '../../../services/checkoutService';
import axios from 'axios';
import { endPoints } from "../../../services/config";
import { getDate, getCurrentDate, cloneData } from '../../../utilities/fnUtil';
import { userProfileFormModel } from '../../../models/formModel';
class EditInformation extends React.Component {
  state = {
    noEdit: true,
    infoForm: cloneData(userProfileFormModel),
    user: null
  };

  init() {
    const authUser = JSON.parse(localStorage.getItem('authUser')) || {};
    const userPhone = authUser.userPhone;
    axios.get(endPoints.GET_USER_BY_ID + userPhone)
      .then(res => {
        console.log(res);
        let infoForm = cloneData(this.state.infoForm);    //creating copy of object
        infoForm.fullName.value = res.userInfo.name;                        //updating value
        infoForm.email.value = res.userInfo.email;                        //updating value
        infoForm.address.value = res.userInfo.address;                    //updating value
        infoForm.telephone.value = userPhone;
        infoForm.birthDate.value = getDate(res.userInfo.birth)
        if (res.userInfo.gender === 'male') {
          infoForm.gender.value = "male"
        } else {
          infoForm.gender.value = "female"
        }
        this.setState({ infoForm, user: res });
      })

  }

  onUpdateUser = () => {
    loadingScreen.showLoading();
    const updatedUser = cloneData(this.state.user);
    updatedUser.userInfo.name = this.state.infoForm.fullName.value;
    updatedUser.userInfo.email = this.state.infoForm.email.value;
    updatedUser.userInfo.address = this.state.infoForm.address.value;
    updatedUser.userInfo.gender = this.state.infoForm.gender.value;
    updatedUser.userInfo.birth = this.state.infoForm.birthDate.value;

    axios
      .patch(endPoints.EDIT_USER + this.state.infoForm.telephone.value, updatedUser)
      .then(res => {
        console.log(res);
        this.setState({ user: updatedUser });
        loadingScreen.hideLoading();
      })
      .catch(err => {
        loadingScreen.hideLoading();
        alert(err);
      });
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
        this.onUpdateUser();
      }
    });
  };
  render() {
    return (
      <>

        <div className="col-sm-12">
          <fieldset id="account">
            <legend>Thông Tin Tài Khoản</legend>
            <Form
              idForm="infoForm"
              nameForm="infoForm"
              originalForm={this.state.infoForm}
              setState={this.setStateForm}
              noEdit={this.state.noEdit}
              clearForm={false}
              notUpdate={true}
              btnName="Lưu Lại"
            />
            {this.state.noEdit ?
              <div className="text-center">
                <button className="btn" style={{ marginBottom: "20px" }} onClick={() => this.setState({ noEdit: false })}>  Chỉnh Sửa Tài Khoản</button>
              </div> : null}
            {/* {form} */}
          </fieldset>
        </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(
  mapStateToProps
)(EditInformation);
