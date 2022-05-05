import React from 'react'
import './About.css'
import ME from '../../assets/LGH.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (

   <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className="container about__container">
       <div className="about__me"> 
<div className="about__me-image">
  <img src={ME} alt='about_image'></img>
</div>
       </div>
       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
             <FaAward className='about__icon'/ >
           <h5>Experience</h5>
           <small>Beginner</small>
          </article>
          <article className='about__card'>
             <FiUsers className='about__icon'/ >
           <h5>Clients</h5>
           <small>10 </small>
          </article>
          <article className='about__card'>
             <GoProject className='about__icon'/ >
           <h5>Projects</h5>
           <small>5+ Completed</small>
          </article>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nam sapiente autem quasi! Magnam voluptates porro laudantium
           perspiciatis pariatur harum culpa, sed, excepturi quaerat alias
            nulla quis et tenetur aliquam molestiae!
       </p>
       <a href="#contact" className='btn btn-primary'>Lets talk</a>
       </div>
     </div>
   </section>
  )
}

export default About