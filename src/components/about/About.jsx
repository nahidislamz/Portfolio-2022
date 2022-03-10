import React from 'react'
import ME from '../../assets/picture.jpeg'
import './about.css'
import {FaCode} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About({about}) {

  return (
    <section id='about'>
      <h5 className='text-light text-center'>Get To Know</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Nahid Islam" />
          </div>
        </div>
        <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaCode className='about__icon'/>
                  <h5>Programming</h5>
                  <small>4+ Languages</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
                </article>
              </div>  
              <p>{about}</p>
              <a href="#contact"className="btn btn-primary">Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About