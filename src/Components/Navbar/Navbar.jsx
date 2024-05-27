import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

import './Navbar.css'


function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50  ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>  {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
  <>
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src="/images/logo.png" className="logo" alt="" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li> <a href="#hero"> Home</a></li>
          <li> <a href="#program"> Program</a></li>
          <li> <a href="#about">About Us</a> </li>
          <li><a href="#campus">Campus</a> </li>
          <li><a href="#testimonials"> Testimonials</a></li>
          <li> <a href="#contact" className='btn'>Contact Us</a></li>
        </ul>
        <img src="/images/menu-icon.png" className='menu-icon' onClick={toggleMenu} />
    </nav>
        </>
  )
}

export default Navbar