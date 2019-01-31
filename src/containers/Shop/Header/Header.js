import React, { Component } from 'react';
import TopNavigation from '../../../components/Shop/TopNavigation/TopNavigation';
import { headerContent } from '../../../data/data';
import { withRouter } from 'react-router-dom';

class Header extends Component {

	render() {
		return (
			<>
				<TopNavigation listCategoriesName={headerContent.categories} history={(pathname) => this.props.history.push(pathname)} />
			</>

		);
	}
}

export default withRouter(Header);