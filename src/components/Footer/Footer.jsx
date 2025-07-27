/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__logo']}>
          <a href="https://apiki.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://blog.apiki.com/wp-content/uploads/sites/2/2024/07/footer_logo.svg"
              alt="Apiki"
            />
          </a>
        </div>
        <div className={styles['footer__columns']}>
          <ul className={styles['footer__column']}>
            <li><strong>
              <p>Nossos Serviços</p>
            </strong></li>
            <Link to="https://apiki.com/hospedagem-wordpress-wp-host">
              <li>Hospedagem</li>
            </Link>
            <Link to="https://apiki.com/desenvolvimento-wordpress-wp-care/">
              <li>Desenvolvimento</li>
            </Link>
            <Link to="https://apiki.com/suporte-wordpress-wp-care/">
              <li>Suporte</li>
            </Link>
            <Link to="https://apiki.com/layout-wordpress-wp-care/">
              <li>UX/UI</li>
            </Link>
          </ul>
          <ul className={styles['footer__column']}>
            <li><strong>
              <p>Conteúdo</p>
            </strong></li>
            <Link to="https://apiki.com/materiais-wordpress">
              <li>Materiais Gratuitos</li>
            </Link>
            <Link to="/">
              <li>Web – Hooks</li>
            </Link>
            <Link to="/">
              <li>Templates</li>
            </Link>
          </ul>
          <ul className={styles['footer__column']}>
            <li><strong>
              <p>Redes Sociais</p>
            </strong></li>
            <Link to="https://www.instagram.com/apikiwordpress/">
              <li>Instagram</li>
            </Link>
            <Link to="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA">
              <li>Youtube</li>
            </Link>
            <Link to="https://www.linkedin.com/company/apiki/mycompany/">
              <li>Linkedin</li>
            </Link>
          </ul>
          <ul className={styles['footer__column']}>
            <li><strong>
              <p>Apiki</p>
            </strong></li>
            <Link to="https://apiki.com/empresa-especializada-em-wordpress/">
              <li>Sobre Nós</li>
            </Link>
            <Link to="https://apiki.com/atendimento/">
              <li>Contato</li>
            </Link>
            <Link to="https://carreira.apiki.com/">
              <li>Vagas</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles['footer__separator']}></div>
      <p className={styles['footer__text']}>
        Acesse <a href="https://apiki.com" target="_blank" rel="noopener noreferrer">apiki.com</a>
      </p>
    </footer>
  );
}
