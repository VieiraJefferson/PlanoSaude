import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import ASSIM from '../../assets/assim.png';
import UNIMED from '../../assets/unimed.png';
import BRADESCO from '../../assets/bradesco.png';
import NOTREDAME from '../../assets/notredame.png';
import SULAMERICA from '../../assets/sulamerica.png';
import LEVE from '../../assets/leve.png';
import GOLDEN from '../../assets/golden.png';
import CEMERU from '../../assets/cemeru.png';

const Experience = () => {
  return (
    <section id="experience">
      <h5 className='title'>Planos de Saúde</h5>
      <h2>Tabela de preços pessoa física</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
               <img className='imagem-planos' src={ASSIM} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={UNIMED} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={SULAMERICA} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={GOLDEN} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={NOTREDAME} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={LEVE} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={CEMERU} alt='logo assim '/> 
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img className='imagem-planos' src={BRADESCO} alt='logo assim '/> 
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
