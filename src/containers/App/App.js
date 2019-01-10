import React, { Component } from 'react';
import Shop from '../Shop/Shop';
import { BrowserRouter } from 'react-router-dom';
import '../../services/interceptors';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
  }
}

export default App;
