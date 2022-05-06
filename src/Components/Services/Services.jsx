import React from 'react'
import './Services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
        <div className='service__head'>
        <h3>UI/UX Design</h3>
        </div>
        
        <ul className='service__list'>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> React, NextJS, </p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Material UI design, Styled Component, Ant Design</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> Familiar with JavaScript, HTML and CSS3</p>
          </li>
         
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>1. Always make the Container Flexible
              <br/>
              2.Make My Own Image Right Away
              <br/>
              3. Using Redux, Redux-Saga for the Stable Components Management
            </p>
            
            
          </li>
          
        </ul>
        </article>
        {/* UX/UI finish */}
        <article className='service'>
        <div className='service__head'>
        <h3>Blockchain Development</h3>
        </div>
        
        <ul className='service__list'>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>ERC20, ERC721 Smart-Contract</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Web3, Hardhat</p>
          </li>
     
          
        </ul>
        </article>
        {/* UX/UI finish */}
        <article className='service'>
        <div className='service__head'>
        <h3>Content Creation</h3>
        </div>
        
        <ul className='service__list'>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Adobe Premiere Pro</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Adobe Illustrator</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Adobe Photoshop</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Visual Studio</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Logic Pro X</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Final Cut Pro</p>
          </li>
          <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Adobe AfterEffects</p>
          </li>
         
          
        </ul>
        </article>
        {/* UX/UI finish */}
      </div>
    </section>
  )
}

export default Services