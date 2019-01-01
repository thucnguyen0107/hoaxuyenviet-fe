import React from 'react';

const categorySlider = (props) => {
  return (
    <>
      <div className="swiper-slide text-center">
        <div id="categorycmsblock" className="categorycmsblock">
          <div className="container">
            <div className="row">
              <div className="categorycmsblock-wrapper">
                <div className="row">
                  <div className="categorycmsblock-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="categorycmsblock-item categorycmsblock-item-1">
                      <div className="categorycmsblock-image">
                        <img src={props.sliderItem[0].srcImg} alt="Cat-banner-1" />
                      </div>
                      <div className="categorycmsblock-title-link-wrapper">
                        <span className="categorycmsblock-title">{props.sliderItem[0].name}</span>
                        <a className="categorycmsblock-link" href="#">View More</a>
                      </div>
                    </div>
                    <div className="categorycmsblock-item categorycmsblock-item-2">
                      <div className="categorycmsblock-title-wrapper">
                        <span className="categorycmsblock-title">{props.sliderItem[1].name}</span>
                      </div>
                      <div className="categorycmsblock-image">
                        <img src={props.sliderItem[1].srcImg} alt="Cat-banner-2" />
                      </div>
                      <div className="categorycmsblock-link-wrapper">
                        <a className="categorycmsblock-link" href="#">View More</a>
                      </div>
                    </div>
                  </div>
                  <div className="categorycmsblock-right col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="categorycmsblock-item categorycmsblock-item-3">
                      <div className="categorycmsblock-title-wrapper">
                        <span className="categorycmsblock-title">{props.sliderItem[2].name}</span>
                      </div>
                      <div className="categorycmsblock-image">
                        <img src={props.sliderItem[2].srcImg} alt="Cat-banner-3" />
                      </div>
                      <div className="categorycmsblock-link-wrapper">
                        <a className="categorycmsblock-link" href="#">View More</a>
                      </div>
                    </div>
                    <div className="categorycmsblock-item categorycmsblock-item-4">
                      <div className="categorycmsblock-image">
                        <img src={props.sliderItem[3].srcImg} alt="Cat-banner-4" />
                      </div>
                      <div className="categorycmsblock-title-link-wrapper">
                        <span className="categorycmsblock-title">{props.sliderItem[3].name}</span>
                        <a className="categorycmsblock-link" href="#">View More</a>
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

export default categorySlider;