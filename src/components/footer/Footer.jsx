import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">RIO CARE VIDA</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre Nós</a></li>
        <li><a href="#experience">Tabelas</a></li>
        <li><a href="#portfolio">Planos</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://github.com/Meri-MG" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://api.whatsapp.com/send/?phone=5522999252311&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" ><FaWhatsapp /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rio Care Vida. Todos os direitos reservados</small>
      </div>
    </footer>
  )
}

export default Footer