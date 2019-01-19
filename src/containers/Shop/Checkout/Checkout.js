import React from "react";
import loadingScreen from "../../../utilities/loadingScreen";

import Form from "../../../components/UI/Form/Form";

class Checkout extends React.Component {
  state = {
    orderForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage:
            "First name must be between 1 and 32 characters and only letters!"
        },
        valid: true
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last name"
        },
        value: "",
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
          placeholder: "E-Mail"
        },
        value: "",
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
          placeholder: "Telephone"
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
                    Thanh toán
                  </a>
                </li>
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
                    <h4 className="panel-title">
                      <div
                        data-toggle="collapse"
                        data-parent="#accordion"
                        className="accordion-toggle collapsed"
                        aria-expanded="false"
                      >
                        Step 2: Account &amp; Billing Details{" "}
                        <i className="fa fa-caret-down" />
                      </div>
                    </h4>
                  </div>
                  <div
                    className="panel-collapse collapse in"
                    id="collapse-payment-address"
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <fieldset id="account">
                            <legend>Your Personal Details</legend>
                            <Form
                              idForm="checkoutForm"
                              formElementsArray={formElementsArray}
                              nameForm="orderForm"
                              originalForm={this.state.orderForm}
                              setState={this.setStateForm}
                              btnName="Thanh Toán"
                            />
                            {/* {form} */}
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      Bước 2: Phương thức thanh toán
                    </h4>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="collapse-payment-method"
                  >
                    <div className="panel-body" />
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
