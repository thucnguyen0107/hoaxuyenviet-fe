import React from 'react';
import Iimg from '../../components/UI/LoadingImage/Limg';
import { formatCurrency } from '../../utilities/fnUtil';
const productCard = (props) => {


  return (
    <div className="slider-item">
      <div className="product-block product-thumb transition">
        <div className="product-block-inner">
          <div className="image">
            <a href={'/productDetail/' + props.cardContent._id}>
              <Iimg src={props.cardContent.images[0]} title={props.cardContent.productName} alt={props.cardContent.productName} className="img-responsive reg-image" />
              <Iimg className="img-responsive hover-image" src={props.cardContent.images[1]} title={props.cardContent.productName}
                alt={props.cardContent.productName} />
            </a>
            <div className="extra-info">
              {props.cardContent.discount > 0 ? <span className="percentsaving">{`${props.cardContent.discount}%`}</span> : null}
            </div>
          </div>
          <div className="caption">
            <div className="product-deacription-wrapper">
              <h4>
                <a href={'/productDetail/' + props.cardContent._id}>{props.cardContent.productName}
                </a>
              </h4>
              <strong><span className="price-new">{formatCurrency((props.cardContent.price - (props.cardContent.discount * props.cardContent.price / 100)))} VND</span></strong>
              {props.cardContent.discount > 0 ? <span className="price-old">{formatCurrency(props.cardContent.price)}</span> : <span className="price-old"></span>}
              <div className="saleback">
                {props.cardContent.hot === true ? <span className="saleicon hot">Hot</span> : null}
                {props.cardContent.new === true ? <span className="saleicon new">New</span> : null}
                {props.cardContent.sale === true ? <span className="saleicon sale">Sale</span> : null}
              </div>

              <div className="button-group">
                <button type="button" className="btn btn-primary addtocart" >
                  <i className="fa fa-shopping-basket"></i>
                  Add to Cart
              </button>
              </div>
            </div>
          </div>
          <span className="related_default_width" style={{ display: 'none', visibility: "hidden" }}></span>
        </div>
      </div>
    </div>
  );
}

export default productCard;