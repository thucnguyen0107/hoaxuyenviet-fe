import React, { Component } from 'react';
import TopNavigation from '../../../components/Shop/TopNavigation/TopNavigation';
import { headerContent } from '../../../data/data';
import { withRouter } from 'react-router-dom';

class Header extends Component {
	state = {
		cartLS: []
	}

	setCartLSState = (data) => {
		this.setState({ cartLS: data })
	}
	render() {
		return (
			<>
				<TopNavigation listCategoriesName={headerContent.categories} history={(pathname) => this.props.history.push(pathname)} cartLS={this.state.cartLS} setCartLSState={this.setCartLSState} />
			</>

		);
	}
}

export default withRouter(Header);