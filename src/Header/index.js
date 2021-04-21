import React from 'react';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        {/* <img src='#' alt='Logo' className='header__logo' /> */}
        <span className='header__logo'>Logo</span>
        <nav className='header__menu'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <a href='#' className='header__menu-link'>
                Home
              </a>
            </li>
            <li className='header__menu-item'>
              <a href='#' className='header__menu-link'>
                Blog
              </a>
            </li>
            <li className='header__menu-item'>
              <a href='#' className='header__menu-link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
