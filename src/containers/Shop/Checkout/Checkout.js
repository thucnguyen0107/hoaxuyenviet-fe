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
                        <fieldset id="account">
                          <legend>Your Personal Details</legend>
                          <div className="form-group" style={{ display: 'none' }}>
                            <label className="control-label">Customer Group</label>
                            <div className="radio">
                              <label>
                                <input type="radio" name="customer_group_id" value="1" defaultChecked="checked" />
                                Default</label>
                            </div>
                          </div>
                          <Form idForm="checkoutForm" formElementsArray={formElementsArray} changed={this.inputChangedHandler} />

                          <Tooltip placement="bottom" title="Vui lòng điền đầy đủ thông tin">
                            <Button style={{ marginBottom: '20px' }} type="primary" id="button-register" data-loading-text="Loading..." onClick={this.validateForm}>Submit</Button>
                          </Tooltip>
                          {/*  */}
                          {/* {form} */}
                        </fieldset>
                        {/* <fieldset>
                          <legend>Your Password</legend>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-password">Password</label>
                            <input type="password" name="password" defaultValue="" placeholder="Password" id="input-payment-password" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-confirm">Password Confirm</label>
                            <input type="password" name="confirm" defaultValue="" placeholder="Password Confirm" id="input-payment-confirm" className="form-control" />
                          </div>
                        </fieldset> */}
                      </div>
                      {/* <div className="col-sm-6">
                        <fieldset id="address">
                          <legend>Your Address</legend>
                          <div className="form-group">
                            <label className="control-label" htmlFor="input-payment-company">Company</label>
                            <input type="text" name="company" defaultValue="" placeholder="Company" id="input-payment-company" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-address-1">Address 1</label>
                            <input type="text" name="address_1" defaultValue="" placeholder="Address 1" id="input-payment-address-1" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label className="control-label" htmlFor="input-payment-address-2">Address 2</label>
                            <input type="text" name="address_2" defaultValue="" placeholder="Address 2" id="input-payment-address-2" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-city">City</label>
                            <input type="text" name="city" defaultValue="" placeholder="City" id="input-payment-city" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-postcode">Post Code</label>
                            <input type="text" name="postcode" defaultValue="" placeholder="Post Code" id="input-payment-postcode" className="form-control" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-country">Country</label>
                            <select name="country_id" id="input-payment-country" className="form-control">
                              <option defaultValue=""> --- Please Select --- </option>

                            </select>
                          </div>
                          <div className="form-group required">
                            <label className="control-label" htmlFor="input-payment-zone">Region / State</label>
                            <select name="zone_id" id="input-payment-zone" className="form-control"><option defaultValue=""> --- Please Select --- </option><option defaultValue="3513">Aberdeen</option></select>
                          </div>
                        </fieldset>

                      </div> */}
                    </div>
                      {/* <div className="checkbox">
                        <label htmlFor="newsletter">
                          <input type="checkbox" name="newsletter" defaultValue="1" id="newsletter" />
                          I wish to subscribe to the Style-Light newsletter.</label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="shipping_address" defaultValue="1" defaultChecked="defaultChecked" />
                          My delivery and billing addresses are the same.</label>
                      </div>
                      <div className="buttons clearfix">
                        <div className="pull-right">I have read and agree to the <a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=information/information/agree&amp;information_id=3" className="agree"><b>Privacy Policy</b></a>
                          &nbsp;
                        <input type="checkbox" name="agree" defaultValue="1" />
                          <input type="button" defaultValue="Continue" id="button-register" data-loading-text="Loading..." className="btn btn-primary" />
                        </div>
                      </div> */}
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