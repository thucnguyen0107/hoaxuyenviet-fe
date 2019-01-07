import React from 'react';
import ProductCard from '../../components/UI/ProductCard';



const productList = (props) => {


  let listProductCardHTML = [];

  listProductCardHTML = (
    <>
      {
        props.lstProduct.map((product, i) => {
          return (
            <div className="product-layout product-list col-xs-12" key={i}>
              <div className="product-block product-thumb transition">
                <div className="product-block-inner">
                  <div className="image">
                    <a href="index3a05.html?route=product/product&amp;path=25_30&amp;product_id=42">
                      <img src={product.srcImg} title="Apple Cinema 30&quot;" alt="Apple Cinema 30&quot;"
                        className="img-responsive reg-image" />
                      <img className="img-responsive hover-image" src={product.srcImg}
                        title="Apple Cinema 30&quot;" alt="Apple Cinema 30&quot;" />
                    </a>
                    <div className="extra-info">
                      <span className="percentsaving">10%</span>
                    </div>
                  </div>
                  <div className="caption">
                    <div className="product-deacription-wrapper">
                      <h4><a href="index3a05.html?route=product/product&amp;path=25_30&amp;product_id=42">Apple Cinema
                          30&quot; </a></h4>
                      <span className="price">
                        <span className="price-new">$110.00</span>
                        <span className="price-old">$122.00</span>
                        <span className="price-tax">Ex Tax: $90.00</span>
                        <div className="saleback">
                          <span className="saleicon sale">Sale</span>
                        </div>
                      </span>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                        <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                        <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                        <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                        <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                      </div>
                      <p className="desc">The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel
                        resolution. Designed specifically htmlFor the creative professional, this display provides more
                        space htmlFor easier access to all the tools and...</p>
                      <div className="button-group">
                        <button type="button" className="btn btn-primary addtocart" >
                          <i className="fa fa-shopping-basket"></i>
                          Add to Cart
                        </button>
                        <button className="btn btn-primary wishlist" type="button" >
                          <i className="fa fa-heart"></i>
                          Add to Wish List
                        </button>
                        <button className="btn btn-primary compare" type="button" >
                          <i className="fa fa-clone"></i>
                          Add to Compare
                        </button>
                        <div className="quickview">
                          <a className="btn btn-primary" href="indexc691.html?route=product/quick_view&amp;path=25_30&amp;product_id=42">
                            <i className="fa fa-eye"></i>

                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  );
  return (
    <>
      {listProductCardHTML}
    </>
  );
}

export default productList;