import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Skills() {
  return (
    <section id="skills">
      <h5 className='text-light text-center'>What I Know</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>React</h4>
                <small>Experinced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Java</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Python</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Django</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>NodeJs</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
                <h4>Mysql</h4>
                <small>Experinced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills