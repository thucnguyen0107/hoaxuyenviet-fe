import React from "react";
import classes from "./Input.scss";
import { initGalleryZoom } from "../../../utilities/fnUtil";
import { Select, Switch, Radio, DatePicker } from "antd";
import moment from 'moment';
import { getCurrentDate } from '../../../utilities/fnUtil';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';

const RadioGroup = Radio.Group;
const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement, "form-control"];
  let validationError = null;

  if (props.invalid) {
    inputClasses.push(classes.Invalid);
    validationError = props.errorMessage ? (
      <p className={classes.ValidationError}>{props.errorMessage}</p>
    ) : null;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          onChange={props.changed}
          required={props.mandatory}
          type={props.elementConfig.type}
          className={inputClasses.join(" ")}
          value={props.value}
          disabled={props.editForm && props.elementConfig.unique}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          onChange={props.changed}
          required={props.mandatory}
          type={props.elementConfig.type}
          className={inputClasses.join(" ")}
          value={props.value}
        />
      );
      break;

    case "password":
      inputElement = (
        <input
          {...props}
          type={props.elementConfig.type}
          className={inputClasses.join(" ")}
          required={props.mandatory}
          value={props.value.join(",")}
        />
      );
      break;

    case "images":
      let classname =
        "gallery_create_product" +
        (props.elementConfig.id ? props.elementConfig.id : "");
      inputElement = (
        <>
          <input
            onChange={props.changed}
            placeholder={props.elementConfig.placeholder}
            type="text"
            className={inputClasses.join(" ")}
            required={props.mandatory}
            value={props.value.join(",")}
          />
          {props.value.length ? (
            <div
              className={classname}
              onLoad={initGalleryZoom(
                ".gallery_create_product" + props.elementConfig.id
                  ? props.elementConfig.id
                  : ""
              )}
              style={{ marginTop: "5px" }}
            >
              {props.value.map((img, index) => (
                <a
                  href={img}
                  key={index}
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    marginRight: "5px"
                  }}
                >
                  <img
                    src={img}
                    alt="Error"
                    width="50"
                    height="50"
                    style={{ pointerEvents: "none" }}
                  />
                </a>
              ))}
            </div>
          ) : null}
        </>
      );
      break;

    case "multiSelect":
      let children = [];
      children = props.elementConfig.data.subCategories.map(item => (
        <Select.Option key={item.id}>{item.subName}</Select.Option>
      ));
      inputElement = (
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          onChange={props.changed}
          required={props.mandatory}
          value={props.value}
        >
          {children}
        </Select>
      );
      break;

    case "switch":
      inputElement = (
        <Switch
          onChange={props.changed}
          required={props.mandatory}
          style={{ marginLeft: "20px" }}
          checked={props.value}
        />
      );
      break;

    case "radioPayment":
      inputElement = (
        <div
          onChange={props.changed}
          value={props.value}
          required={props.mandatory}
          style={{ marginLeft: "10px" }}
        >
          {/* <Radio value={"VISA"}>VISA</Radio>
          <Radio value={"COD"}>Giao Hàng Nhận Tiền</Radio> */}
          <input className="payment" type="radio" name="payment" value="VISA" /> VISA<br />
          <input className="payment" type="radio" name="payment" value="COD" /> Giao Hàng Nhận Tiền<br />
        </div>
      );
      break;

    case "orderDate":
      inputElement = (
        <>
          <br />
          <DatePicker name="Ngày Đặt Hàng" defaultValue={moment(getCurrentDate(), dateFormat)} format={dateFormat} disabled />
        </>
      );
      break;


    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          required={props.mandatory}
          className={inputClasses.join(" ")}
        />
      );
      break;
  }

  return (
    <>
      <div className="form-group required">
        <label
          className={props.mandatory ? "control-label" : ""}
          style={{ fontWeight: "bold" }}
        >
          {props.label}
        </label>
        {inputElement}
        {validationError}
      </div>
    </>
  );
};

export default input;
