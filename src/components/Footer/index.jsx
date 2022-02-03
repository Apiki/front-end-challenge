import React from "react";
import "./style/style.css";

const Footer = (props) => {
  return (
    <div id="footer" className={props.single ? "single" : null}>
      <h2>New Dev</h2>
      <ul>
        <li>
          <a href="">Legal</a>
        </li>
        <li>
          <a href="">Postagens Antigas</a>
        </li>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Trabalhe Conosco</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
