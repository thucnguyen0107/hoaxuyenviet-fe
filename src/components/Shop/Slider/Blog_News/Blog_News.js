import React from 'react';

const blog_News = (props) => {
  return (
    <div id="homeblog">
      <div className="container">
        <div className="row">
          <div className="box-heading">
            <h2 className="products-section-title">Latest News</h2>
          </div>
          <div className="blog-module latest blog">
            <div className="box">
              <div className="box-content">
                <div className="customNavigation">
                  <a className="fa prev fa-angle-left"></a>
                  <a className="fa next fa-angle-right"></a>
                </div>
                <ul className="box-product owl-carousel blogcarousel blog_grid_holder" id="blog-carousel">

                  <li className="blog_item blog-item-1">
                    <div className="product-block blog-item">
                      <div className="summary">

                        <div className="blog-left">
                          <div className="image">
                            <img src={props.listNews_Blog[0].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                            <p className="post_hover">
                              <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/6-835x455.jpg"
                                data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                              <a className="icon dots" title="Read More" href="index2c9f.html?route=information/blogger&amp;blogger_id=6"><i
                                className="fa fa-ellipsis-h"></i> </a>
                            </p>
                          </div>
                        </div>

                        <div className="blog-right">
                          <div className="blog_stats">
                            <div className="date-time hl">10 / Sep / 2018</div>
                          </div>
                          <h2 className="blog_title"><a href="index2c9f.html?route=information/blogger&amp;blogger_id=6">Nullam
																	ullamcorper nis...</a> </h2>
                          <div className="desc">
                            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ... </p>
                          </div>

                          <div className="readmore">
                            <a className="btn btn-primary read-more-link" href="index2c9f.html?route=information/blogger&amp;blogger_id=6">
                              Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="blog_item blog-item-2">
                    <div className="product-block blog-item">
                      <div className="summary">

                        <div className="blog-left">
                          <div className="image">
                            <img src={props.listNews_Blog[1].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                            <p className="post_hover">
                              <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/5-835x455.jpg"
                                data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                              <a className="icon dots" title="Read More" href="indexed5d.html?route=information/blogger&amp;blogger_id=5"><i
                                className="fa fa-ellipsis-h"></i> </a>
                            </p>
                          </div>
                        </div>

                        <div className="blog-right">
                          <div className="blog_stats">
                            <div className="date-time hl">10 / Sep / 2018</div>
                          </div>
                          <h2 className="blog_title"><a href="indexed5d.html?route=information/blogger&amp;blogger_id=5">Morbi
																	condimentum mole...</a> </h2>
                          <div className="desc">
                            <p> Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestib... </p>
                          </div>

                          <div className="readmore">
                            <a className="btn btn-primary read-more-link" href="indexed5d.html?route=information/blogger&amp;blogger_id=5">
                              Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="blog_item blog-item-3">
                    <div className="product-block blog-item">
                      <div className="summary">

                        <div className="blog-left">
                          <div className="image">
                            <img src={props.listNews_Blog[2].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                            <p className="post_hover">
                              <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/4-835x455.jpg"
                                data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                              <a className="icon dots" title="Read More" href="index4b1d.html?route=information/blogger&amp;blogger_id=4"><i
                                className="fa fa-ellipsis-h"></i> </a>
                            </p>
                          </div>
                        </div>

                        <div className="blog-right">
                          <div className="blog_stats">
                            <div className="date-time hl">10 / Sep / 2018</div>
                          </div>
                          <h2 className="blog_title"><a href="index4b1d.html?route=information/blogger&amp;blogger_id=4">Urna pretium
																	elit maur...</a> </h2>
                          <div className="desc">
                            <p> Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum fauci... </p>
                          </div>

                          <div className="readmore">
                            <a className="btn btn-primary read-more-link" href="index4b1d.html?route=information/blogger&amp;blogger_id=4">
                              Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="blog_item blog-item-4">
                    <div className="product-block blog-item">
                      <div className="summary">

                        <div className="blog-left">
                          <div className="image">
                            <img src={props.listNews_Blog[3].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                            <p className="post_hover">
                              <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/3-835x455.jpg"
                                data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                              <a className="icon dots" title="Read More" href="indexaa69.html?route=information/blogger&amp;blogger_id=3"><i
                                className="fa fa-ellipsis-h"></i> </a>
                            </p>
                          </div>
                        </div>

                        <div className="blog-right">
                          <div className="blog_stats">
                            <div className="date-time hl">10 / Sep / 2018</div>
                          </div>
                          <h2 className="blog_title"><a href="indexaa69.html?route=information/blogger&amp;blogger_id=3">Ipsum cursus
																	vestibulu...</a> </h2>
                          <div className="desc">
                            <p> Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget ... </p>
                          </div>

                          <div className="readmore">
                            <a className="btn btn-primary read-more-link" href="indexaa69.html?route=information/blogger&amp;blogger_id=3">
                              Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="blog_item blog-item-5">
                    <div className="product-block blog-item">
                      <div className="summary">

                        <div className="blog-left">
                          <div className="image">
                            <img src={props.listNews_Blog[4].srcImg} alt="Latest News" title="Latest News" className="img-thumbnail" />
                            <p className="post_hover">
                              <a className="icon zoom" title="Click to view Full Image " href="image/cache/catalog/demo/blogs/2-835x455.jpg"
                                data-lightbox="example-set"><i className="fa fa-plus"></i> </a>
                              <a className="icon dots" title="Read More" href="index5463.html?route=information/blogger&amp;blogger_id=2"><i
                                className="fa fa-ellipsis-h"></i> </a>
                            </p>
                          </div>
                        </div>

                        <div className="blog-right">
                          <div className="blog_stats">
                            <div className="date-time hl">10 / Sep / 2018</div>
                          </div>
                          <h2 className="blog_title"><a href="index5463.html?route=information/blogger&amp;blogger_id=2">Turpis at
																	eleifend ps ...</a> </h2>
                          <div className="desc">
                            <p> Odio ut pretium ligula quam Vestibulum consequat convallis fringilla Vestib... </p>
                          </div>

                          <div className="readmore">
                            <a className="btn btn-primary read-more-link" href="index5463.html?route=information/blogger&amp;blogger_id=2">
                              Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blog_News;