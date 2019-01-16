import React from 'react';
import Input from '../Input/Input'

const form = (props) => {

  let idForm;
  idForm = props.idForm

  let form = null;

  form = (
    <>
      {props.formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          errorMessage={formElement.config.validation.errorMessage}
          label={formElement.config.elementConfig.placeholder}
          changed={(event) => props.changed(event, formElement.id)}
        />
      ))}

    </>
  );

  return (
    <form id={idForm} name="" style={{ width: '50%', margin: '0 auto' }}>
      {form}
    </form>

  );

}
export default form;