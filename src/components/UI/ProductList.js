import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utilities/fnUtil';
import Limg from './LoadingImage/Limg';

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
                    <Link to={'/productDetail/' + product._id}>
                      <Limg src={(product.images[0])} title="Apple Cinema 30&quot;" alt="Apple Cinema 30&quot;"
                        className="img-responsive reg-image" />
                      <Limg className="img-responsive hover-image" src={product.images[1]}
                        title="Apple Cinema 30&quot;" alt="Apple Cinema 30&quot;" />
                    </Link>
                    <div className="extra-info">
                      {product.discount > 0 ? <span className="percentsaving">{`${product.discount}%`}</span> : null}
                    </div>
                  </div>
                  <div className="caption">
                    <div className="product-deacription-wrapper">
                      <h4><Link to={'/productDetail/' + product._id}>{product.productName} </Link></h4>
                      <span className="price">
                        <span className="price-new">{formatCurrency((product.price - (product.discount * product.price / 100)))} VND</span>
                        {product.discount > 0 ? <span className="price-old">{formatCurrency(product.price)}</span> : <span className="price-old"></span>}
                        <div className="saleback">
                          {product.hot === true ? <span className="saleicon hot">Hot</span> : null}
                          {product.new === true ? <span className="saleicon new">New</span> : null}
                          {product.sale === true ? <span className="saleicon sale">Sale</span> : null}
                        </div>
                      </span>
                      <div className="button-group">
                        <Link to="/cart" className="btn btn-primary addtocart" >
                          <i className="fa fa-shopping-basket"></i>
                          Add to Cart
                        </Link>
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