import React from 'react';
import ProductCard from '../../UI/ProductCard';

const tabCategoryContent = (props) => {


  let listProductCardHTML = [];

  listProductCardHTML = (
    <>
      {
        props.tabCategoryContent.map(card => {


          return (
            <ProductCard key={card.id} cardContent={card}>

            </ProductCard>
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