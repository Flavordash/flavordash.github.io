import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaSoundcloud} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KWANHOON LEE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className='footer__socials'>
           <a href="https://www.instagram.com/flavordash"><BsInstagram /></a>
           <a href="https://twitter.com/dashpillent"> <BsTwitter/> </a>
           <a href="https://soundcloud.com/flavordash"><FaSoundcloud/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; KWANHOON LEE. Portfolio All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer