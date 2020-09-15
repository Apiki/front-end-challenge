import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="b-header">
      <Link to="/">
        <i className="fas fa-home b-header__icon" />
      </Link>
    </header>
  );
};

export default Header;
