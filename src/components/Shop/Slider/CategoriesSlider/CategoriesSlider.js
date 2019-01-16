import React from 'react';
import CategorySlider from '../CategoriesSlider/CategorySlider/CategorySlider';
import SwiperSlider from '../../../UI/SwiperSlider';
import Slider from '../../../UI/Slider';
const categoriesSlider = (props) => {


	let type = "categorySlider";
	let catId = "slideshow1";

	let catSliderList = [];

	// catSliderList = props.listCatBannerSlider.map((item) => {
	// 	return (
	// 		<SwiperSlider >
	// 			<CategorySlider sliderItem={item} />
	// 		</SwiperSlider>
	// 	)
	// })

	for (const i in props.listCatBannerSlider) {
		catSliderList.push(
			(
				<SwiperSlider key={i}>
					<CategorySlider sliderItem={props.listCatBannerSlider[i]} />
				</SwiperSlider>
			)
		)
	}


	return (
		<Slider type={type} catId={catId}>
			{catSliderList}
		</Slider>
	);
}

export default categoriesSlider;