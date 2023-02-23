import React from 'react'
import './header.css'
import Profile from '../../assets/me.png'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import Navbar from './navbar/Navbar'

function Header({cv_link}) {
  return (
    <>
      <header id='home'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Md Nahidul Islam</h1>
          <div className="btn__container">
            <a href={cv_link} className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
          <div className="header__social">
            <a href="https://" target='_blank' rel='noopener noreferrer'> <BsLinkedin /> </a>
            <a href="https://github.com/nahidislamz" target='_blank' rel='noopener noreferrer'><BsGithub /></a>
            <a href="https://" target='_blank' rel='noopener noreferrer'> <BsFacebook /></a>
          </div>
          <div className="me">
            <img src={Profile} alt='Nahid Islam' />
          </div>
          <a href="#contact" className="scroll__down">scroll down</a>
        </div>
      </header>

      <Navbar />
      
    </>
  )
}

export default Header