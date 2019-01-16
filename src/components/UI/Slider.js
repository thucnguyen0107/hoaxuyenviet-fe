import React from 'react';

const slider = (props) => {


  if (props.type === 'bannerSlider') {
    return (
      <div className="main-slider">
        <div className="swiper-viewport">
          <div id={props.bannerId} className="swiper-container" style={{ opacity: "1" }}>
            <div className="swiper-wrapper">
              {props.children}
            </div>
          </div>
          <div className="swiper-pager">
            <div className={`swiper-button-next ${props.bannerId}`}></div>
            <div className={`swiper-button-prev ${props.bannerId}`}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-slider" style={{ marginBottom: "0px" }}>
        <div className="swiper-viewport">
          <div id={props.catId} className="swiper-container" style={{ opacity: "1" }}>
            <div className="swiper-wrapper">
              {props.children}
            </div>
          </div>
          <div className="swiper-pager">
            <div className={`swiper-button-next ${props.catId}`}></div>
            <div className={`swiper-button-prev ${props.catId}`}></div>
          </div>
        </div>
      </div>
    );
  }
}




export default slider;