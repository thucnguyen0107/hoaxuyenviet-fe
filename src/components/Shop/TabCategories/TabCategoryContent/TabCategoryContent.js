import React from 'react';
import CategoryCard from '../../../UI/CategoryCard';

const tabCategoryContent = (props) => {


  let listProductCardHTML = [];

  listProductCardHTML = (
    <>
      {
        props.tabCategoryContent.categoryDisplay.map((card, index) => {


          return (
            <div className="item text-center" key={index}>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <CategoryCard cardContent={card}>
                </CategoryCard>
              </div>
            </div>
          )
        })
      }

    </>
  );

  return (

    <div className={`tab-pane ${props.tabCategoryContent.active}`} id={props.tabCategoryContent.id}>
      <div className="box-product">
        {listProductCardHTML}
      </div>
    </div>
  );
}

export default tabCategoryContent;