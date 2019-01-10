import React from 'react';
import { Link } from 'react-router-dom';
const categorySlider = (props) => {

  return (
    <div id="categorycmsblock" className="categorycmsblock">
      <div className="container">
        <div className="row">
          <div className="categorycmsblock-wrapper">
            <div className="row">
              <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="categorycmsblock-item categorycmsblock-item-1">
                  <div className="categorycmsblock-image">
                    <img src={props.sliderItem[0].image} alt="Cat-banner-1" />
                  </div>
                  <div className="categorycmsblock-title-link-wrapper">
                    <span className="categorycmsblock-title"></span>
                    <Link className="categorycmsblock-link" to={props.sliderItem[0].eventLink}>Chi tiết</Link>
                  </div>
                </div>
                <div className="categorycmsblock-item categorycmsblock-item-2">
                  <div className="categorycmsblock-title-wrapper">
                    <span className="categorycmsblock-title"></span>
                  </div>
                  <div className="categorycmsblock-image">
                    <img src={props.sliderItem[1].image} alt="Cat-banner-2" />
                  </div>
                  <div className="categorycmsblock-link-wrapper">
                    <Link className="categorycmsblock-link" to={props.sliderItem[1].eventLink}>Chi tiết</Link>
                  </div>
                </div>
              </div>
              <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="categorycmsblock-item categorycmsblock-item-3">
                  <div className="categorycmsblock-title-wrapper">
                    <span className="categorycmsblock-title"></span>
                  </div>
                  <div className="categorycmsblock-image">
                    <img src={props.sliderItem[2].image} alt="Cat-banner-3" />
                  </div>
                  <div className="categorycmsblock-link-wrapper">
                    <Link className="categorycmsblock-link" to={props.sliderItem[2].eventLink}>Chi tiết</Link>
                  </div>
                </div>
                <div className="categorycmsblock-item categorycmsblock-item-4">
                  <div className="categorycmsblock-image">
                    <img src={props.sliderItem[3].image} alt="Cat-banner-4" />
                  </div>
                  <div className="categorycmsblock-title-link-wrapper">
                    <span className="categorycmsblock-title"></span>
                    <Link className="categorycmsblock-link" to={props.sliderItem[3].eventLink}>Chi tiết</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default categorySlider;