import React from "react";
import ProductList from "../../../components/UI/ProductList";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import filterUtils from "../../../utilities/filter";
import classes from "./Search.scss";
import { convertFilters } from "../../../utilities/categoriesUtil";
import FilterBar from "../../../components/UI/FilterBar";
import { visibleItems } from "../../../services/config";
import { isNotEmpty, change_Unicode } from "../../../utilities/fnUtil";
class Search extends React.Component {
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

    // this.catParams = convertCategories(this.props.match.params.first, this.props.match.params.second, props.history.replace);
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
    this.setState({
      filteredProductList
    });
    loadingScreen.hideLoading();
  };

  componentWillMount() {
    const searchText =
      document.getElementById("searchInput") &&
      document.getElementById("searchInput").value
        ? document.getElementById("searchInput").value
        : "";
    loadingScreen.showLoading();
    axios
      .post(endPoints.GET_PRODUCT_LIST_BY_SEARCH, {
        name: change_Unicode(searchText)
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
    const searchText =
      document.getElementById("searchInput") &&
      document.getElementById("searchInput").value
        ? document.getElementById("searchInput").value
        : "";
    loadingScreen.showLoading();
    axios
      .post(endPoints.GET_PRODUCT_LIST_BY_SEARCH, {
        name: change_Unicode(searchText)
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
    filterUtils.resetFilterFn(
      this.filterParams,
      this.props.history.location.pathname,
      this.props.location.pathname
    );
  }
  componentDidUpdate() {
    window.gridResize();
    document.getElementById("searchInput").value = "";
  }
  render() {
    return (
      <div className="main-content">
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2
                  className="page-title"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  TRANG TÌM KIẾM
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
                    Tìm kiếm
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
                  filterParams={this.filterParams}
                  catFilter={convertFilters()}
                  filter={this.filterProductFn}
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
                {this.state.visible < this.state.filteredProductList.length && (
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
    );
  }
}

export default Search;
