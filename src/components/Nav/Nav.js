import React from 'react'
import './Nav.css'
import logo from '../../assets/hollister_Logo.png'
import { Link } from 'react-router-dom'

export default function() {
   return (
      <div>
         <nav className='nav'>
            <div className="nav-bar-left">
               <ul className="ul-links">
                  <Link to='/products/male'>
                     <li>Guys</li>
                  </Link>
                  <Link to='/products/female'>
                     <li>Girls</li>
                  </Link>
               </ul>
            </div>

            <div className="nav-bar-mid">
               <Link to="/" className="Nav-link">
                  <div className='title'>
                     <img src={logo} className='app_logo' alt="logo" width="150px"/>           
                     <span>Hollister</span>
                  </div>
               </Link>
            </div>

            <div className="nav-bar-right">
               <ul className='ul-links'>
               <a href={process.env.REACT_APP_LOGIN}>
                     <li>Login</li>
               </a>
                  <Link to='/cart' className="Nav-link" >
                     <li id='most-right-link'>Cart</li>
                  </Link>
               </ul>
            </div>


         </nav>
      </div>
   )
}