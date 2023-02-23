import React from 'react'
import { SiGooglecolab } from "react-icons/si";
import Accordion from './accordion/Accordion';
import './style.css'

function Analyst_Projects({data}) {

  return (
    <section id='portfolio'>
      <h2>Data Analysis Projects</h2>
      <div className="container a_portfolio__container">
      {
        data.map((item)=>(
          <article className="a_portfolio__item">
            <div className="a_portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <Accordion title={item.title} notebook={item.notebook}/>
            <div className="a_portfolio__item-btn">
              <a href={item.colab} target='_blank' rel='noopener noreferrer' className='colab'>
                <SiGooglecolab className='icon'/>
                Google Colab
              </a>
            </div>
          </article>
        ))
      }
      </div>
    </section>
  )
}

export default Analyst_Projects