import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import ProductInfo from './components/ProductInfo/ProductInfo'
import Products from './components/Products/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Cart/>
         <Nav/>
         <ProductInfo/>
         <Products/>
      </div>
    );
  }
}

export default App;
