import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rll6j97', 'template_13nubqw', form.current, '6Sv7SsmafdSQ8kN-y')
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samratdps@gmail.com</h5>
            <a href="mailto:samratdps@gmail.com" target="_blank">Mail Me</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Messenger</h5>
            <a href="https://m.me/bojanala.samrat" target="_blank">Message Me</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+14435297987</h5>
            <a href="https://api.whatsapp.com/send?phone=+14435297987" target="_blank">Whatsapp Me</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required>
          </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact