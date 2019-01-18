import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Iimg from '../../../components/UI/LoadingImage/Limg';
import Input from '../../../components/UI/Input/Input';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Blogs extends React.Component {

  state = {
    HTMLBlogModel: [],
  }

  componentWillMount() {
    loadingScreen.showLoading();
    axios.get('/datatest/Blog.json').then((res) => {
      console.log(res);
      this.setState({ HTMLBlogModel: res }, loadingScreen.hideLoading)
    }).catch((err) => {
      loadingScreen.hideLoading();
      console.error(err);
    })
  }

  componentDidMount() {
    loadingScreen.hideLoading();
  }

  render() {

    let listBlog = null;
    listBlog = (
      <>
        {
          this.state.HTMLBlogModel.map(blog => {
            return (
              <div className="blog_item" key={blog._id}>
                <div className="summary">
                  <div className="blog-left-content">
                    <div className="blog_stats">
                      <div className="date-time hl">{blog.addedDate}</div>
                    </div>
                    <h2 className="blog_title text-center"><Link to={"/blog/" + blog._id} >{blog.title}</Link></h2>
                   
                    <div className="image" style={{
                        display: 'block',
                        marginLeft: ' auto',
                        marginRight: 'auto',
                        width: '60%'
                      }}>
                      <Iimg  src={blog.images[0]} alt="Blogs" title="Blogs" className="img-thumbnail" />
                      <p className="post_hover">
                        <Link className="icon zoom" title="Click to view Full Image " to={blog.images[0]} data-lightbox="example-set">
                          <i className="fa fa-plus"></i>
                        </Link>
                        <Link className="icon dots" title="Read More" to={"/blog/" + blog._id}><i className="fa fa-ellipsis-h"></i> </Link>
                      </p>
                    </div>
                  </div>
                  <div className="blog-right-content">
                    <p>{blog.content}</p>
                    <Link className="read-more-link" to={"/blog/" + blog._id}>Continue Reading</Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </>
    );


    return (
      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">Blog</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="">
              <input type="text" name="search" defaultValue="" placeholder="Tìm kiếm bài viết" id="input-search" className="form-control" />
              <button type="button" id="button-search" className="btn btn-primary" style={{marginTop:'20px'}}>Tìm kiếm</button>
            </div>
            <div id="content" className="">
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