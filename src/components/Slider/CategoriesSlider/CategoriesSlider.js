import React from 'react';
import CategorySlider from '../CategoriesSlider/CategorySlider/CategorySlider';

const categoriesSlider = (props) => {

	// console.log(props.listCatBannerSlider);
	
	// catSlide = (
	// 	<>
		
	// 	</>
	// );

	return (
		<div className="main-slider">
			<div className="swiper-viewport">
				<div id="slideshow1" className="swiper-container" style={{ opacity: "1" }}>
					<div className="swiper-wrapper">
						{/**Category Block Slide 1*/}
						<CategorySlider sliderItem ={props.listCatBannerSlider}/>
						
						{/**Category Block Slide 2*/}
						<CategorySlider sliderItem ={props.listCatBannerSlider}/>
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

export default categoriesSlider;