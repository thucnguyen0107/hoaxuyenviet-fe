import React, { Component } from 'react';
import TopNavigation from '../../../components/Shop/TopNavigation/TopNavigation';
import {headerContent} from '../../../data/data';

class Header extends Component {


	render() {
		return (
			<>
				<TopNavigation listCategoriesName={headerContent.categories} />
			</>

		);
	}
}

export default Header;