import React from 'react';
import apikiIcon from '../layout/images/marca-apiki.png';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a>DESENVOLVIMENTO</a></li>
        <li><a>INFRA</a></li>
        <li><a>MOBILE</a></li>
        <li><a>PERFORMANCE</a></li>
        <li><a>SEGURANÇA</a></li>
        <li><a>SEO</a></li>
        <li><a>E-COMMERCE</a></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header style={{backgroundColor: 'black'}}>
      <img src={apikiIcon}/>
      
    </header>
  );
}

export default Header;
