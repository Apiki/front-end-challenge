import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../marca-apiki-blog.png';
import iconBack from '../icons/back.png';
export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-side">
          <Link to="/">
            <img className="icon-back" src={iconBack} alt="voltar" />
          </Link>
        </div>
        <Link>
          <img src={logo} alt="Blog sobre WordPress" className="header-item" />
        </Link>
        <div className="header-side"></div>
      </div>
    </header>
  );
}
