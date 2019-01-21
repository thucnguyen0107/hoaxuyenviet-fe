import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/UI/LoadingImage/Limg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './Blogs.scss';
import filterUtils from '../../../utilities/filter';

class Blogs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HTMLBlogModel: [],
      filteredHTMLBlogModel: [],
      visible: 4
    }
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore = () => {
    this.setState((prev) => {
      return {
        visible: prev.visible + 4,
      };
    });

  }

  componentWillMount() {
    loadingScreen.showLoading();
    axios.get('/datatest/Blog.json').then((res) => {
      console.log(res);
      this.setState({
        HTMLBlogModel: res,
        filteredHTMLBlogModel: res
      }, loadingScreen.hideLoading)

    }).catch((err) => {
      loadingScreen.hideLoading();
      console.error(err);
    })
  }

  componentDidMount() {
    loadingScreen.hideLoading();
  }


  filterProductFn = (params) => {
    let filteredHTMLBlogModel = filterUtils.filterArrFn(this.state.HTMLBlogModel, params);
    this.setState({
      filteredHTMLBlogModel
    });

  }
  render() {
    let styleCenter;
    styleCenter = {
      margin: '40px auto 0',
      width:'70%',
    }

    let listBlog = null;
    listBlog = (
      <>
        {
          !window.jQuery.isEmptyObject(this.state.filteredHTMLBlogModel) ? this.state.filteredHTMLBlogModel.slice(0, this.state.visible).map(blog => {
            return (
              <div className="blog_item" key={blog._id}>
                <div className="summary">
                  <div className="blog-left-content">
                    <div className="blog_stats">
                      <div className="date-time hl">{blog.addedDate}</div>
                    </div>
                    <h2 className="blog_title"><Link to={"/blogDetail/" + blog._id} >{blog.title}</Link></h2>

                    <div className="image">
                      <Iimg src={blog.images[0]} alt="Blogs" title="Blogs" className="img-thumbnail" />
                      <p className="post_hover">
                        <Link className="icon zoom" title="Click to view Full Image " to={blog.images[0]} data-lightbox="example-set">
                          <i className="fa fa-plus"></i>
                        </Link>
                        <Link className="icon dots" title="Read More" to={"/blogDetail/" + blog._id}><i className="fa fa-ellipsis-h"></i> </Link>
                      </p>
                    </div>
                  </div>
                  <div className="blog-right-content">
                    <p>{blog.content}</p>
                    <Link className="read-more-link" to={"/blogDetail/" + blog._id}>Đọc tiếp</Link>
                  </div>
                </div>
              </div>
            );
          }) : null

        }
        <p className={classes.productsProgressBar} data-auto-id="productsProgressBar">You've viewed {this.state.visible > this.state.filteredHTMLBlogModel.length ? this.state.filteredHTMLBlogModel.length : this.state.visible} of {this.state.filteredHTMLBlogModel.length} blogs</p>

        {this.state.visible < this.state.filteredHTMLBlogModel.length &&
          <button onClick={this.loadMore} type="button" className={classes.loadMoreBtn}>Load more</button>
        }
      </>
    );
    return (
      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title" style={{ fontFamily: 'Times New Roman' }}>Blogs</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container information-blogger-blogs">
          <div className="row">
            <div className={classes.align_center}>
              <input type="text" name="search" defaultValue="" placeholder="Tìm kiếm bài viết" id="input-search" className="form-control" onChange={event => this.filterProductFn({ title: event.target.value })} />
            </div>
            <div id="content"  style={styleCenter}>
              <div className="blog all-blogs">
                <div className="blog_grid_holder">
                  <div className="row">
                    {listBlog}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

}

export default Blogs;