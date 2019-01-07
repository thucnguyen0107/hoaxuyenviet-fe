import React from 'react';
import classes from '../UI/Filter.scss';
import $ from 'jquery'


const filterBtn = {
  color: 'rgb(102, 102, 102)',
  lineHeight: '1.12',
  textAlign: 'left',
  padding: '3px 20px 3px 6px',
  position: 'relative',
  width: '50%',
  height: '42px',
  borderTop: '1px solid rgb(221, 221, 221)',
  borderRight: 'none',
  borderBottom: '1px solid rgb(221, 221, 221)',
  borderLeft: 'none',
  borderImage: 'initial',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  display: 'inline-block',
  margin: '0 20px',
}

const caletStyle = {
  position: 'absolute',
  right: '0px',
  top: '19px',
}

const dropdownContainer ={
  display: 'flex',
  marginBottom:'30px'
}



const filter = (props) => {
  return (
    <>
      <div className="dropdown" style={dropdownContainer}>
        <button style={filterBtn} className="dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
          Loại hoa <span className="caret" style={caletStyle}></span>
        </button>

        <button style={filterBtn} className="dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
          Hình thức hoa <span className="caret" style={caletStyle}></span>
        </button>

        <button style={filterBtn} className="dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
          Màu sắc <span className="caret" style={caletStyle}></span>
        </button>

        <button style={filterBtn} className="dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
          Giá <span className="caret" style={caletStyle} ></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="/">Action</a></li>
          <li><a href="/">Another action</a></li>
          <li className="dropdown">
            <a href="/">One more dropdown</a>
            <ul className="dropdown-menu">
              <li><a href="/">Action</a></li>
              <li><a href="/">Another action</a></li>
              <li className="dropdown">
                <a href="/">One more dropdown</a>
                <ul className="dropdown-menu">
                  ...
            </ul>
              </li>
              <li><a href="/">Something else here</a></li>
              <li><a href="/">Separated link</a></li>
            </ul>
          </li>
          <li><a href="/">Something else here</a></li>
          <li><a href="/">Separated link</a></li>
        </ul>
      </div>

      <button style={{display:'none'}} type="button" id="grid-view" className="btn btn-default grid active"><i className="fa fa-th"></i></button>

      {/* <h3 className="refine-search">Refine Search</h3>
      <div>
        <div className="col-sm-12 category_list">
          <ul>
            <li><a href="index0e16.html?route=product/category&amp;path=25_30_32">Projector</a></li>
            <li><a href="indexa2dc.html?route=product/category&amp;path=25_30_20">Bollard</a></li>
            <li><a href="indexbadb.html?route=product/category&amp;path=25_30_27">Ground-Burial</a></li>
          </ul>
        </div>
      </div> */}

      {/* <div className="category_filter">
        <div className="col-md-4 btn-list-grid">
          <div className="btn-group">
            <button type="button" id="grid-view" className="btn btn-default grid active"><i className="fa fa-th"></i></button>
            <button type="button" id="list-view" className="btn btn-default list"><i className="fa fa-th-list"></i></button>
          </div>
        </div>
        <div className="compare-total"><a href="index6431.html?route=product/compare" id="compare-total"> Product
                Compare (0)</a></div>
        <div className="pagination-right">
          <div className="sort-by-wrapper">
            <div className="col-md-2 text-right sort-by">
              <label className="control-label" htmlFor="input-sort">Sort By:</label>
            </div>
            <div className="col-md-3 text-right sort">
              <select id="input-sort" className="form-control">

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=p.sort_order&amp;order=ASC "
                  defaultValue>Default</option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=pd.name&amp;order=ASC ">Name
                      (A - Z) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=pd.name&amp;order=DESC ">Name
                      (Z - A) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=p.price&amp;order=ASC ">Price
                      (Low &gt; High) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=p.price&amp;order=DESC ">Price
                      (High &gt; Low) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=rating&amp;order=DESC ">Rating
                      (Highest) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=rating&amp;order=ASC ">Rating
                      (Lowest) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=p.model&amp;order=ASC ">Model
                      (A - Z) </option>

                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;sort=p.model&amp;order=DESC ">Model
                      (Z - A) </option>
              </select>
            </div>
          </div>
          <div className="show-wrapper">
            <div className="col-md-1 text-right show">
              <label className="control-label" htmlFor="input-limit">Show:</label>
            </div>
            <div className="col-md-2 text-right limit">
              <select id="input-limit" className="form-control" >
                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;limit=9 "
                  defaultValue>9</option>
                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;limit=25 ">25
                    </option>
                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;limit=50 ">50
                    </option>
                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;limit=75 ">75
                    </option>
                <option value="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=product/category&amp;path=25_30&amp;limit=100 ">100
                    </option>
              </select>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default filter;