import React from 'react';
import './stylesheet.css';
import LogoApiki from '../../assets/logoapiki.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fade-in-top">
      <container>
        <img src={LogoApiki} alt="Apiki Logo"></img>
        <div>
          <Link id="Nav" to="/">Home</Link>
          <Link id="Nav" to="#">Cadastrar Email</Link>
        </div>
      </container>
    </header>
  );
}

export default Header;
