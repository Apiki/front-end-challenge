import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1 className="header__title">Apiki Dev Blog</h1>
          <span className="header__subtitle">Development Insights</span>
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__nav-link">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}; 