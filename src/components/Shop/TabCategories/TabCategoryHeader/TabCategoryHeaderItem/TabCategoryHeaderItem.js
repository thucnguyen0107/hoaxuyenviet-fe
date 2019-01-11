import React from 'react';

const tabCategoryHeaderItem = (props) => {

  return (
    <li className={props.tabCategoryContent.active}><a href={`#${props.tabCategoryContent.name}`} data-toggle="tab" data-target={`#${props.tabCategoryContent.id}`}>
      {props.tabCategoryContent.name}
    </a></li>
  );
}

export default tabCategoryHeaderItem;