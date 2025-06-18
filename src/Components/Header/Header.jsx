import React from 'react'
import './Header.css'
import CTA from './CTA'

import HeaderSocial from './HeaderSocial'
import {AiOutlineDownCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>KWANHOON LEE</h1>
            <h5 className="text-light">The Ambitious</h5>
            <CTA />
            <HeaderSocial/>
      
            <a href="#contact" className='scroll__down'> <AiOutlineDownCircle /> </a>
        </div>
    </header>
  )
}

export default Header