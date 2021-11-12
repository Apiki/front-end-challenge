import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import './Footer.css';

const Footer = () => (
  <footer>
    <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
      <img src={facebook} alt="facebook" />
    </a>
    <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
      <img src={instagram} alt="instagram" />
    </a>
    <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
      <img src={linkedin} alt="linkedin" />
    </a>
  </footer>
);

export default Footer;
