import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a className="icons"
        href="https://www.linkedin.com/in/meri-gogichashvili/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a className="icons" href="https://github.com/Meri-MG" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a className="icons"
        href="https://api.whatsapp.com/send/?phone=5522999252311&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
