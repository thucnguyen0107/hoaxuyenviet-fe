import React from "react";
import { Link } from "react-router-dom";
import Iimg from "../../../../UI/LoadingImage/Limg";

const categorySlider = props => {
  let styleImage_ratio_2_3;
  styleImage_ratio_2_3 = {
    width: "400px",
    height: "600px"
  };
  return (
    <div id="categorycmsblock" className="categorycmsblock">
      <div className="container">
        <div className="row">
          <div className="categorycmsblock-wrapper">
            <div className="row">
              <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="categorycmsblock-item categorycmsblock-item-1">
                  <Link
                    className="categorycmsblock-image"
                    to={props.sliderItem[0].eventLink}
                  >
                    <Iimg
                      style={styleImage_ratio_2_3}
                      src={props.sliderItem[0].image}
                      alt="Cat-banner-1"
                    />
                  </Link>
                  <div className="categorycmsblock-title-link-wrapper">
                    <span className="categorycmsblock-title" />
                    <Link
                      className="categorycmsblock-link"
                      to={props.sliderItem[0].eventLink}
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
                <div className="categorycmsblock-item categorycmsblock-item-2">
                  <div className="categorycmsblock-title-wrapper">
                    <span className="categorycmsblock-title" />
                  </div>
                  <Link
                    className="categorycmsblock-image"
                    to={props.sliderItem[1].eventLink}
                  >
                    <Iimg
                      style={styleImage_ratio_2_3}
                      src={props.sliderItem[1].image}
                      alt="Cat-banner-2"
                    />
                  </Link>
                  <div className="categorycmsblock-link-wrapper">
                    <Link
                      className="categorycmsblock-link"
                      to={props.sliderItem[1].eventLink}
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
              <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="categorycmsblock-item categorycmsblock-item-3">
                  <div className="categorycmsblock-title-wrapper">
                    <span className="categorycmsblock-title" />
                  </div>
                  <Link
                    className="categorycmsblock-image"
                    to={props.sliderItem[2].eventLink}
                  >
                    <Iimg
                      style={styleImage_ratio_2_3}
                      src={props.sliderItem[2].image}
                      alt="Cat-banner-3"
                    />
                  </Link>
                  <div className="categorycmsblock-link-wrapper">
                    <Link
                      className="categorycmsblock-link"
                      to={props.sliderItem[2].eventLink}
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
                <div className="categorycmsblock-item categorycmsblock-item-4">
                  <Link
                    className="categorycmsblock-image"
                    to={props.sliderItem[3].eventLink}
                  >
                    <Iimg
                      style={styleImage_ratio_2_3}
                      src={props.sliderItem[3].image}
                      alt="Cat-banner-4"
                    />
                  </Link>
                  <div className="categorycmsblock-title-link-wrapper">
                    <span className="categorycmsblock-title" />
                    <Link
                      className="categorycmsblock-link"
                      to={props.sliderItem[3].eventLink}
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default categorySlider;
