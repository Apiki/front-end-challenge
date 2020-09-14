import React from 'react';
import '../layout/css/footer.css';

const linksPage = () => (
  <ul>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Newsletter</a></li>
    <li><a href="#">Desenvolvimento WordPress</a></li>
    <li><a href="#">Segurança para WordPress</a></li>
    <li><a href="#">WordPress Mobile</a></li>
    <li><a href="#">Infra para WordPress</a></li>
    <li><a href="#">WordPress SEO</a></li>
    <li><a href="#">WordPress Performance</a></li>
    <li><a href="#">E-commerce</a></li>
  </ul>
)

const Footer = () => {

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-texts-container">
          <div className="footer-texts-about">
            <h3>Sobre a Apiki</h3>
            <p>
              Empresa especializada em WordPress com três unidades de negócios. Design e Desenvolvimento; Infra e Hospedagem; Suporte e manutenção. Em resumo, só fazemos uma coisa em WordPress: tudo.
            </p>
          </div>
          <div className="footer-texts-social-networks">
            
          </div>
          <div className="footer-texts-links-page">
            <h3>Páginas do Blog</h3>
            {linksPage()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
