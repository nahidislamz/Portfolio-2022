import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://facebook.com/nahidislamz"><AiFillFacebook/></a>
        <a href="https://instagram.com/nahidislamz"><AiFillInstagram/></a>
        <a href="https://github.com/nahidislamz"><AiFillGithub/></a>
        <a href="https://linkedin.com/nahidislamz"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; nahidislam.net. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer