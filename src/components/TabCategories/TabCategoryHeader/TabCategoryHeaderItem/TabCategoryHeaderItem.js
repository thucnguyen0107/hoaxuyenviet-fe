import React from 'react';

const tabCategoryHeaderItem = (props) => {
  return (
    <li className=""><a href={`#${props.categoryName}`} data-toggle="tab">
      {props.children}
    </a></li>
  );
}

export default tabCategoryHeaderItem;