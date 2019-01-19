import React from 'react';
import SwiperSlider from '../../../UI/SwiperSlider';
import Slider from '../../../UI/Slider';
import { Link } from 'react-router-dom';
const bannersSlider = (props) => {

  let type = "bannerSlider";
  let bannerId = "slideshow0";


  let sliderList = [];


  sliderList = (
    <>
      {
        props.listBannerSlider.map((banner, index) => {
          return (
            <SwiperSlider key={index}>
              <Link to={banner.eventLink}><img src={banner.image} alt={`Main-banner-${index + 1}`} className="img-responsive" /></Link>
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