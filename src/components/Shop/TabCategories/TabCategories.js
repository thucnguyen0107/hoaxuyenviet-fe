import React from 'react';
import TabCategoryHeader from '../TabCategories/TabCategoryHeader/TabCategoryHeader';
import TabCategoryContent from '../TabCategories/TabCategoryContent/TabCategoryContent'
const tabCategories = (props) => {


  let listTabCategoryContentHTML = []

  // let listTabCategoryContentHTML = (
  //   <>
  //     {
  //       props.listTabCategory.map((tab, index) => {
  //         return (
  //           <TabCategoryContent key={index} tabId={tab.id} tabCategoryContent={tab.categoryProductList} activeTab={tab.active}>

  //           </TabCategoryContent>
  //         )
  //       })
  //     }
  //   </>
  // );



  for (const i in props.listTabCategory) {

    listTabCategoryContentHTML.push(
      (
        <TabCategoryContent key={i} tabCategoryContent={props.listTabCategory[i]} >
        </TabCategoryContent>
      )
    )
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="category-tab-container">
            <TabCategoryHeader listTabCategoryHeader={props.listTabCategory} />
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