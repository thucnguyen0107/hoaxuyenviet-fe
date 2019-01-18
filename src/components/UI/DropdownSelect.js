import React from 'react';
const dropdownSelect = (props) => {
  let styleCapitalize;
  styleCapitalize = {
    textTransform: 'capitalize'
  }

  let dropdownMenuHTML = [];
  dropdownMenuHTML = (
    <>
      {
        props.subCatFilter.map((subFilter) => {
          return (
            <option key={subFilter.id} value={subFilter.id} style={styleCapitalize}>{subFilter.subName}</option>
          );
        })
      }
    </>
  );
  return (

    <div className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: "15px" }}>
      <select id={props.idSelect} className="form-control" onChange={props.change} style={styleCapitalize}>
        <option defaultChecked value="" >{props.nameSelect}</option>
        {dropdownMenuHTML}
      </select>
    </div>
  );
}

export default dropdownSelect;