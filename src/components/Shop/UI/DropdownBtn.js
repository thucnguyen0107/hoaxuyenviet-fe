import React from 'react';

const dropdownBtn = (props) => {
  let dropdownMenuHTML = [];
  dropdownMenuHTML = (
    <>
      {
        props.subCatFilter.map((subFilter, index) => {
          return (
            <option key={index} value={subFilter.id} >{subFilter.subName}</option>
          );
        })
      }
    </>
  );
  return (

    <div className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: "15px" }}>
      <select id={props.idSelect} className="form-control">
        <option defaultChecked value="">{props.nameSelect}</option>
        {dropdownMenuHTML}
      </select>
    </div>
  );
}

export default dropdownBtn;