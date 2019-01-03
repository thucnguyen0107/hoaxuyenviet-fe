import React, { Component } from 'react';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

class Header extends Component {
	headerContent = {
		categories: [
			{ id: 1, name: 'Trang chủ', type: 'home' },
			{
				id: 2, name: 'Sự kiện', type: 'dropdown', subCategories:
					[
						{ id: 1, subName: 'Khánh thành' },
						{ id: 2, subName: 'Lễ cưới' },
						{ id: 3, subName: 'Sinh nhật' },

					]
			},
			{
				id: 3, name: 'Ngày lễ', type: 'dropdown', subCategories:
					[
						{ id: 1, subName: 'Quốc tế phụ nữ' },
						{ id: 2, subName: 'Phụ nữ Việt Nam' },
						{ id: 3, subName: 'Nhà giáo Việt Nam' },

					]
			},
			{
				id: 4, name: 'Kiểu loại', type: 'dropdown', subCategories:
					[
						{ id: 1, subName: 'Hoa hồng' },
						{ id: 2, subName: 'Hoa cúc' },
						{ id: 3, subName: 'Hoa mẫu đơn' },

					]
			},
			{
				id: 5, name: 'Hình thức', type: 'dropdown', subCategories:
					[
						{ id: 1, subName: 'Lẳng hoa' },
						{ id: 2, subName: 'Giỏ hoa' },
						{ id: 3, subName: 'Bó hoa' },

					]
			},
			{
				id: 6, name: 'Màu sắc', type: 'dropdown', subCategories:
					[
						{ id: 1, subName: 'Màu hồng' },
						{ id: 2, subName: 'Màu trắng' },
						{ id: 3, subName: 'Màu vàng' },

					]
			},
		]
	};


	render() {
		return (
			<div>
				<TopNavigation listCategoriesName={this.headerContent.categories} />
			</div>

		);
	}
}

export default Header;