import React from 'react'

import { CiWallet } from 'react-icons/ci';
import { IoTrophyOutline } from 'react-icons/io5';
import {GiHorseHead} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>

      <h1><NavLink to='/'><GiHorseHead className='logo'/></NavLink></h1>

      <div className="nav-link">
        <NavLink to='/wallet'><CiWallet className='icon'/></NavLink>
        <NavLink to='/trophy'><IoTrophyOutline className='icon'/></NavLink>
        <NavLink to='/profile'><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="not Found" /></NavLink>
      </div>

    </div>
  )
}

export default Navbar