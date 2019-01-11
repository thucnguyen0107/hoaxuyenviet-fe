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
import { htmlProductModel } from '../../../models/htmlProductModel';
class Category extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      htmlProductModel

    }
    if (props.match.params.first === 'color') {
      this.state = null;
    } else {
      this.state = {
        htmlProductModel,
        visible: visibleItems,
        error: false
      }
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

  componentWillMount() {
    axios.get(`${baseURL}/datatest/HTMLProduct_test.json`).then((res) => {
      console.log(res);
      this.setState({ htmlProductModel: res })
    }).catch((err) => {
      console.error(err);
    })
  }

  componentDidUpdate() {
    window.gridResize();
  }
  componentDidMount() {
    $(document).ready(function () {
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
                    {!window.jQuery.isEmptyObject(this.state.htmlProductModel) ? <ProductList lstProduct={this.state.htmlProductModel.slice(0, this.state.visible)} /> : null}
                  </div>
                  <p className={classes.productsProgressBar} data-auto-id="productsProgressBar">You've viewed {this.state.visible > this.state.htmlProductModel.length ? this.state.htmlProductModel.length : this.state.visible} of {this.state.htmlProductModel.length} products</p>
                  {this.state.visible < this.state.htmlProductModel.length &&
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