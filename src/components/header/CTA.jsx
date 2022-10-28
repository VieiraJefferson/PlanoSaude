import React from 'react';
import CV from '../../assets/cv_meri_gogichashvili.pdf';
import './header.css';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        SIMULE
      </a>
      <a href="#contact" className="btn btn-primary">
        CONTATO
      </a>
    </div>
  );
};

export default CTA;
