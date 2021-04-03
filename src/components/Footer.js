import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
  render() {
    return(
      <nav className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">Apiki</h1>
            <p>Este é um desafio técnico de Front-End para o processo seletivo da Apiki, uma empresa especializada em WordPress que tem o objetivo de ser referência mundial na tecnologia.</p>
          </div>
          <div className="footer-section links">
            <h1>Anderson S. Santana</h1>
            <ul>
              <li><a href='https://www.linkedin.com/in/andersonssantana' rel='noreferrer' target='_blank'>LinkedIn</a></li>
              <li><a href='https://github.com/andersonssantana' rel='noreferrer' target='_blank'>Github</a></li>
              <li><a href='https://api.whatsapp.com/send?phone=5511977656819' rel='noreferrer' target='_blank'>WhatsApp</a></li>
              <li><a href='mailto:anderssantana@outlook.com' rel='noreferrer' target='_blank'>E-mail</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Anderson S. Santana - 2021 - candidato Apiki
        </div>
      </nav>
    )
  }
};

export default Footer;
