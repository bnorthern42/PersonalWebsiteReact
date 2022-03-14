import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from 'react-router-dom';
import "./nav.css";

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className="link-wrapper"> 
            <NavLink to='/' activeStyle className="navlinks">
            <span className='nav-link-name'>Home</span>
            </NavLink>
     
            <NavLink to='/about' activeStyle className="navlinks">
            <span>About</span>
            </NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar;