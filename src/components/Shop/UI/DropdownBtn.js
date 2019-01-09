import React from 'react';

const filterBtn = {
  color: 'rgb(102, 102, 102)',
  lineHeight: '1.12',
  textAlign: 'left',
  padding: '3px 20px 3px 6px',
  position: 'relative',
  width: '50%',
  height: '42px',
  borderTop: '1px solid rgb(221, 221, 221)',
  borderRight: 'none',
  borderBottom: '1px solid rgb(221, 221, 221)',
  borderLeft: 'none',
  borderImage: 'initial',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  display: 'inline-block',
  margin: '0 20px',
  marginBottom: '10px'
}

const caletStyle = {
  position: 'absolute',
  right: '0px',
  top: '19px',
}

const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: '21px',
  zIndex: '1000',
  float: 'left',
  minWidth: '160px',
  padding: '5px 0',
  margin: '2px 0 0',
  fontSize: '16px',
  textAlign: 'left',
  listStyle: 'none',
  backgroundColor: '#fff',
  // -webkit-background-clip: padding-box;
  backgroundClip: 'padding-box',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: '0 6px 12px rgba(0,0,0,.175)',
  width: '200px',
}




const dropdownBtn = (props) => {
  let dropdownMenuHTML = [];
  dropdownMenuHTML = (
    <>
      {
        props.subCatFilter.map((subFilter, index) => {
          return (
            <li key={index}><a href="/" className="dropdown-item">{subFilter.subName}</a></li>
          );
        })
      }
    </>
  );
  return (

    <div className="btn-group col-xs-6 col-sm-4 col-md-3" id={props.idBtn}>
      <button style={filterBtn} className="dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-target={`#${props.idBtn}`}>
        {props.children}<span className="caret" style={caletStyle}></span>
      </button>
      <ul style={dropdownMenuStyle} className="dropdown-menu" >
        {dropdownMenuHTML}
      </ul>
    </div>
  );
}

export default dropdownBtn;