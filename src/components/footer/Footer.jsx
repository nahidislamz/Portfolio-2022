import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://facebook.com/nahidislamz" target='_blank' rel='noopener noreferrer'><AiFillFacebook/></a>
        <a href="https://instagram.com/nahidislamz" target='_blank' rel='noopener noreferrer'><AiFillInstagram/></a>
        <a href="https://github.com/nahidislamz" target='_blank' rel='noopener noreferrer'><AiFillGithub/></a>
        <a href="https://linkedin.com/in/nahidislamz" target='_blank' rel='noopener noreferrer'><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; nahidislam.net. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer