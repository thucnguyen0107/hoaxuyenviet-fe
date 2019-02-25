import React from "react";
import FilterBar from "../../../components/UI/FilterBar";
import ProductList from "../../../components/UI/ProductList";
import classes from "./Category.scss";
import { visibleItems } from "../../../services/config";
import {
  convertCategories,
  convertFilters
} from "../../../utilities/categoriesUtil";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import filterUtils from "../../../utilities/filter";
import { isNotEmpty } from "../../../utilities/fnUtil";

class Category extends React.Component {
  catParams;
  filterParams = {
    event: null,
    holiday: null,
    type: null,
    form: null,
    color: null,
    price: null
  };
  constructor(props) {
    super(props);
    this.catParams = convertCategories(
      props.match.params.first,
      props.match.params.second,
      props.history.replace
    );
    this.state = {
      productList: [],
      filteredProductList: [],
      visible: visibleItems
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return {
        visible: prev.visible + 4
      };
    }, window.gridResize);
  }

  filterProductFn = params => {
    loadingScreen.showLoading();
    let filteredProductList = filterUtils.filterArrFn(
      this.state.productList,
      params
    );
    this.setState(
      {
        filteredProductList
      },
      loadingScreen.hideLoading
    );
  };

  componentWillMount() {
    loadingScreen.showLoading();
    axios
      .get(endPoints.PRODUCT_LIST_API, {
        params: {
          page: this.props.history.location.pathname.split("/")[1],
          of: this.props.history.location.pathname.split("/")[2],
          by: this.props.history.location.pathname.split("/")[3]
        }
      })
      .then(res => {
        this.setState(
          {
            productList: res,
            filteredProductList: res
          },
          loadingScreen.hideLoading
        );
      })
      .catch(err => {
        loadingScreen.hideLoading();
        console.error(err);
      });
  }

  componentWillReceiveProps() {
    loadingScreen.showLoading();
    axios
      .get(endPoints.PRODUCT_LIST_API, {
        params: {
          page: this.props.history.location.pathname.split("/")[1],
          of: this.props.history.location.pathname.split("/")[2],
          by: this.props.history.location.pathname.split("/")[3]
        }
      })
      .then(res => {
        this.setState(
          {
            productList: res,
            filteredProductList: res
          },
          loadingScreen.hideLoading
        );
      })
      .catch(err => {
        loadingScreen.hideLoading();
        console.error(err);
      });
  }

  componentWillUpdate() {
    this.catParams = convertCategories(
      this.props.match.params.first,
      this.props.match.params.second,
      this.props.history.replace
    );
    filterUtils.resetFilterFn(
      this.filterParams,
      this.props.history.location.pathname,
      this.props.location.pathname
    );
  }

  componentDidUpdate() {
    window.gridResize();
  }

  

  render() {
    return (
      this.catParams && (
        <div className="main-content">
          <div id="breadcrumb">
            <div className="container">
              <div className="row">
                <ul className="breadcrumb">
                  <h2
                    className="page-title"
                    style={{ fontFamily: "Times New Roman" }}
                  >
                    {this.catParams.catName}
                  </h2>
                  <li>
                    <a href="/">
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
                      {this.catParams.catParentName}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
                      {this.catParams.catName}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="categorypage">
            <div id="product-category" className="container">
              <div className="row">
                <div id="content" className="col-sm-12 categorypage">
                  <FilterBar
                    filter={this.filterProductFn}
                    filterParams={this.filterParams}
                    catFilter={convertFilters(this.props.match.params.first)}
                    subCatFilter={
                      convertFilters(this.props.match.params.first)
                        .subCategories
                    }
                  />

                  <div className="row list-grid-wrapper">
                    {isNotEmpty(this.state.filteredProductList) ? (
                      <ProductList
                        lstProduct={this.state.filteredProductList.slice(
                          0,
                          this.state.visible
                        )}


                      />
                    ) : null}
                  </div>
                  <p
                    className={classes.productsProgressBar}
                    data-auto-id="productsProgressBar"
                  >
                    Bạn đã xem{" "}
                    {this.state.visible > this.state.filteredProductList.length
                      ? this.state.filteredProductList.length
                      : this.state.visible}{" "}
                    / {this.state.filteredProductList.length} sản phẩm
                  </p>
                  {this.state.visible <
                    this.state.filteredProductList.length && (
                    <button
                      onClick={this.loadMore}
                      type="button"
                      className={classes.loadMoreBtn}
                    >
                      Load more
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}



export default Category;

