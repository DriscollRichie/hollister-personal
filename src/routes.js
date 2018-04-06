import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import ProductInfo from './components/ProductInfo/ProductInfo'
import Login from './components/Login/Login'

export default (
   <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/account' component={ Login }/>
      <Route path='/cart' component={ Cart }/>
      <Route path='/products' component={ Products }/>
      <Route path='/product_info' component={ ProductInfo }/>
   </Switch>
)