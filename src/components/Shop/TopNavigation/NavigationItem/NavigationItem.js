import React from 'react';
import { columnDropdownList } from "../../../../services/config";
import { Link } from 'react-router-dom';
import $ from 'jquery'
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

// hide Search Input when change page
function hideSearchField() {
  $("#search").css("display", "none");
  $(".header-search.dropdown-toggle").removeClass('active');
  return false;
}

const navigationItem = (props) => {
  let zIndexStyle;
  zIndexStyle = {
    zIndex: '30000'
  }

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
              {subNav.id === 'blogs' ?  <Link onClick={hideSearchField} to="/blogs">Blogs</Link> 
              :<Link onClick={hideSearchField} to={{ pathname: `/category/${props.parentNav}/${subNav.id}` }}>{subNav.subName}</Link> }
              </li>
            );
          })
        }
      </>
    );
  }

  //  if(subNavList.id === 'blogs'){
  //   return (
  //     <li >
  //     {/* <a href="index9328.html?route=common/home">{subNav.subName}</a> */}
  //     <Link onClick={hideSearchField} to="/blogss">Blogs</Link>
  //   </li>
  //   );
  // }


  if (props.type === 'dropdown') {
    return (
      <li className={li.join(' ')} style={zIndexStyle}>
        {
          props.parentNav === 'home' ? <Link to="/home"> {props.children}</Link> : <a href="/" style={{ cursor: "default", pointerEvents: "none" }}> {props.children}</a>
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
        <Link to={{ pathname: `/${props.parentNav}` }}>
          {props.children}
        </Link>

      </li>);
  }
};

export default navigationItem;