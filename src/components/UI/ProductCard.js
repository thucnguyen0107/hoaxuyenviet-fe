import React from 'react';
import Iimg from '../../components/UI/LoadingImage/Limg';
import Link from 'react-router-dom';
const productCard = (props) => {
  

  return (
    <div className="product-block product-thumb transition">
      <div className="product-block-inner">
        <div className="image">
          <a href="indexd21c.html?route=product/product&amp;product_id=47">
            <Iimg src={props.cardContent.srcImg} title={props.cardContent.name} alt={props.cardContent.name} className="img-responsive reg-image" />
            <Iimg className="img-responsive hover-image" src={props.cardContent.srcImg} title={props.cardContent.name}
              alt={props.cardContent.name} />
          </a>
          <div className="extra-info">
          </div>
        </div>
        <div className="caption">
          <div className="product-deacription-wrapper">
            <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">{props.cardContent.name} </a></h4>
            <span className="price">
              <span className="price-new">{props.cardContent.price} đồng</span>
              <span className="price-tax">Ex Tax: {props.cardContent.price} đồng</span>

            </span>
            <div className="rating">
              <span className="fa fa-stack"><i className="fa fa-star"></i></span>
              <span className="fa fa-stack"><i className="fa fa-star "></i></span>
              <span className="fa fa-stack"><i className="fa fa-star "></i></span>
              <span className="fa fa-stack"><i className="fa fa-star "></i></span>
              <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
            </div>
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
                <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                  <i className="fa fa-eye"></i>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productCard;