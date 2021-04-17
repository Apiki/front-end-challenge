import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";

import logo from "../images/logo-apiki.png";
import "./css/Header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { backToHomePage } = useContext(DataContext);
  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="svg-menu" />
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <Link name="home" onClick={() => backToHomePage()} to="/">
            <li>Home</li>
          </Link>
          <li>
            <a
              name="sobre"
              target="_blank"
              rel="noreferrer"
              href="https://apiki.com/empresa-especializada-em-wordpress/"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              name="contato"
              target="_blank"
              rel="noreferrer"
              href="https://apiki.com/fale-com-gente/"
            >
              Contato
            </a>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="svg-close" />
          </li>
        </ul>
      </nav>
      <Link data-testid="logo" onClick={() => backToHomePage()} to="/">
        <img src={logo} alt="logotipo-apki" />
      </Link>
    </header>
  );
}

export default Header;
