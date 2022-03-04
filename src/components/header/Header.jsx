import React from 'react'
import './header.css'
import Profile from '../../assets/me.png'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import Navbar from './navbar/Navbar'

function Header() {
  return (
    <>
      <header id='home'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Nahid Islam</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <div className="btn__container">
            <a href="" className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
          <div className="header__social">
            <a href="https://" target='_blank'> <BsLinkedin /> </a>
            <a href="https://" target='_blank'><BsGithub /></a>
            <a href="https://" target='_blank'> <BsFacebook /></a>
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