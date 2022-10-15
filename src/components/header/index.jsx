import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/marca-apiki-blog.webp';
export const Header = () => {
  return (
    <>
      <header className="header text-center">
        <div className="header__topbar">
          <div className="header__logo">
            <Link to="/">
              <img alt="apiki" src={Logo} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
