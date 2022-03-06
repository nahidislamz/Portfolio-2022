import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, 'USER_ID')
      .then((result) => {
          console.log(result.text);
          if (result.text){
            e.target.reset()
          }
      }, (error) => {
          alert(error.text)
      });
  };

  return (
    <section id='contact'>
      <h5 className='text-center text-light'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@nahidislam.net</h5>
            <a href="mailto:contact@nahidislam.net" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>nahidislamz</h5>
            <a href="https://m.me/nahidislamz" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/+8801772280981" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required /> 
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>   
          <button type="submit" className='btn btn-primary'>Send Message</button>     
        </form>
      </div>
    </section>
  )
}

export default Contact