import React, { Component } from 'react';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

class Header extends Component {
	headerContent = {
		categories: [
			{
				id: 'home', name: 'Trang chủ', type: 'dropdown', subCategories:
					[
						{ id: 'opening', subName: 'Khánh thành' },
						{ id: 'wedding', subName: 'Lễ cưới' },
						{ id: 'birthdate', subName: 'Sinh nhật' },

					]
			},
			{
				id: 'event', name: 'Sự kiện', type: 'dropdown', subCategories:
					[
						{ id: 'opening', subName: 'Khánh thành' },
						{ id: 'wedding', subName: 'Lễ cưới' },
						{ id: 'birthdate', subName: 'Sinh nhật' },

					]
			},
			{
				id: 'holiday', name: 'Ngày lễ', type: 'dropdown', subCategories:
					[
						{ id: 'womenDay', subName: 'Quốc tế phụ nữ' },
						{ id: 'vnWomenDay', subName: 'Phụ nữ Việt Nam' },
						{ id: 'vnTeacherDay', subName: 'Nhà giáo Việt Nam' },

					]
			},
			{
				id: 'type', name: 'Kiểu loại', type: 'dropdown', subCategories:
					[
						{ id: 'rose', subName: 'Hoa hồng' },
						{ id: 'chrysanthemum', subName: 'Hoa cúc' },
						{ id: 'peony', subName: 'Hoa mẫu đơn' },

					]
			},
			{
				id: 'form', name: 'Hình thức', type: 'dropdown', subCategories:
					[
						{ id: 'buds', subName: 'Lẳng hoa' },
						{ id: 'basket', subName: 'Giỏ hoa' },
						{ id: 'bouquet', subName: 'Bó hoa' },

					]
			},
			{
				id: 'color', name: 'Màu sắc', type: 'dropdown', subCategories:
					[
						{ id: 'pink', subName: 'Màu hồng' },
						{ id: 'white', subName: 'Màu trắng' },
						{ id: 'yellow', subName: 'Màu vàng' },

					]
			},
		]
	};


	render() {
		return (
			<>
				<TopNavigation listCategoriesName={this.headerContent.categories} />
			</>

		);
	}
}

export default Header;