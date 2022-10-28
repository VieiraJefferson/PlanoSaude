import React from 'react';
import './header.css';
import {FaWhatsapp} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';


const Header = () => {
  return (
    <header className='header'>
        <div className='nav-bar'>
            <div className='logo'>
            <div className='title-rio'>
                <h2>RIOCARE</h2>
                <h3>saúde</h3>
                </div>
            
      
        </div>
          
            <div className='button'>
                <a href="https://api.whatsapp.com/send/?phone=5522999252311&text&type=phone_number&app_absent=0"><FaWhatsapp className='icon1'/></a>
                <a href="https://api.whatsapp.com/send/?phone=5522999252311&text&type=phone_number&app_absent=0"><FaFacebookSquare className='icon2'/></a>
            </div>
        </div>
        <h1 className='subtitle'>Economize até 40% no Seu Plano de Saúde!</h1>
        <h5 className='subtitle-small'>* Plano adesão e empresarial de acordo com o plano e número de vidas</h5>
    </header>
  );
};

export default Header;
