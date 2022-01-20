import React from 'react';
import LogoApiki from '../../assets/logoapiki.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="nav-bar">
      <Link to={'/'}>
        <img src={LogoApiki} alt="Apiki"></img>
        
      </Link>
      <input
        type="text"
        placeholder="Pesquisar"
        />
    </header>
  );
}

export default Header;
