import React from 'react';
import '../style/Footer.css';
import face from '../style/icons/facebook.png'
import instagram from '../style/icons/instagram.png'
import linkedin from '../style/icons/linkedin.png'
import twitter from '../style/icons/twitter.png'
import youtube from '../style/icons/youtube.png'
import github from '../style/icons/github.png'


const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <h3>Visite Nossas Redes Socias!</h3>
        <a href="https://www.facebook.com/ApikiWordPress" target="_blanck">
          <img src={face} alt="Logo face redes sociais" />
        </a>
        <a href="https://www.instagram.com/apikiwordpress/" target="_blanck">
          <img src={instagram} alt="Logo insta redes sociais" />
        </a>
        <a href="https://www.linkedin.com/company/apiki" target="_blanck">
          <img src={linkedin} alt="Logo linkedin redes sociais" />
        </a>
        <a href="https://twitter.com/apikiWordPress" target="_blanck">
          <img src={twitter} alt="Logo twiter redes sociais" />
        </a>
        <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA" target="_blanck">
          <img src={youtube} alt="Logo youtube redes sociais" />
        </a>
        <a href="https://github.com/Apiki" target="_blanck">
          <img src={github} alt="Logo git redes sociais" />
        </a>
      </div>
    </footer >
  )
}

export default Footer;
