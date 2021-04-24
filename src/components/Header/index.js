import React, { useState } from 'react';

import './styles.scss';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  return (
    <header className='header'>
      <div className='header__container'>
        <span className='header__logo'>Logo</span>
        <nav className={`header__menu ${!isActive ? 'active' : ''} `}>
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
        <button
          className='header__menu-button'
          onClick={() => setIsActive(!isActive)}
        ></button>
      </div>
    </header>
  );
};
