import React, { useState } from 'react'
import './navbar.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage,AiOutlineProject} from 'react-icons/ai'

function Navbar() {
  const [active,setActive] = useState('#')
  return (
    <nav>
        <a href="#home" onClick={()=>setActive('#')} className={active === '#'? 'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActive('#about')} className={active === '#about'? 'active':''}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=>setActive('#skills')} className={active === '#skills'? 'active':''}><AiOutlineBook/></a>
        <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active === '#portfolio'? 'active':''}><AiOutlineProject/></a>
        <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact'? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar