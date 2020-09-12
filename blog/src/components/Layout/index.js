import React from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

const Layout = (props) => (
  <header className="header-container">
    <nav className="nav-bar">
        <h1><Link to="/">Apiki Blog</Link></h1>
    </nav>
    {props.children}
  </header>
);

export default Layout;
