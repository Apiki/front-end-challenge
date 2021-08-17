import React from 'react';
import apikiMiniLogo from '../style/pictures/apiki-mini-logo.png'
import linkedinLogo from '../style/pictures/linkedin.png'
import emailIcon from '../style/pictures/email.png'
import githubLogo from '../style/pictures/git.png'
import whatsappLogo from '../style/pictures/whatsapp.png'



class Footer extends React.Component {
  constructor() {
    super()

    this.state = {
      page: "",
    }
  }

  render() {
   
    return <div className="footer-container">
        <div className="about">
          <p>Esta página tem seu conteúdo fornecdio pela API do blog da Apiki e foi criada para o desafio de front-end.</p>
          <p>A Apiki é a primeira empresa do Brasil especializada em WordPress, desenvolvendo negócios como sites, blogs e lojas virtuais no mundo inteiro. </p>
        </div>
        <img src={apikiMiniLogo} alt="apiki logo" />
        <div className="signature-container">
          <div className="signature">
            <p>Criado por</p>
            <h3>Alana Monteiro</h3>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/alanamonteiro/" target="_blank" rel="noreferrer">
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
            <a href="mailto: lanaah.15@gmail.com" target="_blank" rel="noreferrer">
              <img src={emailIcon} alt="email icon" />
              </a>
              <a href="https://wa.me/5581989625885" target="_blank" rel="noreferrer">
              <img src={whatsappLogo} alt="Whatsapp logo" />
              </a>
              <a href="https://github.com/alanamonteiro" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="Github logo" />
              </a>
          </div>
        </div>
      </div>
  }
}

export default Footer;

