import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { Tooltip } from 'antd';



class EditInformation extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Họ và tên'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Họ và tên phải nhiều hơn 3 ký tự và ít hơn 32 ký tự"
        },
        valid: true
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-Mail'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Email không hợp lệ"
        },
        valid: true,
      },
      telephone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Số điện thoại'
        },
        value: '',
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: /^\+?[0-9]+$/,
          errorMessage: "Số điện thoại không hợp lệ"
        },
        valid: true,
      },
    },
    formIsValid: false
  }



  checkValidity(value, rules) {

    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.letterValid) {
      isValid = rules.letterValid.test(value) && isValid;
    }

    if (rules.numberValid) {
      isValid = rules.numberValid.test(value) && isValid;
    }

    return isValid;
  }

  componentDidMount() {
    loadingScreen.hideLoading();
  }

  inputChangedHandler = (event, inputIdentifier) => {

    // clone form object
    const updatedOrderForm = {
      ...this.state.orderForm
    }

    // get changed input element from cloned form object
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    // update value for changed input element
    updatedFormElement.value = event.target.value;

    // update changed input element in cloned form object
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    this.setState({ orderForm: updatedOrderForm });

  }

  validateForm = () => {
    if (!this.state.submitIsClick) {
      this.setState({ submitIsClick: true });
    }

    const form = {
      ...this.state.orderForm
    }

    let formIsValid = true;
    for (let input in form) {
      // validate input element
      form[input].valid = this.checkValidity(form[input].value, form[input].validation);
      formIsValid = form[input].valid && formIsValid;
    }
    this.setState({ orderForm: form, formIsValid: formIsValid });
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <>
        <div id="content" style={{ margin: 'auto', width: 'auto' }}>
          <p>Vui lòng cung cấp đầy đủ thông tin!</p>
          <form className="form-horizontal">
            <fieldset id="account">
              <legend>Thông tin cá nhân</legend>
              <Form idForm="registerForm" formElementsArray={formElementsArray} changed={this.inputChangedHandler} />
              <div className="col text-center">
                <Tooltip placement="bottom" title="Vui lòng điền đầy đủ thông tin">
                <button style={{ marginBottom: '20px' , marginRight: 20}} className="btn btn-default" id="button-back" >Trở về</button>
                <button style={{ marginBottom: '20px' }} className="btn btn-default" id="button-register" data-loading-text="Loading..." onClick={this.validateForm}>Lưu lại</button>
                </Tooltip>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}
export default EditInformation;