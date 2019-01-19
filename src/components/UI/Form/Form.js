import React from "react";
import Input from "../Input/Input";

const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
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
};

const inputChangedHandler = (event, input, form, nameForm, fn) => {
  // clone form object
  const updatedForm = {
    ...form
  };

  // get changed input element from cloned form object
  const updatedFormElement = {
    ...updatedForm[input]
  };

  // update value for changed input element
  updatedFormElement.value = event.target.value;

  // update changed input element in cloned form object
  updatedForm[input] = updatedFormElement;

  fn({ [nameForm]: updatedForm });
};

const validateForm = (event, form, nameForm, fn) => {
  event.preventDefault();
  const clonedForm = {
    ...form
  };

  let formIsValid = true;
  for (let input in clonedForm) {
    // validate input element
    clonedForm[input].valid = checkValidity(
      clonedForm[input].value,
      clonedForm[input].validation
    );
    formIsValid = clonedForm[input].valid && formIsValid;
  }
  fn({ [nameForm]: clonedForm, formIsValid }, true);
};

const form = props => {
  let idForm;
  idForm = props.idForm;
  let form = null;
  const formElementsArray = [];
  for (let key in props.originalForm) {
    formElementsArray.push({
      id: key,
      config: props.originalForm[key]
    });
  }

  form = (
    <>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          errorMessage={formElement.config.validation.errorMessage}
          label={formElement.config.elementConfig.placeholder}
          changed={event =>
            inputChangedHandler(
              event,
              formElement.id,
              props.originalForm,
              props.nameForm,
              props.setState
            )
          }
        />
      ))}
    </>
  );

  return (
    <form
      id={idForm}
      name=""
      onSubmit={event =>
        validateForm(event, props.originalForm, props.nameForm, props.setState)
      }
    >
      {form}
      <div className="text-center">
        <button style={{ marginBottom: "20px" }} className="btn">
          {props.btnName}
        </button>
      </div>
    </form>
  );
};
export default form;
