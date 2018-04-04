import React from 'react'
import './Nav.css'
import logo from '../../hollister_Logo.png'

export default function() {
   return (
      <div>
         <nav className='nav'>
            <ul className='headCat'>
               <li>Guys</li>
               <li className='headGirl'>Girls</li>
            </ul>
            <div className='title'>
               <span className="title_text">Hollister</span>
               <img src={logo} className='app_logo' alt="logo"/>           
            </div>
            <ul className='account_actions'>
               <li>Account</li>
               <li className='cart'>Cart</li>
            </ul>
         </nav>
      </div>
   )
}