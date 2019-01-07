import React from 'react';
import CategorySlider from '../CategoriesSlider/CategorySlider/CategorySlider';
import SwiperSlider from '../../UI/SwiperSlider';
import Slider from '../../UI/Slider';
const categoriesSlider = (props) => {

	let type = "categorySlider";
	let catId = "slideshow1";

	let catSliderList = [];

	catSliderList = (
		<>
			{
				props.listCatBannerSlider.map((catBannerSlider) => {

					return (
						<SwiperSlider key={catBannerSlider.id}>
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