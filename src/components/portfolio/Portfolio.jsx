import React from 'react'
import './portfolio.css'
import Project_1 from '../../assets/project_1.jpg'
import Project_2 from '../../assets/project_2.jpg'
import Project_3 from '../../assets/project_3.jpg'
import Project_4 from '../../assets/project_4.jpg'
import Project_5 from '../../assets/project_5.jpg'
import Project_6 from '../../assets/project_6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project_1} alt="Project_1" />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio__item-btn">
            <a href="https://github.com/" target='_blank' className='btn'>Github</a>
            <a href="https://" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project_2} alt="Project_1" />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio__item-btn">
            <a href="https://github.com/" target='_blank' className='btn'>Github</a>
            <a href="https://" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project_3} alt="Project_1" />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio__item-btn">
            <a href="https://github.com/" target='_blank' className='btn'>Github</a>
            <a href="https://" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio