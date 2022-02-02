import React from "react";
import "./style/style.css";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">New Dev</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Campeonatos</a>
          </li>
          <li>
            <a href="/">Eventos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
