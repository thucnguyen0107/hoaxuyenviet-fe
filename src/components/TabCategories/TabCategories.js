import React from 'react';
import TabCategoryHeader from '../TabCategories/TabCategoryHeader/TabCategoryHeader';
import TabCategoryContent from '../TabCategories/TabCategoryContent/TabCategoryContent'
const tabCategoriesSlider = (props) => {

  // let arrTabCategoryHeaderName = [];

  // props.listTabCategory.map(tab => {
  //   arrTabCategoryHeaderName.push(tab.categoryName)
  // })



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="category-tab-container">
            <TabCategoryHeader listTabCategoryHeader={props.listTabCategoryHeader} />
            <div className="tabs">
              <div className="tab-content">
                <TabCategoryContent tabCategoryContent={props.tabCategory} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tabCategoriesSlider;