import React from 'react'
import './footer.css'
import {SiFacebook} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAAR BEN HORIN</a>
      <ul className='permalinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">Scroll Up</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Saarbh/"><SiFacebook /></a>
        <a href="https://www.instagram.com/saarbh"><SiInstagram /></a>
        <a href="https://twitter.com/saarbh"><SiTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Saar Ben Horin. All rights reserved</small>
      </div>
    </footer >
  )
}
export default Footer