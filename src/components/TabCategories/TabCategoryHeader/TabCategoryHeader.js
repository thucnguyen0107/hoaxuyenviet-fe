import React from 'react';
import TabCategoryHeaderItem from '../TabCategoryHeader/TabCategoryHeaderItem/TabCategoryHeaderItem';

const tabCategoryHeader = (props) => {

  // console.log(props.listTabCategoryHeaderName);
  // console.log(props.listTabCategory);


  let listTabCategoryHeaderNameHTML = [];

  listTabCategoryHeaderNameHTML = (
    <>
      {
        props.listTabCategory.map(cat => {
          return (
            <TabCategoryHeaderItem key={cat.id} categoryName={cat.categoryName}>
              {cat.categoryName}
            </TabCategoryHeaderItem>
          )
        })
      }

    </>
  )


  return (
    <div className="category-tab-heading-wrapper">
      <div className="box-heading">
        <h2 className="products-section-title">New Arrivals</h2>
      </div>
      <div className="etabs">
        <ul className="nav nav-tabs">
          {listTabCategoryHeaderNameHTML}
        </ul>
      </div>
    </div>
  );
}

export default tabCategoryHeader;