import React, { useState, useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'


export const Header = () => {
  return ( 
    <header>
      <div className="contrainer header__container">

        <h1> Saar Ben Horin</h1>
        <h5 className='text-light'>Creative Developer</h5>
        
        <CTA />

        <HeaderSocials />

        <a href='#contact' className='contact'>Contact</a>

      </div>
    </header>
    
  )
}
export default Header
