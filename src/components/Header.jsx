import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
  const { isInLandingPage } = useContext(DataContext);

  return (
    <header>
      { isInLandingPage ? null : (<Link to="/" className="header-link" />) }
      <img className="header-logo" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
