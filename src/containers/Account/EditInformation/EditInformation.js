
import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';

class EditInformation extends React.Component {
  state = {
    noEdit: true,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "Họ và tên"
        },
        value: "Thục",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage:
            "First name must be between 1 and 32 characters and only letters!"
        },
        valid: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          name: "Password"
        },
        value: "abc123",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage:
            "First name must be between 1 and 32 characters and only letters!"
        },
        valid: true
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          name: "E-mail"
        },
        value: "abc@gmail.com",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Email must be between 1 and 32 characters!"
        },
        valid: true
      },
      telephone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "Số điện thoại"
        },
        value: "032456016",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: /^\+?[0-9]+$/,
          errorMessage: "Phone must be between 9 and 32 numbers!"
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
        console.log("Valid Form Successfully");
      }
    });
  };
  render() {
    return (
      <>

        <div className="col-sm-12">
          <fieldset id="account">
            <legend>Your Personal Details</legend>
            <Form
              idForm="editInforForm"
              nameForm="editInforForm"
              originalForm={this.state.orderForm}
              setState={this.setStateForm}
              noEdit={this.state.noEdit}
              btnName="Lưu Lại"
            />
            { this.state.noEdit ? 
          <div className="text-center">
            <button className="btn" style={{ marginBottom: "20px" }} onClick={() => this.setState({noEdit: false})}>  Chỉnh Sửa Tài Khoản</button>
          </div> : null}
            {/* {form} */}
          </fieldset>        
        </div>
      </>
    );
  }
}
export default EditInformation;