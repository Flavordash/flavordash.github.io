import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello Im</h5>
            <h1>KWANHOON LEE</h1>
            <h5 className="text-light">Beginner Developer</h5>
            <CTA />
            <HeaderSocial/>
            <div className="me">
              <img src={ME} alt="me" />
            </div>
            <a href="#Contact" className='scroll__down'> Scroll Down </a>
        </div>
    </header>
  )
}

export default Header