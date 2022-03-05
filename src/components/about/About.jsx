import React from 'react'
import ME from '../../assets/picture.jpeg'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
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
                <FaAward className='about__icon'/>
                <h5>Skills</h5>
                <small>15+ Working</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore maiores blanditiis odio non. Possimus nemo libero alias repellat, labore atque excepturi et, nisi at illum dignissimos provident ea dolores!
            </p>
            <a href="#contact"className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About