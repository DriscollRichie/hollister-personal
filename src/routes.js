import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

export default (
   <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/cart' component={ Cart }/>
   </Switch>
)