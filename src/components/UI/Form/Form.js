import React from "react";
import Input from "../Input/Input";

let clonedForm = {};

const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = typeof value === 'object' ? value.length && isValid : typeof value === 'boolean' || typeof value === 'number' ? value && isValid :value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if(rules.minNumber) {
    isValid = value >= rules.minNumber && isValid;
  }
  if(rules.maxNumber) {
    isValid = value <= rules.maxNumber && isValid;
  }
  if (rules.letterValid) {
    isValid = rules.letterValid.test(value) && isValid;
  }

  if (rules.numberValid) {
    isValid = rules.numberValid.test(value) && isValid;
  }

  return isValid;
};

const inputChangedHandler = (event, input, form) => {
  // clone form object
  if(window.jQuery.isEmptyObject(clonedForm)) {
     clonedForm = {
      ...form
    };
  }
  
  // get changed input element from cloned form object
  const updatedFormElement = {
    ...clonedForm[input]
  };

  // update value for changed input element
  switch (updatedFormElement.elementType) {
    case 'images':
      if(event.target.value) {
      updatedFormElement.value = event.target.value.split(',');
      } else {
      updatedFormElement.value = [];
      }
      break;
      
    case 'multiSelect':
      let newValue = [];
      for (let i =0; i < event.target.selectedOptions.length; i++) {
        newValue.push(event.target.selectedOptions[i].value)
      }
      updatedFormElement.value = newValue;
      break;

    case 'switch':
      updatedFormElement.value = event.target.checked;
      break;

    case 'textarea':
      updatedFormElement.value = event.target.value.split(',');
      break;

    default:
    updatedFormElement.value = event.target.value;
      break;
  }
  // update changed input element in cloned form object
  clonedForm[input] = updatedFormElement;

  // fn({ [nameForm]: updatedForm });
  // clonedForm = updatedForm;
};

const validateForm = (event, form, nameForm, fn) => {
  event.preventDefault();
  // const clonedForm = {
  //   ...form
  // };

  let formIsValid = true;
  for (let input in form) {
    // validate input element
    form[input].valid = checkValidity(
      form[input].value,
      form[input].validation
    );
    formIsValid = form[input].valid && formIsValid;
  } 
  if(formIsValid) {
    clonedForm = {};
  }
  fn({ [nameForm]: form, formIsValid }, true);
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
          elementType={formElement.config.elementType}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          mandatory={formElement.config.validation.required}
          errorMessage={formElement.config.validation.errorMessage}
          label={formElement.config.elementConfig.name}
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
        validateForm(event, clonedForm, props.nameForm, props.setState)
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
