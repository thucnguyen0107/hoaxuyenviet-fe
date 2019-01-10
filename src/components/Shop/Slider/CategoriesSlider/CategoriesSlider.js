import React from 'react';
import CategorySlider from '../CategoriesSlider/CategorySlider/CategorySlider';
import SwiperSlider from '../../UI/SwiperSlider';
import Slider from '../../UI/Slider';
const categoriesSlider = (props) => {

	console.log(props.listCatBannerSlider[0].firstSlide);
	

	let type = "categorySlider";
	let catId = "slideshow1";

	let catSliderList = [];

	catSliderList = (
		<>
			{
				props.listCatBannerSlider.map((catBannerSlider, index) => {
					console.log(catBannerSlider);
					return (
						<SwiperSlider key={index}>
							<CategorySlider sliderItem={props.listCatBannerSlider} />
						</SwiperSlider>
					)
				})
			}

		</>
	)


	return (
		<Slider type={type} catId={catId}>
			{catSliderList}
		</Slider>
	);
}

export default categoriesSlider;