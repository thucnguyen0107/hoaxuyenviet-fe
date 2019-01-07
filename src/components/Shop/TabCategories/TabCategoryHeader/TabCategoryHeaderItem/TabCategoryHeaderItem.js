import React from 'react';

const tabCategoryHeaderItem = (props) => {

  return (
    <li className={props.active}><a href={`#${props.categoryName}`} data-toggle="tab" data-target={`#${props.id}`}>
      {props.children}
    </a></li>
  );
}

export default tabCategoryHeaderItem;