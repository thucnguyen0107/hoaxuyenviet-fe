import React from 'react';
import FooterLogo from '../../assets/images/catalog/footer-logo.png';
const footer = () => {
  return (
    <div id="footer">
      <div className="content_footer_top">
        <div id="footer-about-us-block" className="footer-about-us-block">
          <div className="container">
            <div className="row">
              <div className="footer-about-us-block-wrapper">
                <div className="footer-logo footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <a href="index9328.html?route=common/home">
                    <img alt="" src={FooterLogo}></img>
                  </a>
                </div>
                <div className="footer-contact footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div className="footer-contact-wrapper">
                    <h5 className="footer-about-us-block-item-title">Liên hệ</h5>
                    <div className="footer-contact-discription">(91)-261 3023333 , +84 8866888222</div>
                  </div>
                </div>
                <div className="footer-address footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div className="footer-contact-wrapper">
                    <h5 className="footer-about-us-block-item-title">Địa chỉ</h5>
                    <div className="footer-contact-discription">307/12 Nguyễn Văn Trỗi, Tân Bình, HCM </div>
                  </div>
                </div>
                <div className="footer-share footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <h5 className="footer-about-us-block-item-title">Share</h5>
                  <ul className="social-media-list discription">
                    <li className="facebook"><a href="index9328.html?route=common/home" target="_self"><i className="fa fa-facebook"></i></a></li>
                    <li className="twitter"><a href="index9328.html?route=common/home" target="_self"><i className="fa fa-twitter"></i></a></li>
                    <li className="googleplus"><a href="index9328.html?route=common/home" target="_self"><i className="fa fa-google-plus"></i></a></li>
                    <li className="youtube-play"><a href="index9328.html?route=common/home" target="_self"><i className="fa fa-youtube-play"></i></a></li>
                    <li className="instagram"><a href="index9328.html?route=common/home" target="_self"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                  <a className="footer-about-us-link" href="mailto:sales@yourcompany.com">sales@yourcompany.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;