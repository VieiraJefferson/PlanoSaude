import React from 'react';
import IMG1 from '../../assets/whats1.jpeg';
import IMG2 from '../../assets/whats9.jpeg';
import IMG3 from '../../assets/whats3.jpeg';
import IMG4 from '../../assets/whats10.jpeg';
import IMG5 from '../../assets/whats8.jpeg';
import IMG6 from '../../assets/whats7.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
 
      img: IMG1,
 
    },
    {
      id: 2,

      img: IMG4,

    },
    {
      id: 3,
   
      img: IMG2,

    },
    {
      id: 4,

      img: IMG3,
 
    },
    {
      id: 5,

      img: IMG5,

    },
    {
      id: 6,
   
      img: IMG6,
  
    },
  ];

  return (
    <section id="portfolio">
      <h5 className='title'>Operadoras que trabalhamos</h5>
      <h2>TABELAS</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
    
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
