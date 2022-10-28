import React from 'react';
import { Pagination } from 'swiper';
import SONIA from '../../assets/sonia.jpg';
import ANTONELA from '../../assets/antonela.jpg';
import FABIANA from '../../assets/fabiana.jpg';
import MARIA from '../../assets/maria.jpg';
import MICHELLE from '../../assets/michelle.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/uzairali19/',
      name: 'Fabiana Jesus',
      role: 'Agente Financeiro',
      test: 'Eu agradeço a Rio Care Saúde , porque no momento que mais precisamos eu e meu filho o Jefferson me ajudou muito. Eu me sinto muito feliz e aliviada porque tenho o plano de saúde, já faz quatro anos que tenho e sempre contei com ele. Estou muito satisfeita e o Jefferon sempre esteve disposto a satisfazer o cliente.',
      image: FABIANA,
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/yishak-wesego/',
      name: 'Maria Luiza',
      role: 'Aposentada',
      test: "Só tenho elogios à Rio Care Vida, pois sempre me atendeu com muita rapidez, eficiência, proatividade e de forma prática, simples e correta quanto à apresentação das propostas de plano de saúde para minha família...",
      image: MARIA,
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/akuu-khan/',
      name: 'Michele Castro',
      role: 'Professora',
      test: 'Foi a melhor escolha na hora de contratar o melhor plano para mim e para os meus dois filhos pois o Jefferson esclareceu todas minhas dúvidas e indicando o plano com a melhor cobertura perto da minha casa em Campo Grande, muito satisfeita de verdade!',
      image: MICHELLE ,
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/isaicespedes/',
      name: 'Antonella Bonino',
      role: 'Fotógrafa',
      test: "Sempre que precisamos fomos bem atendidos pelo Plano e por nosso consultor, que sempre se colocou à disposição para esclarecimentos. Isso deu uma segurança a mais, pois sabemos que podemos contar com um profissional para elucidar as dúvidas. A questão do vínculo com a Unimed é ótima, pois tivemos acesso a profissionais experientes e qualificados que fizeram toda a diferença em nossos tratamentos.",
      image: ANTONELA ,
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Sônia Maria ',
      role: 'Aposentada',
      test: "Só tenho à agradecer ao Jefferson corretor pois estava precisando de um plano para as minnhas nescessidades já que cheguei na melhor idade e com ela chegaram os problemas de pressão e outros demais e ele sempre me deu total atenção para escolher um plano que coube no meu bolso e que me atende em todas as nescessidades!",
      image: SONIA ,
    },
  ];
  return (
    <section id="testmonials">
      <h5 className='title'>Depoimentos dos nossos clientes</h5>
      <h2>Depoimentos</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
              <img src={test.image} alt={test.name}/>
          </div>
          <h3 className='client__name'>{test.name}</h3>
          <h4 className="client__review">{test.test}</h4>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials