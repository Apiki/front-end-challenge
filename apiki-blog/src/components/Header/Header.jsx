import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo_container flex">
        {/* this full Link block send to the home page */}
        <Link to={'/'}>  
          <img
            className="header__logo-img"
            src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552.png"
            alt="apiki logo"
          ></img>
        </Link>
      </div >
    </div >
  );
};

export default Header;
