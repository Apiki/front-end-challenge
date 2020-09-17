import React from 'react';
import './stylesheet.css';
import LogoApiki from '../../assets/logoapiki.png';


const Header = () => {
  return (
    <header className="fade-in-top">
      <img src={LogoApiki} alt="Apiki Logo"></img>
      <a className="btn-hamburguer" href="/">
        <div></div>
        <div></div>
        <div></div>
      </a>
    </header>
  );
}

export default Header;
