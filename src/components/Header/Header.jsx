import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LogoApikiImg from '../../assets/images/logo-apiki.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <Link to="/" className={styles['header__logo']}>
           <img src={LogoApikiImg} alt="Blog Apiki para Devs"/>
        </Link>

        <Link to="https://apiki.com" className={styles['header__text']}>
          Acesse <span>Apiki.com</span>
        </Link>
      </div>
    </header>
  );
}