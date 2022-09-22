import React from 'react';
import Logo from '../images/logo-apiki.png';

function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-area">
          <img src={Logo} width="130" height="auto" alt="Logomarca da APIKI" />
          <p>
            Apiki é a primeira empresa especializada em WordPress do Brasil. Com mais de 13 anos
            de existência, fazemos tudo que seu projeto em WordPress precisa para alcançar
            o sucesso.
          </p>
        </div>
        <div className="footer-area">
          <h3>Categorias</h3>
          <nav className="footer-nav">
            <a href="#home" className="footer-nav-link">Início</a>
            <a href="#home" className="footer-nav-link">Web Stories</a>
            <a href="#home" className="footer-nav-link">Desenvolvimento</a>
            <a href="#home" className="footer-nav-link">Infra</a>
            <a href="#home" className="footer-nav-link">Mobile</a>
            <a href="#home" className="footer-nav-link">Performance</a>
            <a href="#home" className="footer-nav-link">SEO</a>
            <a href="#home" className="footer-nav-link">E-commerce</a>
          </nav>
        </div>
        <div className="footer-area">
          <h3>Siga-nos!</h3>
          <nav className="footer-nav">
            <a href="#home" className="footer-nav-link">Facebook</a>
            <a href="#home" className="footer-nav-link">Instagram</a>
            <a href="#home" className="footer-nav-link">Twitter</a>
            <a href="#home" className="footer-nav-link">Linkedin</a>
            <a href="#home" className="footer-nav-link">Youtube</a>
            <a href="#home" className="footer-nav-link">Github</a>
            <a href="#home" className="footer-nav-link">Feed</a>
          </nav>
        </div>
      </div>
      <p className="copyright">
        Feito com 🧡 por
        <a href="https://github.com/andreluialves/" title="copyright" target="_blank" rel="noreferrer"> André Alves</a>
      </p>
    </footer>
  );
}

export default Footer;
