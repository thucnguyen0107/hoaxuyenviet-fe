import React from 'react';
import Filter from '../../../components/Shop/UI/Filter';
import ProductList from '../../../components/Shop/UI/ProductList';
import classes from './Category.scss';
import { visibleItems } from '../../../services/config'
import $ from 'jquery';
import { convertCategories, convertFilters } from '../../../utilities/categoriesUtil';
import { Redirect } from 'react-router';
import axios from 'axios';
import { endPoints } from '../../../services/config';
import loadingScreen from '../../../utilities/loadingScreen';
import filterUtils from '../../../utilities/filter';
class Category extends React.Component {

  filterParams = {
    event: null,
    holiday: null,
    type: null,
    form: null,
    color: null,
    price: null
  }
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      filteredProductList: [],
      visible: visibleItems
    }
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {
        visible: prev.visible + 4,
      };
    }, window.gridResize);


  }

  filterProductFn = (params) => {
    loadingScreen.showLoading();
    let filteredProductList = filterUtils.filterArrFn(this.state.productList, params);
    this.setState({
      filteredProductList
    })
    loadingScreen.hideLoading();
  }

  resetFilter = () => {
    if (this.props.history.location.pathname !== this.props.location.pathname) {
      window.$(`#event ~ .customSelect .customSelectInner`).text('Sự kiện');
      window.$(`#event`).val('');

      window.$(`#holiday ~ .customSelect .customSelectInner`).text('Ngày lễ');
      window.$(`#holiday`).val('');

      window.$(`#type ~ .customSelect .customSelectInner`).text('Kiểu loại');
      window.$(`#type`).val('');

      window.$(`#form ~ .customSelect .customSelectInner`).text('Hình thức');
      window.$(`#form`).val('');

      window.$(`#color ~ .customSelect .customSelectInner`).text('Màu sắc');
      window.$(`#color`).val('');

      window.$(`#price ~ .customSelect .customSelectInner`).text('Giá');
      window.$(`#price`).val('');
      this.filterParams = {
        event: null,
        holiday: null,
        type: null,
        form: null,
        color: null,
        price: null
      }
    }
  }
  componentWillReceiveProps() {
    loadingScreen.showLoading();
    axios.get(endPoints.GET_PRODUCT_LIST, {
      params: {
        page: this.props.history.location.pathname.split('/')[1],
        of: this.props.history.location.pathname.split('/')[2],
        by: this.props.history.location.pathname.split('/')[3]
      }
    }).then((res) => {
      console.log(res);
      this.setState({
        productList: res,
        filteredProductList: res
      })
      loadingScreen.hideLoading();
    }).catch((err) => {
      loadingScreen.hideLoading();
      console.error(err);
    })

  }

  componentWillUpdate() {
    this.resetFilter();
  }
  componentWillMount() {
    loadingScreen.showLoading();
    axios.get(endPoints.GET_PRODUCT_LIST, {
      params: {
        page: this.props.history.location.pathname.split('/')[1],
        of: this.props.history.location.pathname.split('/')[2],
        by: this.props.history.location.pathname.split('/')[3]
      }
    }).then((res) => {
      console.log(res);
      this.setState({
        productList: res,
        filteredProductList: res
      })
    }).catch((err) => {
      console.error(err);
    })
  }

  componentDidUpdate() {
    window.gridResize();
  }
  componentDidMount() {
    $(document).ready(function () {
      loadingScreen.hideLoading();
    });

  }

  componentWillUnmount() {
    console.log("unmount")
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
                  <h2 className="page-title">{catParams.catName}</h2>
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
                  <Filter filter={this.filterProductFn} filterParams={this.filterParams} catFilter={convertFilters(this.props.match.params.first)}
                    subCatFilter={convertFilters(this.props.match.params.first).subCategories} />

                  <div className="row list-grid-wrapper">
                    {!window.jQuery.isEmptyObject(this.state.filteredProductList) ? <ProductList lstProduct={this.state.filteredProductList.slice(0, this.state.visible)} /> : null}
                  </div>
                  <p className={classes.productsProgressBar} data-auto-id="productsProgressBar">You've viewed {this.state.visible > this.state.filteredProductList.length ? this.state.filteredProductList.length : this.state.visible} of {this.state.filteredProductList.length} products</p>
                  {this.state.visible < this.state.filteredProductList.length &&
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
}

export default Category;