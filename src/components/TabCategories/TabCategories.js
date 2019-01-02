import React from 'react';
import TabCategoryHeader from '../TabCategories/TabCategoryHeader/TabCategoryHeader';

const tabCategoriesSlider = (props) => {

  // let arrTabCategoryHeaderName = [];

  // props.listTabCategory.map(tab => {
  //   arrTabCategoryHeaderName.push(tab.categoryName)
  // })



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="category-tab-container">
            <TabCategoryHeader listTabCategory={props.listTabCategory} />
            <div className="tabs">
              <div className="tab-content">
                <div className="tab-pane active" id="All collection">
                  <div className="box-product">
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="indexd21c.html?route=product/product&amp;product_id=47">
                                <img src={props.tabCategory[0].srcImg} title="HP LP3065" alt="HP LP3065" className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[2].srcImg} title="HP LP3065"
                                  alt="HP LP3065" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="indexd21c.html?route=product/product&amp;product_id=47">HP LP3065 </a></h4>
                                <span className="price">
                                  <span className="price-new">$122.00</span>
                                  <span className="price-tax">Ex Tax: $100.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="index7f5a.html?route=product/quick_view&amp;product_id=47">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="indexb77e.html?route=product/product&amp;product_id=48">
                                <img src={props.tabCategory[1].srcImg} title="iPod classNameic" alt="iPod classNameic"
                                  className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[3].srcImg} title="iPod classNameic"
                                  alt="iPod classNameic" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="indexb77e.html?route=product/product&amp;product_id=48">iPod classNameic </a></h4>
                                <span className="price">
                                  <span className="price-new">$122.00</span>
                                  <span className="price-tax">Ex Tax: $100.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="indexdd37.html?route=product/quick_view&amp;product_id=48">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="indexb8ca.html?route=product/product&amp;product_id=43">
                                <img src={props.tabCategory[2].srcImg} title="MacBook" alt="MacBook" className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[4].srcImg} title="MacBook"
                                  alt="MacBook" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="indexb8ca.html?route=product/product&amp;product_id=43">MacBook </a></h4>
                                <span className="price">
                                  <span className="price-new">$602.00</span>
                                  <span className="price-tax">Ex Tax: $500.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="indexff8a.html?route=product/quick_view&amp;product_id=43">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="indexbfcf.html?route=product/product&amp;product_id=31">
                                <img src={props.tabCategory[3].srcImg} title="Nikon D300" alt="Nikon D300" className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[5].srcImg} title="Nikon D300"
                                  alt="Nikon D300" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="indexbfcf.html?route=product/product&amp;product_id=31">Nikon D300 </a></h4>
                                <span className="price">
                                  <span className="price-new">$98.00</span>
                                  <span className="price-tax">Ex Tax: $80.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="index73c4.html?route=product/quick_view&amp;product_id=31">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="index6a4d.html?route=product/product&amp;product_id=33">
                                <img src={props.tabCategory[4].srcImg} title="Samsung SyncMaster 941BW" alt="Samsung SyncMaster 941BW"
                                  className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[6].srcImg} title="Samsung SyncMaster 941BW"
                                  alt="Samsung SyncMaster 941BW" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="index6a4d.html?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW </a></h4>
                                <span className="price">
                                  <span className="price-new">$242.00</span>
                                  <span className="price-tax">Ex Tax: $200.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="index0ac7.html?route=product/quick_view&amp;product_id=33">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-block product-thumb transition">
                          <div className="product-block-inner">
                            <div className="image">
                              <a href="index2ebe.html?route=product/product&amp;product_id=46">
                                <img src={props.tabCategory[5].srcImg} title="Sony VAIO" alt="Sony VAIO" className="img-responsive reg-image" />
                                <img className="img-responsive hover-image" src={props.tabCategory[7].srcImg} title="Sony VAIO"
                                  alt="Sony VAIO" />
                              </a>
                              <div className="extra-info">
                              </div>
                            </div>
                            <div className="caption">
                              <div className="product-deacription-wrapper">
                                <h4><a href="index2ebe.html?route=product/product&amp;product_id=46">Sony VAIO </a></h4>
                                <span className="price">
                                  <span className="price-new">$1,202.00</span>
                                  <span className="price-tax">Ex Tax: $1,000.00</span>

                                </span>
                                <div className="rating">
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star"></i></span>
                                  <span className="fa fa-stack"><i className="fa fa-star off"></i></span>
                                </div>
                                <div className="button-group">
                                  <button type="button" className="btn btn-primary addtocart" >
                                    <i className="fa fa-shopping-basket"></i>
                                    Add to Cart
																			</button>
                                  <button className="btn btn-primary wishlist" type="button" >
                                    <i className="fa fa-heart"></i>
                                    Add to Wish List
																			</button>
                                  <button className="btn btn-primary compare" type="button" >
                                    <i className="fa fa-clone"></i>
                                    Add to Compare
																			</button>
                                  <div className="quickview">
                                    <a className="btn btn-primary" href="index30de.html?route=product/quick_view&amp;product_id=46">
                                      <i className="fa fa-eye"></i>

                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tabCategoriesSlider;