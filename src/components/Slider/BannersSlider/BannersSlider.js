import React from 'react';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Slider from '../../../components/UI/Slider';
const bannersSlider = (props) => {

  let type = "bannerSlider";
  let bannerId = "slideshow0";

  let sliderList = [];

  sliderList = (
    <>
      {
        props.listBannerSlider.map((banner, index) => {
          return (

            <SwiperSlider key={banner.id}>
              <a href="#"><img src={banner.srcImg} alt={`Main-banner-${index + 1}`} className="img-responsive" /></a>
            </SwiperSlider>
          )
        })
      }

    </>
  )


  return (
    <Slider type={type} bannerId={bannerId}>
      {sliderList}
    </Slider>
  );
}

export default bannersSlider;