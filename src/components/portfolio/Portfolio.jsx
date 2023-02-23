import React,{ useState } from 'react'
import './portfolio.css'
import {AiFillGithub,AiFillEye} from 'react-icons/ai'
import {CgMoreVertical} from 'react-icons/cg'
import "./modal.css";
import { Modal } from "react-responsive-modal";
import parse from 'html-react-parser';
function Portfolio({data}) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <section id='portfolio'>
      <h2>Web Development Projects</h2>
      <div className="container portfolio__container">
      {
        data.map((item)=>(
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <div className="portfolio__item-btn">
              <a href={item.github} target='_blank' rel='noopener noreferrer' className='btn rounded'>
                <AiFillGithub className='portfolio__item-icon'/>
              </a>
              <a href={item.live_demo} className='btn rounded' target='_blank' rel='noopener noreferrer'>
                <AiFillEye className='portfolio__item-icon'/>
              </a>
              <button onClick={onOpenModal} className='btn rounded btn-primary'><CgMoreVertical className='portfolio__item-icon'/></button>
              <Modal
               overlayAnimationIn
               open={open} onClose={onCloseModal}>
                    
                <div className="modal__container">
                  <img src={item.image} alt={item.title} />

                  <div className="modal__info">
                    <h2>{item.title}</h2>
                    <p>
                      {item.about}
                    </p>

                    <h2>Features</h2>
                    <ul className='features__list'>
                        {parse(item.features)}
                    </ul>

                    <h2>Technology Used</h2>
                    <ul className='features__list'>
                        {parse(item.tech)}
                    </ul>
                    <div className="portfolio__item-btn">
                      <a href={item.github} target='_blank' rel='noopener noreferrer' className='btn'>
                        Source Code
                      </a>
                      <a href={item.live_demo} className='btn' target='_blank' rel='noopener noreferrer'>
                        Live Demo
                      </a>
                    </div>
                  </div>
                
                </div>
              </Modal>
            </div>
          </article>
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio