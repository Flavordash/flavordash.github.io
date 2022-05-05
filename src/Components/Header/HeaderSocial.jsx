import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/flavordash/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial