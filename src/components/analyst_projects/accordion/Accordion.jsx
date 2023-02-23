
import React, { useState } from 'react';
import { BiCaretDownCircle,BiCaretUpCircle } from 'react-icons/bi';
import './style.css'
import parse from 'html-react-parser';
const Accordion = ({ title,notebook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ?
         <BiCaretUpCircle className='dropdown__icon'/> 
         :
         <BiCaretDownCircle className='dropdown__icon'/>}</span>
      </div>
      {isOpen && (
        <div className="accordion-body">
          {parse(notebook)}
        </div>
      )}
    </div>
  );
};

export default Accordion;
