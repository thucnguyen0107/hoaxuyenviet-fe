import React from 'react';
import { columnDropdownList } from "../../../../services/config";
import { Link } from 'react-router-dom';
let columnArr = [];
let i = 0;
while (i < columnDropdownList) {
  columnArr.push('auto');
  i++;
}
const styleList = {
  'display': 'grid',
  'gridTemplateColumns': columnArr.join(' ')
}

const navigationItem = (props) => {



  let subNavList = null, subNavListHTML = null;
  subNavList = props.subNavList;

  let li = ['top_level'];
  li.push(props.type);




  if (typeof subNavList !== 'undefined') {
    subNavListHTML = (
      <>
        {
          subNavList.map((subNav, index) => {
            return (
              <li key={index}>
                {/* <a href="index9328.html?route=common/home">{subNav.subName}</a> */}
                <Link to={{ pathname: `/category/${props.parentNav}/${subNav.id}` }}>{subNav.subName}</Link>
              </li>
            );
          })
        }
      </>
    );
  }


  if (props.type === 'dropdown') {
    return (
      <li className={li.join(' ')}>
        {
          props.parentNav === 'home' ? <Link to="/home"> {props.children}</Link> : <a href="/" style={{ cursor: "default" }}> {props.children}</a>
        }

        <div className="dropdown-menu megamenu " >
          <div className="dropdown-inner">
            <ul style={styleList} className="list-unstyled childs_2">
              {subNavListHTML}
            </ul>
          </div>
        </div>
      </li>
    )
  }

  else {
    return (
      <li className={li.join(' ')}>
        {/* <a href="/">{props.children}</a> */}
        <Link to={{ pathname: `/${props.parentNav}` }}> {props.children}

        </Link>

      </li>);
  }
};

export default navigationItem;