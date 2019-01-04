import React from 'react';
import Filter from '../../../components/UI/Filter';
import ProductList from '../../../components/UI/ProductList';
import classes from './Category.scss';
import { visibleItems } from '../../../shared/config'
import $ from 'jquery';
class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [{ id: 1, name: 'Hoa hồng', price: 500000, srcImg: require("../../../assets/images/catalog/product/1-813x1000.jpg") },
      { id: 2, name: 'Hoa cúc', price: 700000, srcImg: require("../../../assets/images/catalog/product/2-813x1000.jpg") },
      { id: 3, name: 'Hoa huệ', price: 1500000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
      { id: 4, name: 'Hoa mẫu đơn', price: 590000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
      { id: 5, name: 'Hoa lan', price: 999000, srcImg: require("../../../assets/images/catalog/product/5-813x1000.jpg") },
      { id: 6, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/6-813x1000.jpg") },
      { id: 7, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
      { id: 8, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
      { id: 9, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
      { id: 10, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
      { id: 11, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
      { id: 12, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
      { id: 13, name: 'Hoa hồng', price: 500000, srcImg: require("../../../assets/images/catalog/product/1-813x1000.jpg") },
      { id: 14, name: 'Hoa cúc', price: 700000, srcImg: require("../../../assets/images/catalog/product/2-813x1000.jpg") },
      { id: 15, name: 'Hoa huệ', price: 1500000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
      { id: 16, name: 'Hoa mẫu đơn', price: 590000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
      { id: 17, name: 'Hoa lan', price: 999000, srcImg: require("../../../assets/images/catalog/product/5-813x1000.jpg") },
      { id: 18, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/6-813x1000.jpg") },
      { id: 19, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
      { id: 20, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
      { id: 21, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
      { id: 22, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
      { id: 23, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
      { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },],
      visible: visibleItems,
      error: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    }, window.gridResize);
  }

  componentDidMount() {
    $(document).ready(function () {
      $("#spinner").fadeOut("slow");
    });

  }

  render() {
    return (
      <>
        <div id="spinner"></div>
        <div id="breadcrumb">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
        <div className="categorypage">
          <div id="product-category" className="container">
            <ul className="breadcrumb">
              <h2 className="page-title">Outdoor</h2>
              <li><a href="index9328.html?route=common/home"><i className="fa fa-home"></i></a></li>
              <li><a href="index1647.html?route=product/category&amp;path=25">Decorative</a></li>
              <li><a href="index68a7.html?route=product/category&amp;path=25_30">Outdoor</a></li>
            </ul>
            <div className="row">


              <div id="content" className="col-sm-12 categorypage">
                <Filter />

                <div className="row list-grid-wrapper">
                  <ProductList lstProduct={this.state.productList.slice(0, this.state.visible)} />
                </div>
                <p className={classes.productsProgressBar} data-auto-id="productsProgressBar">You've viewed {this.state.visible} of {this.state.productList.length} products</p>
                {this.state.visible < this.state.productList.length &&
                  <button onClick={this.loadMore} type="button" className={classes.loadMoreBtn}>Load more</button>
                }
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Category;