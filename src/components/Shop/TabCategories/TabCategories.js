import React from 'react';
import TabCategoryHeader from '../TabCategories/TabCategoryHeader/TabCategoryHeader';
import TabCategoryContent from '../TabCategories/TabCategoryContent/TabCategoryContent'
const tabCategories = (props) => {

  let listTabCategoryContentHTML = (
    <>
      {
        props.tabCategory.map(tab => {
          return (
            <TabCategoryContent key={tab.id} tabId={tab.id} tabCategoryContent={tab.categoryProductList} activeTab={tab.active}>

            </TabCategoryContent>
          )
        })
      }
    </>
  );


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="category-tab-container">
            <TabCategoryHeader listTabCategoryHeader={props.listTabCategoryHeader} />
            <div className="tabs">
              <div className="tab-content">
                {listTabCategoryContentHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tabCategories;