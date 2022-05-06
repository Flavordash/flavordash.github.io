import React from 'react'
import './Contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {RiKakaoTalkFill} from 'react-icons/ri'
import {AiOutlineUpCircle} from 'react-icons/ai'
import {SiNaver} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_04nxj5k', 'service_04nxj5k', form.current, 'B6IMU1sxPZLLGbFwM')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineAttachEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>back7930@gmail.com</h5>
            <a href="mailto:back7930@gmail.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <RiKakaoTalkFill className='contact__option-icon' />
            <h4>Kakao Talk</h4>
            <h5>+821047427930</h5>
            <a href="http://qr.kakao.com/talk/Q0Jq7v6woVIz3Ev7GAvRywVALhI-"> Send a message</a>
          </article>
          <article className='contact__option'>
            <SiNaver className='contact__option-icon' />
            <h4>Blog</h4>
            <h5>back7930@naver.com</h5>
            <a href="https://blog.naver.com/back7930"> Visit My Blog</a>
          </article>
        </div>
        {/* End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' required/>
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message"rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <a href="#" className='scroll__up'> <AiOutlineUpCircle /> </a>
        </form>
        
      </div>
    </section>
  )
}

export default Contact