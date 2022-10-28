import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      {/* <h3 className='title'>Fale conosco</h3> */}
      <h3 className='title'>
        Quaisquer dúvidas correlação aos planos, rede de cobertura, preços e tudo mais deixe sua mensagem e email e entraremos em contato! :)
      </h3>
      <h2>Entre em contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>riocarevida@gmail.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Envie uma mensagem</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Seu email completo"
            name="user_email"
            required
          />
          <textarea
            placeholder="Deixe sua mensagem"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envie mensagem 
          </button>
          {message && <span>Obrigado, iremos responder em breve ! :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
