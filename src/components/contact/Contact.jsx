import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdOutlinePhoneEnabled} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eq68q6b', 'template_fizzt5s', form.current, 'A4dgW28ZnM8Fd_8IF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Details</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h3>saar92@gmail.com</h3>
          <a href="mailto:saar92@gmail.com" target="_blank">Send an Email</a>
        </article>  
        <article className="contact__option">
          <MdOutlinePhoneEnabled className='contact__option-icon'/>
          <h4>Mobile</h4>
          <h3>0548156123</h3>
          <a href="tel:+972-548156123" target="_blank">Call me</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Facebook Messenger</h4>
          <h3>Message Me</h3>
          <a href="https://m.me/saarbh" target="_blank">Message me</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name='message' rows="12" placeholder='Your Message'></textarea>
          <div className='button__holder'>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>

    </section>
  )
}
export default Contact