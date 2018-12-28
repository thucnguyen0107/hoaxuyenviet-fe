import React from 'react';
import { columnDropdownList } from "../../../shared/config";
let columnArr = [];
let i = 0;
while (i < columnDropdownList) {
  columnArr.push('auto');
  i++;
}
console.log(columnArr);
const styleList = {
  'display': 'grid',
  'grid-template-columns': columnArr.join(' ')
}

const navigationItem = (props) => {

  let subNavList = null, subNavListHTML = null;
  subNavList = props.subNavList;
  console.log(subNavList);

  let li = ['top_level'];
  li.push(props.type);




  if (typeof subNavList !== 'undefined') {
    subNavListHTML = (
      <>
        {
          subNavList.map(subNav => {
            return (
              <li >
                <a href="#">{subNav.subName}</a>
              </li>

            );
          })
        }
      </>
    );
  }

  if (props.type === 'dropdown') {
    return (
      <li className={li.join(' ')}><a href="#">{props.children}</a>
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
    return <li className={li.join(' ')}><a href="#">{props.children}</a></li>;
  }
};

export default navigationItem;