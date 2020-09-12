import React, { useState, useEffect } from 'react';
import '../layout/css/header.css';
import apikiIcon from '../layout/images/marca-apiki.png';

const menuHamburgerBtn = (setNavDisplay, navDisplay, setNavStyle) => {
  return (
    <button
      className="menu-hamburger-btn"
      onClick={() => {
        if (!navDisplay) {
          setNavStyle({ animationName: 'displayNav', left: '-100%' });
          setNavDisplay(!navDisplay);
        } else {
          setNavStyle({ animationName: 'coverNav', left: '0%' });
          setTimeout(() => {
            setNavDisplay(!navDisplay);
          }, 400);
        }
      }}
    >
      <div className="menu-line-1"></div>
      <div className="menu-line-2"></div>
      <div className="menu-line-3"></div>
    </button>
  );
}

const NavBar = (navStyle) => {
  const navLinks = ['DESENVOLVIMENTO', 'INFRA', 'MOBILE', 'PERFORMANCE', 'SEGURANÇA', 'SEO', 'E-COMMERCE'];
  return (
    <nav
      className="nav-bar"
      style={navStyle}
    >
      <ul className="nav-bar-list-container font-ibm-plex">
        {navLinks.map((link) =>
          <li key={link}><a href="#">{link}</a></li>
        )}
      </ul>
    </nav>
  )
}

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(true);
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    if (window.innerWidth < 1201) {
      setNavDisplay(false)
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1201) {
      setNavDisplay(true)
    } else {
      setNavDisplay(false)
    }
  });
  return (
    <header>
      <div className="header-container">
        {menuHamburgerBtn(setNavDisplay, navDisplay, setNavStyle)}
        <img className="apiki-icon" src={apikiIcon} alt="ícone Apiki" />
        {navDisplay && NavBar(navStyle)}
        <button className="btn-default font-ibm-plex btn-register">CADASTRAR E-MAIL</button>
      </div>
    </header>
  );
}

export default Header;
