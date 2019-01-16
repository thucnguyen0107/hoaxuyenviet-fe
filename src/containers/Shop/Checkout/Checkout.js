import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';

import Form from '../../../components/Shop/UI/Form/Form';
import { Tooltip, Button } from 'antd';


class Checkout extends React.Component {

  state = {
    orderForm: {
      firstName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "First name must be between 1 and 32 characters and only letters!"
        },
        valid: true
      },
      lastName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Last name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "First name must be between 1 and 32 characters and only letters!"
        },
        valid: true,
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
          errorMessage: "Email must be between 1 and 32 characters!"
        },
        valid: true,
      },
      telephone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Telephone'
        },
        value: '',
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: /^\+?[0-9]+$/,
          errorMessage: "Phone must be between 9 and 32 numbers!"
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
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">Thanh toán</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Thanh toán</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="container">
          <div className="row">
            <div id="content" className="col-sm-12">
              <div className="panel-group" id="accordion">

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><div data-toggle="collapse" data-parent="#accordion" className="accordion-toggle collapsed" aria-expanded="false">Step 2: Account &amp; Billing Details <i className="fa fa-caret-down"></i></div></h4>
                  </div>
                  <div className="panel-collapse collapse in" id="collapse-payment-address" aria-expanded="false" style={{ height: "0px" }}>
                    <div className="panel-body"><div className="row">
                      <div className="col-sm-12">
                        <fieldset id="account" >
                          <legend>Your Personal Details</legend>
                          <Form idForm="checkoutForm" formElementsArray={formElementsArray} changed={this.inputChangedHandler} />
                          <div className="col text-center">
                            <Tooltip placement="bottom" title="Vui lòng điền đầy đủ thông tin">
                              <Button style={{ marginBottom: '20px' }} type="primary" id="button-register" data-loading-text="Loading..." onClick={this.validateForm}>Submit</Button>
                            </Tooltip>
                          </div>

                          {/* {form} */}
                        </fieldset>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">Step 5: Payment Method</h4>
                  </div>
                  <div className="panel-collapse collapse" id="collapse-payment-method">
                    <div className="panel-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;