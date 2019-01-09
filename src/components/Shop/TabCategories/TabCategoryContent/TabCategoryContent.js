import React from 'react';
import ProductCard from '../../UI/ProductCard';

const tabCategoryContent = (props) => {


  let listProductCardHTML = [];

  listProductCardHTML = (
    <>
      {
        props.tabCategoryContent.map((card, index) => {


          return (
            <div className="item text-center" key={index}>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ProductCard cardContent={card}>
                </ProductCard>
              </div>
            </div>
          )
        })
      }

    </>
  );

  return (

    <div className={`tab-pane ${props.activeTab}`} id={props.tabId}>
      <div className="box-product">
        {listProductCardHTML}
      </div>
    </div>
  );
}

export default tabCategoryContent;