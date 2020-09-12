import React, { useState, useEffect } from 'react';
import '../layout/css/header.css';
import apikiIcon from '../layout/images/marca-apiki.png';

const menuHamburgerBtn = (setNavDisplay, navDisplay, setNavStyle, transitionMenuHambuger, setTransitionMenuHambuger) => {
  return (
    <button
      className="menu-hamburger-btn"
      onClick={() => {
        if (!navDisplay) {
          setTransitionMenuHambuger({
            lineOne: 'translate(0px, 10px) rotate(45deg)',
            lineTwo: '0',
            lineThree: 'translate(0px, -10px) rotate(-45deg)'
          });
          setNavStyle({ animationName: 'displayNav', left: '-100%' });
          setNavDisplay(!navDisplay);
        } else {
          setTransitionMenuHambuger({
            lineOne: 'translate(0px, 0px) rotate(0deg)',
            lineTwo: '1',
            lineThree: 'translate(0px, 0px) rotate(0deg)'
          });
          setNavStyle({ animationName: 'coverNav', left: '0%' });
          setTimeout(() => {
            setNavDisplay(!navDisplay);
          }, 400);
        }
      }}
    >
      <div
        className="menu-line-1"
        style={{ transform: transitionMenuHambuger.lineOne }}
      ></div>
      <div
        className="menu-line-2"
        style={{ opacity: transitionMenuHambuger.lineTwo }}
      ></div>
      <div
        className="menu-line-3"
        style={{ transform: transitionMenuHambuger.lineThree }}
      ></div>
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
  const [transitionMenuHambuger, setTransitionMenuHambuger] = useState({
    lineOne: '',
    lineTwo: '',
    lineThree: '',
  });

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
        {menuHamburgerBtn(setNavDisplay, navDisplay, setNavStyle, transitionMenuHambuger, setTransitionMenuHambuger)}
        <img className="apiki-icon" src={apikiIcon} alt="ícone Apiki" />
        {navDisplay && NavBar(navStyle)}
        <button className="btn-default font-ibm-plex btn-register">CADASTRAR E-MAIL</button>
      </div>
    </header>
  );
}

export default Header;
