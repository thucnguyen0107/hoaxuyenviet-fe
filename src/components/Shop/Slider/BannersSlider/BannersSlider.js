import React from 'react';
// import SwiperSlider from '../../../UI/SwiperSlider';
import Slider from '../../../UI/Slider';
import { Link } from 'react-router-dom';
import Iimg from "../../../../components/UI/LoadingImage/Limg";
const bannersSlider = (props) => {

  let type = "bannerSlider";
  let bannerId = "slideshow0";


  let sliderList = [];


  sliderList = (
    <>
      {
        props.listBannerSlider.map((banner, index) => {
          return (
            <div key={index} className="swiper-slide text-center">
              <Link to={banner.eventLink}><Iimg src={banner.image} alt={`Main-banner-${index + 1}`} className="img-responsive" /></Link>
            </div>
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