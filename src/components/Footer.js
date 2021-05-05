import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
  render() {
    return(
      <nav className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">Apiki</h1>
            <p>Desafio técnico de Front-End para o processo seletivo da Apiki,.</p>
          </div>
          <div className="footer-section links">
            <h1>João Rodrigues</h1>
            <ul>
              <li><a href='' rel='noreferrer' target='_blank'>LinkedIn</a></li>
              <li><a href='' rel='noreferrer' target='_blank'>Github</a></li>
              <li><a href='' rel='noreferrer' target='_blank'>WhatsApp</a></li>
              <li><a href='' rel='noreferrer' target='_blank'>E-mail</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          João Rodrigues - 2021 - candidato Apiki
        </div>
      </nav>
    )
  }
};

export default Footer;