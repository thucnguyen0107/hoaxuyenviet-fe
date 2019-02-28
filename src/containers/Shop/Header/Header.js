import React, { Component } from "react";
import TopNavigation from "../../../components/Shop/TopNavigation/TopNavigation";
import { headerContent } from "../../../data/data";
import { withRouter } from "react-router-dom";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
class Header extends Component {
  state = {
    cartLS: []
  };

  setCartLSState = data => {
    this.setState({ cartLS: data });
  };

  componentWillMount = () => {
    this.props.getHtmlContent();
  };
  render() {
    return (
      <>
        <TopNavigation
          listCategoriesName={headerContent.categories}
          history={pathname => this.props.history.push(pathname)}
          cartLS={this.state.cartLS}
          setCartLSState={this.setCartLSState}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHtmlContent: () =>
      dispatch(Actions.htmlContentActions.getHtmlContentFromSV())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
