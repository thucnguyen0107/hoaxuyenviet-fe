import React from 'react';
import classes from './Input.scss';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement, "form-control"];
  let validationError = null;

  if (props.invalid) {
    inputClasses.push(classes.Invalid);
    validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
  }

  switch (props.inputtype) {
    case ('input'):
      inputElement = <input {...props.elementConfig} defaultValue={props.value}
        onChange={props.changed} required
        className={inputClasses.join(' ')}
      />
      break;
    case ('password'):
      inputElement = <input {...props} type="password" className={inputClasses.join(' ')} />
      break;

    default:
      inputElement = <input {...props.elementConfig} defaultValue={props.value}
        onChange={props.changed}
        required
        className={inputClasses.join(' ')}
      />
      break;
  }

  return (
    <>
      <div className="form-group required">
        <label className="control-label">{props.label}</label>
        {inputElement}
        {validationError}
      </div>
    </>
  );
};

export default input;