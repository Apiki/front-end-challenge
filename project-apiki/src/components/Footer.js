import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/css/footer.css';
import iFacebook from '../layout/images/i-facebook.png';
import iLinkedin from '../layout/images/i-linkedin.png';
import iInstagram from '../layout/images/i-instagram.png';
import iTwitter from '../layout/images/i-twitter.png';
import iYoutube from '../layout/images/i-youtube.png';
import iGithub from '../layout/images/i-github.png';
import iRss from '../layout/images/i-rss.png';

const linksPage = () => (
  <ul>
    <li><Link to="/" className="font-ibm-plex">Sobre</Link></li>
    <li><Link to="/" className="font-ibm-plex">Newsletter</Link></li>
    <li><Link to="/" className="font-ibm-plex">Desenvolvimento WordPress</Link></li>
    <li><Link to="/" className="font-ibm-plex">Segurança para WordPress</Link></li>
    <li><Link to="/" className="font-ibm-plex">WordPress Mobile</Link></li>
    <li><Link to="/" className="font-ibm-plex">Infra para WordPress</Link></li>
    <li><Link to="/" className="font-ibm-plex">WordPress SEO</Link></li>
    <li><Link to="/" className="font-ibm-plex">WordPress Performance</Link></li>
    <li><Link to="/" className="font-ibm-plex">E-commerce</Link></li>
  </ul>
);

const socialNetworksIcons = () => (
  <ul>
    <li><a href=""><img src={iFacebook} /></a></li>
    <li><a href=""><img src={iLinkedin} /></a></li>
    <li><a href=""><img src={iInstagram} /></a></li>
    <li><a href=""><img src={iTwitter} /></a></li>
    <li><a href=""><img src={iYoutube} /></a></li>
    <li><a href=""><img src={iGithub} /></a></li>
    <li><a href=""><img src={iRss} /></a></li>
  </ul>
);

const copyRight = () => (
  <div className="copyright-container">
    <p className="copyright-text">&copy; 2020 Apiki</p>
  </div>
)

const Footer = () => {

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-texts-container">
          <div className="footer-texts-about">
            <h3 className="font-ibm-plex">Sobre a Apiki</h3>
            <p className="font-ibm-plex">
              Empresa especializada em WordPress com três unidades de negócios. Design e Desenvolvimento; Infra e Hospedagem; Suporte e manutenção. Em resumo, só fazemos uma coisa em WordPress: tudo.
            </p>
          </div>
          <hr/>
          <div className="footer-texts-social-networks">
            {socialNetworksIcons()}
          </div>
          <hr/>
          <div className="footer-texts-links-page">
            <h3 className="font-ibm-plex">Páginas do Blog</h3>
            {linksPage()}
          </div>
        </div>
        {copyRight()}
      </footer>
    </div>
  );
}

export default Footer;
