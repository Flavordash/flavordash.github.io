import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/megif.gif'
import HeaderSocial from './HeaderSocial'
import {AiOutlineDownCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>KWANHOON LEE</h1>
            <h5 className="text-light">Beginner Developer</h5>
            <CTA />
            <HeaderSocial/>
            <div className="me">
              <img src={ME} alt="me" />
            
            </div>
            <a href="#contact" className='scroll__down'> <AiOutlineDownCircle /> </a>
        </div>
    </header>
  )
}

export default Header