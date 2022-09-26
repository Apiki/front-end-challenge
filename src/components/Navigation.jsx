import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/images";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="container navbar__container">
          <NavLink className="" to="/">
            <img src={Logo} alt="Logo apiki" />
          </NavLink>
          <div>
            <ul className="navbar__menu">
              <li className="">
                <NavLink className="navbar__link" to="/">
                  Home
                  {/* <span className="">(current)</span> */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;