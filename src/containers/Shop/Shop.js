import React from 'react';
import Header from '../../containers/Shop/Header/Header';
import Footer from '../../components/Footer/Footer';
import Body from '../../containers/Shop/Body/Body'

class Shop extends React.Component {
  render() {
    return (
      <>
        <div className="common-home   layout-1">
          <Header />
          <Body />
          <Footer />
        </div>
      </>
    )
  }
}

export default Shop;