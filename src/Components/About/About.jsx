import React from 'react'
import './About.css'
import ME from '../../assets/lghsub.jpg'
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
           <br />
           <small>English Teacher 2010-2017 </small>
           <br />
           <small >Music Engineer 2017- </small>
           <br />
           <small>Coding Training 2021-2022</small>
           <br />
           <small>Blockchain Coder 2022-</small>

          </article>
          <article className='about__card'>
             <FiUsers className='about__icon'/ >
           <h5>Education</h5>
           <br />
           <small>Pukyung National University BA 2010-2017  </small>
          </article>
          <article className='about__card'>
             <GoProject className='about__icon'/ >
           <h5>Projects</h5>
           <br />
           <small>5+ Completed</small>
          </article>
        </div>
       
        <p>
        I am the multi-talented Human who is 
        Highly enthusiastic to the new technology like the blockchain and metaverse. The deeper i am getting into , 
        The more i seek for. Especially When it comes to the computer programming, the nature of it just matches to my habit and hobby. right now 
         i can make a website UI/UX easily and Smart-Contract by using ETH REMIX. and I am always ready for the new challenge    
       </p>
       <a href="#contact" className='btn btn-primary'>Contact Me</a>
       </div>
     </div>
   </section>
  )
}

export default About