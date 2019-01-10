import React from 'react';
import SwiperSlider from '../../UI/SwiperSlider';
import Slider from '../../UI/Slider';
const bannersSlider = (props) => {

  let type = "bannerSlider";
  let bannerId = "slideshow0";

  console.log(props.listBannerSlider);
  
  let sliderList = [];


  sliderList = (
    <>
      {
        props.listBannerSlider.map((banner, index) => {
          return (
            <SwiperSlider key={index}>
              <a href="/"><img src={banner.image} alt={`Main-banner-${index + 1}`} className="img-responsive" /></a>
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