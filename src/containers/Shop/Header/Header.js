import React, { Component } from 'react';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

class Header extends Component {
	headerContent = {
		categories: [
			{ id: 1, name: 'Home', type: 'home' },
			{
				id: 2, name: 'Decorative', type: 'dropdown', subCategories:
					[
						{id:1, subName: 'Indoor' },
						{id:2, subName: 'Outdoor' },
						{id:3, subName: 'Downlights' },
						{id:4, subName: 'Uplights' },
						{id:5, subName: 'LED-Batten-Tubes' },
						{id:6, subName: 'Projector' },
						{id:7, subName: 'Bollard' },
						{id:8, subName: 'Ground-Burial' },
						{id:9, subName: 'Projector' },
					]
			},
			{ id: 3, name: 'Chandelier' },
			{ id: 4, name: 'Accent Lighting' },
			{ id: 5, name: 'Wall lamp' },
			{ id: 6, name: 'Blogs' },
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