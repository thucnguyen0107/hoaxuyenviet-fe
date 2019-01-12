import React from 'react';
const dropdownBtn = (props) => {
  let dropdownMenuHTML = [];
  dropdownMenuHTML = (
    <>
      {
        props.subCatFilter.map((subFilter) => {
          return (
            <option key={subFilter.id} value={subFilter.id} >{subFilter.subName}</option>
          );
        })
      }
    </>
  );
  return (

    <div className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: "15px" }}>
      <select id={props.idSelect} className="form-control" onChange={props.change}>
        <option defaultChecked value="" >{props.nameSelect}</option>
        {dropdownMenuHTML}
      </select>
    </div>
  );
}

export default dropdownBtn;