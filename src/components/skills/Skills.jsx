import React from 'react'
import './skills.css'
import { DiNodejsSmall, DiSass } from 'react-icons/di'
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
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiR,
  SiTableau,
  SiScikitlearn,
  SiMlb,
  SiMatrix,
  SiMicrosoftexcel
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

        <div className="skill__analyst">
          <h3>Analyst Skills</h3>
          <div className="skill__content">
            <article className="skill__details">
              <SiMlb className='skill__details-icon' />
              <div>
                <h4>ML</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMicrosoftexcel className='skill__details-icon' />
              <div>
                <h4>MS Excel</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiR className='skill__details-icon' />
              <div>
                <h4>R</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiTableau className='skill__details-icon' />
              <div>
                <h4>Tableau</h4>
              </div>
            </article>

            <article className="skill__details">
              
              <DiSass className='skill__details-icon' />
              <div>
                <h4>SASS</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMicrosoftsqlserver className='skill__details-icon' />
              <div>
                <h4>MS SQL</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiScikitlearn className='skill__details-icon' />
              <div>
                <h4>Scikit Learn</h4>
              </div>
            </article>

            <article className="skill__details">
              <SiMatrix className='skill__details-icon' />
              <div>
                <h4>Matplolib</h4>
              </div>
            </article>

          </div>
        </div>
        {/*Communication Skills Part*/}
        <div className="skill__communication">
          <h3>Other Skills</h3>
          <h4><b>></b> Language</h4>
          <article className='skill__details'>
              <div>
                <h4 className='ml'>Enlgish</h4>
              </div>
              <div>
               <h4 className='ml'>Bangla</h4>
              </div>
              <div>
                <h4 className='ml'>Hindi</h4>
              </div>
            </article>
          <h4><b>></b> Team Work</h4>
          <h4><b>></b> Organizaional Skill</h4>
          <h4><b>></b> Communication Skill</h4>
          <h4><b>></b> Problem Solving</h4>
          <h4><b>></b> Time Management</h4>
        </div>

      </div>
    </section>
  )
}

export default Skills