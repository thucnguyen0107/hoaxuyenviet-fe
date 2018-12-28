import React, { Component } from 'react';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

class Header extends Component {
	state = {
		categories: [
			{ id: 1, name: 'Home', type: 'home' },
			{
				id: 2, name: 'Decorative', type: 'dropdown', subCategories:
					[
						{ subName: 'Indoor' },
						{ subName: 'Outdoor' },
						{ subName: 'Downlights' },
						{ subName: 'Uplights' },
						{ subName: 'LED-Batten-Tubes' },
						{ subName: 'Projector' },
						{ subName: 'Bollard' },
						{ subName: 'Ground-Burial' },
						{ subName: 'Projector' },
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
				<TopNavigation listCategoriesName={this.state.categories} />
			</div>

		);
	}
}

export default Header;