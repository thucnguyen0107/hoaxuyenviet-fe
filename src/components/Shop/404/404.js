import React from "react";
import NotFoundImg from "../../../assets/images/catalog/funny-404-illustration.png";
import { Link } from "react-router-dom";
import loadingScreen from "../../../utilities/loadingScreen";

const hideLS = () => {
  window.$(document).ready(() => {
    loadingScreen.hideLoading();
  });
};

const notFoundPage = props => {
  return (
    <div class="main-content">
      <div id="breadcrumb">
        <div className="container">
          <div className="row">
            <ul className="breadcrumb">
              <h2 className="page-title">Trang bạn tìm kiếm không tồn tại</h2>
              <li>
                <Link to="/home" style={{ pointerEvents: "inherit" }}>
                  Trở về trang chủ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="categorypage">
        <div id="product-category" className="container">
          <div className="row">
            <div id="content" className="col-sm-12 categorypage">
              <img
                style={{ display: "block", margin: "0 auto" }}
                className="img-responsive"
                src={NotFoundImg}
                alt="404 Not Found"
              />
            </div>
          </div>
        </div>
      </div>
      {hideLS()}
    </div>
  );
};

export default notFoundPage;
