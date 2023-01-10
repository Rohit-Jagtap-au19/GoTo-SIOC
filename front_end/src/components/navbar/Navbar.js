import React from 'react'

import { NavLink } from 'react-router-dom';

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Logo</h1>
      <div className="nav-link">
        <NavLink to='/'>About Us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/profile'>Profile</NavLink>

      </div>
    </div>
  )
}

export default Navbar