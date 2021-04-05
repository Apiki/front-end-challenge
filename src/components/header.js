import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoApiki from "../images/logo-apiki.png";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

class Header extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="container-button">
          <Link to="/">
            <p className="home-button">Home</p>
          </Link>
        </div>

        <div className="container-logo">
          <a href="https://apiki.com/" target="blank">
            <img className="logo-apiki" src={logoApiki} alt="Apiki logo" />
          </a>
        </div>

        <div className="container-social-media">
          <a href="https://www.facebook.com/ApikiWordPress" target="blank">
            <img className="social-icons" src={facebook} alt="Facebook" />
          </a>

          <a href="https://twitter.com/apikiWordPress" target="blank">
            <img className="social-icons" src={twitter} alt="Twitter" />
          </a>

          <a href="https://www.linkedin.com/company/apiki/" target="blank">
            <img className="social-icons" src={linkedin} alt="LinkedIn" />
          </a>

          <a href="https://www.instagram.com/apikiwordpress/" target="blank">
            <img className="social-icons" src={instagram} alt="Instagram" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
            target="blank"
          >
            <img className="social-icons" src={youtube} alt="YouTube" />
          </a>

          <a href="https://github.com/Apiki" target="blank">
            <img className="social-icons" src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
