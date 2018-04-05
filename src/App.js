import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import ProductInfo from './components/ProductInfo/ProductInfo'
import Products from './components/Products/Products'
import Home from './components/Home/Home'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Nav />
         {routes}
      </div>
    );
  }
}

export default App;
