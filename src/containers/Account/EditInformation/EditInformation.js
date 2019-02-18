import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";
import Form from "../../../components/UI/Form/Form";
import { connect } from "react-redux";
import { getDate, cloneData, isNotEmpty } from "../../../utilities/fnUtil";
import { userProfileFormModel } from "../../../models/formModel";
import Actions from '../../../redux/rootActions';
class EditInformation extends React.Component {
  state = {
    noEdit: true,
    infoForm: cloneData(userProfileFormModel)
  };

  initForm = (user) => {
    let infoForm = cloneData(this.state.infoForm); //creating copy of object
    infoForm.fullName.value = user.userInfo.name; //updating value
    infoForm.email.value = user.userInfo.email; //updating value
    infoForm.address.value = user.userInfo.address; //updating value
    infoForm.telephone.value = user._id;
    infoForm.birthDate.value = getDate(user.userInfo.birth);
    if (user.userInfo.gender === "male") {
      infoForm.gender.value = "male";
    } else {
      infoForm.gender.value = "female";
    }
    this.setState({ infoForm }, loadingScreen.hideLoading());
  }

  onUpdateUser = () => {
    const updatedUser = cloneData(this.props.user);
    updatedUser.userInfo.name = this.state.infoForm.fullName.value;
    updatedUser.userInfo.email = this.state.infoForm.email.value;
    updatedUser.userInfo.address = this.state.infoForm.address.value;
    updatedUser.userInfo.gender = this.state.infoForm.gender.value;
    updatedUser.userInfo.birth = this.state.infoForm.birthDate.value;
    delete updatedUser.userPermission;
    this.props.updatedUserById(this.state.infoForm.telephone.value, updatedUser);
  }

  componentWillMount() {

    if (isNotEmpty(this.props.user)) {
      loadingScreen.showLoading();
      this.initForm(this.props.user);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isNotEmpty(nextProps.user)) {
      loadingScreen.showLoading();
      this.initForm(nextProps.user);
    }
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
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
            {this.state.noEdit ? (
              <div className="text-center">
                <button
                  className="btn"
                  style={{ marginBottom: "20px" }}
                  onClick={() => this.setState({ noEdit: false })}
                >
                  {" "}
                  Chỉnh Sửa Tài Khoản
                </button>
              </div>
            ) : null}
            {/* {form} */}
          </fieldset>
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

const mapDispatchToProps = dispatch => {
  return {
    updatedUserById: (id, data) => {
      dispatch(Actions.userActions.updateUserFromSV(id, data))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditInformation);
