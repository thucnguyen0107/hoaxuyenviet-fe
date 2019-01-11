import React from 'react';
import Filter from '../../../components/Shop/UI/Filter';
import ProductList from '../../../components/Shop/UI/ProductList';
import classes from './Category.scss';
import { visibleItems } from '../../../services/config'
import $ from 'jquery';
import { convertCategories, convertFilters } from '../../../utilities/categoriesUtil';
import { Redirect } from 'react-router';
import axios from 'axios';
import { baseURL } from '../../../services/config';
import {htmlProductModel} from '../../../models/htmlContentModel';
class Category extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      htmlProductModel
  
    }
    // if (props.match.params.first === 'color') {
    //   this.state = null;
    // } else {
    //   this.state = {
    //     productList: [{ id: 1, name: 'Hoa hồng', price: 500000, srcImg: require("../../../assets/images/catalog/product/1-813x1000.jpg") },
    //     { id: 2, name: 'Hoa cúc', price: 700000, srcImg: require("../../../assets/images/catalog/product/2-813x1000.jpg") },
    //     { id: 3, name: 'Hoa huệ', price: 1500000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
    //     { id: 4, name: 'Hoa mẫu đơn', price: 590000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
    //     { id: 5, name: 'Hoa lan', price: 999000, srcImg: require("../../../assets/images/catalog/product/5-813x1000.jpg") },
    //     { id: 6, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/6-813x1000.jpg") },
    //     { id: 7, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
    //     { id: 8, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
    //     { id: 9, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
    //     { id: 10, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
    //     { id: 11, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
    //     { id: 12, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
    //     { id: 13, name: 'Hoa hồng', price: 500000, srcImg: require("../../../assets/images/catalog/product/1-813x1000.jpg") },
    //     { id: 14, name: 'Hoa cúc', price: 700000, srcImg: require("../../../assets/images/catalog/product/2-813x1000.jpg") },
    //     { id: 15, name: 'Hoa huệ', price: 1500000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
    //     { id: 16, name: 'Hoa mẫu đơn', price: 590000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },
    //     { id: 17, name: 'Hoa lan', price: 999000, srcImg: require("../../../assets/images/catalog/product/5-813x1000.jpg") },
    //     { id: 18, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/6-813x1000.jpg") },
    //     { id: 19, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
    //     { id: 20, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
    //     { id: 21, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/3-813x1000.jpg") },
    //     { id: 22, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/8-813x1000.jpg") },
    //     { id: 23, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/7-813x1000.jpg") },
    //     { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 24, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 25, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 26, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 27, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 28, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 29, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 30, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 31, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 32, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 33, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 34, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 35, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 36, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 37, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") }, { id: 38, name: 'Hoa hướng dương', price: 890000, srcImg: require("../../../assets/images/catalog/product/4-813x1000.jpg") },],
    //     visible: visibleItems,
    //     error: false
    //   };
    // }


    // this.loadMore = this.loadMore.bind(this);
  }

  // loadMore() {
  //   this.setState((prev) => {
  //     return { visible: prev.visible + 4 };
  //   }, window.gridResize);
  // }

  componentWillMount() {
    axios.get(`${baseURL}/datatest/HTMLProduct_test.json`).then((res) => {
      console.log(res);
      this.setState({ htmlProductModel: res })
    }).catch((err) => {
      console.error(err);
    })
  }

  componentDidMount() {
    $(document).ready(function () {
      window.gridResize();
      $("#spinner").fadeOut("slow");
    });

  }

  render() {
    let catParams = convertCategories(this.props.match.params.first, this.props.match.params.second);
    if (this.props.match.params.first === 'color') {
      return <Redirect to="/pageNotFound" />
    } else {
      return (
        <>
          <div id="spinner"></div>
          <div id="breadcrumb">
            <div className="container">
              <div className="row">
                <ul className="breadcrumb">
                  <h2 className="page-title">{catParams.catParentName}</h2>
                  <li><a href="/"><i className="fa fa-home"></i></a></li>
                  <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>{catParams.catParentName}</a></li>
                  <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>{catParams.catName}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="categorypage">
            <div id="product-category" className="container">
              <div className="row">
                <div id="content" className="col-sm-12 categorypage">
                  <Filter catFilter={convertFilters(this.props.match.params.first)}
                    subCatFilter={convertFilters(this.props.match.params.first).subCategories} />
                  <div className="row list-grid-wrapper">
                    {!window.jQuery.isEmptyObject(this.state.htmlProductModel.listProduct) ? <ProductList lstProduct={this.state.htmlProductModel.listProduct} /> :null}
                  </div>
                  {/* <p className={classes.productsProgressBar} data-auto-id="productsProgressBar">You've viewed {this.state.visible} of {this.state.productList.length} products</p>
                  {this.state.visible < this.state.productList.length &&
                    <button onClick={this.loadMore} type="button" className={classes.loadMoreBtn}>Load more</button>
                  } */}
                </div>

              </div>
            </div>
          </div>
        </>
      );
    }

  }
}

export default Category;