import React from 'react';

const bannersSlider = (props) => {

    return (
        <div className="main-slider">
            <div id="spinner"></div>
            <div className="swiper-viewport">
                <div id="slideshow0" className="swiper-container" style={{ opacity: "1" }}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide text-center">
                            <a href="#"><img src={props.listBannerSlider[0].srcImg} alt="Main-banner-1" className="img-responsive" /></a></div>
                        <div className="swiper-slide text-center">
                            <a href="#"><img src={props.listBannerSlider[1].srcImg} alt="Main-banner-2" className="img-responsive" /></a></div>
                    </div>
                </div>
                <div className="swiper-pagination slideshow0"></div>
                <div className="swiper-pager">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    );
} 

export default bannersSlider;