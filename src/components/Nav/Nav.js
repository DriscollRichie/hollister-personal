import React from 'react'
import './Nav.css'
import logo from '../../assets/hollister_Logo.png'
import background from '../../assets/site_background.jpg'
import routes from '../../routes'
import { Link, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'

export default function() {
   return (
      <div>
         <nav className='nav'>
            <div className="nav-bar-left">
               <ul className="ul-links">
                  <li>Guys</li>
                  <li>Girls</li>
               </ul>
            </div>

            <div class="nav-bar-mid">
               <Link to="/" className="Nav-link">
                  <div className='title'>
                     <img src={logo} className='app_logo' alt="logo" width="150px"/>           
                     <span>Hollister</span>
                  </div>
               </Link>
            </div>

            <div class="nav-bar-right">
               <ul className='ul-links'>
                  <li>Account</li>
                  <Link to='/cart' className="Nav-link" >
                     <li id='most-right-link'>Cart</li>
                  </Link>
               </ul>
            </div>


         </nav>
      </div>
   )
}