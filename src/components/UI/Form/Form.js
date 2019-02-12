import React from "react";
import Input from "../Input/Input";
import { cloneData, formatDate } from "../../../utilities/fnUtil";

class CustomForm extends React.Component {

  // set default props
  static defaultProps = {
    noEdit: false,
    clearForm: true
  }
  constructor(props) {
    super(props);
    this.state = {
      clonedForm: cloneData(props.originalForm),  // clone form 
      originalForm: cloneData(props.originalForm)
    };
  }

  componentWillReceiveProps = nextProps => {
    if (!Object.is(this.state.clonedForm, nextProps.originalForm)) {
      this.setState({ clonedForm: cloneData(nextProps.originalForm) });
    }
  };

  // check validity of form
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid =
        typeof value === "object"
          ? value.length && isValid
          : typeof value === "boolean" || typeof value === "number"
            ? value && isValid
            : value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.toString().length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.toString().length <= rules.maxLength && isValid;
    }
    if (rules.minNumber) {
      isValid = value >= rules.minNumber && isValid;
    }
    if (rules.maxNumber) {
      isValid = value <= rules.maxNumber && isValid;
    }
    if (rules.numberValid) {
      let reg = new RegExp(rules.numberValid)
      isValid = reg.test(value) && isValid;
    }

    return isValid;
  };


  inputChangedHandler = (event, input) => {
    // clone form object
    // if (window.jQuery.isEmptyObject(this.state.clonedForm)) {
    //   this.setState({ clonedForm: this.props.originalForm });
    // }
    const updateForm = { ...this.state.clonedForm };

    // get changed input element from cloned form object
    const updatedFormElement = {
      ...updateForm[input]
    };

    // update value for changed input element
    switch (updatedFormElement.elementType) {
      case "image":
          updatedFormElement.value = event.target.value;
        break;

      case "images":
        if (event.target.value) {
          updatedFormElement.value = event.target.value.split(",");
        } else {
          updatedFormElement.value = [];
        }
        break;

      case "multiSelect":
        updatedFormElement.value = event;
        break;

      case "switch":
        updatedFormElement.value = event;
        break;

      case "textarea":
        updatedFormElement.value = event.target.value.split(",");
        break;

      case "editor":
        updatedFormElement.value = event;
        break;

      case "date":
        updatedFormElement.value = formatDate(event, true);
        break;
        
      default:
        updatedFormElement.value = event.target.value;
        break;
    }
    // update changed input element in cloned form object
    updateForm[input] = updatedFormElement;

    // fn({ [nameForm]: updatedForm });
    // clonedForm = updatedForm;
    this.setState({ clonedForm: updateForm });
  };

  // validate form func
  validateForm = (event, nameForm, fn) => {
    event.preventDefault();
    const form = {
      ...this.state.clonedForm
    };

    let formIsValid = true;
    for (let input in form) {
      // validate input element
      form[input].valid = this.checkValidity(
        form[input].value,
        form[input].validation
      );
      formIsValid = form[input].valid && formIsValid;
    }
    if (this.props.clearForm && formIsValid) {
      this.setState({ clonedForm: cloneData(this.state.originalForm) });
    }
    fn({ [nameForm]: form, formIsValid }, true);
  };

  render() {
    let idForm;
    idForm = this.props.idForm;
    let form = null;
    const formElementsArray = [];
    for (let key in this.state.clonedForm) {
      formElementsArray.push({
        id: key,
        config: this.state.clonedForm[key]
      });
    }

    form = (
      <>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            notUpdate={this.props.notUpdate}
            elementConfig={formElement.config.elementConfig}
            elementType={formElement.config.elementType}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            mandatory={formElement.config.validation.required} // field required valid
            errorMessage={formElement.config.validation.errorMessage}
            label={formElement.config.elementConfig.name}
            noEdit={this.props.noEdit}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
      </>
    );

    return (
      <form
        id={idForm}
        name=""
        onSubmit={event =>
          this.validateForm(event, this.props.nameForm, this.props.setState)
        }>
        {form}
        {!this.props.noEdit ? <div className="text-center">
          <button style={{ marginBottom: "20px" }} className="btn">
            {this.props.btnName}
          </button>
        </div> : null}
      </form>
    );
  }
}
export default CustomForm;
