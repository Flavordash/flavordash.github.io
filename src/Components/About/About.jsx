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
           <small >Music Engineer, Business 2017- </small>
           <br />
           <small>Coding Training, Blockchain Training 2021-2022</small>
    
           <br />
           <small>Magmabyte Live manager 2022-2023 </small>

          </article>
          <article className='about__card'>
             <FiUsers className='about__icon'/ >
           <h5>Education</h5>
           <br />
           <small>Pukyung National University BA 2010-2017  </small>
           <br />
           <br />
           <small>Saint Leo University CS Master 2023-2025  </small>
          </article>
          <article className='about__card'>
             <GoProject className='about__icon'/ >
           <h5>Projects</h5>
           <br />
           <small>7+ Completed</small>
          </article>
        </div>
       
        <p>
        I am the multi-talented Human who is 
        interested in intelligent systems that operate in real-world environments.
Through hands-on projects such as an object detection system using Raspberry Pi and a voice-based trading tool, I have explored how robotics and AI technologies can assist human decision-making in practical settings.
Currently, I am preparing to pursue research at the intersection of robotics and artificial intelligence, with a focus on task planning and vision-based perception.
My goal is to develop systems that balance academic depth with real-world applicability.


       </p>
       <a href="#contact" className='btn btn-primary'>Contact Me</a>
       </div>
     </div>
   </section>
  )
}

export default About