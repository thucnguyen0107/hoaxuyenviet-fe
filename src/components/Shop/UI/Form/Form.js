import React from 'react';
import Input from '../Input/Input'

const form = (props) => {

  
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
              label={formElement.config.elementConfig.placeholder}
              changed={(event) => props.changed(event, formElement.id)}
            />
        ))}
    </>
  );

 return(
   <form id="" name="">
      {form}
   </form>

 );

}
export default form;