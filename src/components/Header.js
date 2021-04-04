import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';
import apiki_logo from '../img/apiki_logo.png';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="logo">
        <Link to="/">
          <img className="logo-img" src={apiki_logo} alt="" />
        </Link>
        </div>
      </header>
    )
  }
};

export default Header;
