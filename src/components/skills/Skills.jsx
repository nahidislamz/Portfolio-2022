import React from 'react'
import './skills.css'
import { DiNodejsSmall } from 'react-icons/di'
import {
  SiHtml5,
  SiCss3,
  SiJava,
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiAntdesign,
  SiMaterialui,
  SiCplusplus,
  SiFirebase,
  SiTailwindcss
} from 'react-icons/si'

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
              <SiHtml5 className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiCss3 className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>


            <article className="skill__details">
              <SiJavascript className='skill__details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiBootstrap className='skill__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiTailwindcss className='skill__details-icon' />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMaterialui className='skill__details-icon' />
              <div>
                <h4>MeterialUi</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiAntdesign className='skill__details-icon' />
              <div>
                <h4>AntDesign</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiReact className='skill__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <SiJava className='skill__details-icon' />
              <div>
                <h4>Java</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiPython className='skill__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiCplusplus className='skill__details-icon' />
              <div>
                <h4>C | C++</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiDjango className='skill__details-icon' />
              <div>
                <h4>Django</h4>
              </div>
            </article>

            <article className="skill__details">
              <DiNodejsSmall className='skill__details-icon' />
              <div>
                <h4>NodeJs</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMysql className='skill__details-icon' />
              <div>
                <h4>Mysql</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMongodb className='skill__details-icon' />
              <div>
                <h4>Mongodb</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiFirebase className='skill__details-icon' />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills