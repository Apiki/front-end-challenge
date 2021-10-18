import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import headerItems from "./headerItems";

// TODO: add key on the mapped items

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link to="/">
            <img
              src="/logo.webp"
              alt="Logo da Apiki"
              className="header__logo__img"
            />
          </Link>
        </div>

        <nav className="header__nav">
          <ul className="header__nav__list">
            {/* Loop through the items imported from headerItems and create a link */}
            {headerItems.map((item) => {
              const { itemName, isExternal, href } = item;

              return isExternal ? (
                <li key={item.itemName} className="header__nav__list__item">
                  <a
                    className="header__nav__list__item__text"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {itemName}
                  </a>
                </li>
              ) : (
                <li key={item.itemName} className="header__nav__list__item">
                  <Link className="header__nav__list__item__text" to={href}>
                    {itemName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
