import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
// import ME from '../../assets/me3.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5 className='title'>Simule gratuitamente</h5>
      <h2>Planos que cabem no seu bolso </h2>
      <div className="container about__container">
        {/* <div className="about__me"> */}
          {/* <div className="about__me-image">
            <img src={ME} alt="me" />
          </div> */}
        {/* </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certificado por Master Saúde</h5>
              <small>5 ANOS</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Clientes Satisfeitos</h5>
              <small>+ 100 clientes satisfeitos</small>
            </article>
          </div>
          <p >Atendimento Online e Presencial, cotação na hora consultoria com corretores especializados. Atendimento imediato, online ou presencial, conforme sua preferência, estamos de plantão.</p>
          <a href="#contact" className="btn">Deixe aqui sua dúvida</a>
        </div>
      </div>
    </section>
  )
}

export default Intro