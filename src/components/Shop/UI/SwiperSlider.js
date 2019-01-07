import React from 'react';

const swiperSlider = (props) => {
  return (
    <div className="swiper-slide text-center">
      {props.children}
    </div>
  );
}

export default swiperSlider;