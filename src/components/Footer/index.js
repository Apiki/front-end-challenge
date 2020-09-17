import React from 'react';
import './stylesheet.css';
import LogoApiki from '../../assets/logoapiki.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const Footer = () => {
  return (
    <footer>
        <img className="logo-footer" src={LogoApiki} alt="LogoApiki"></img>

        <div className="adress-footer">
          <h4>Governador Valadares - MG</h4>
          <p>Praça Doutor João Paulo Pinheiro</p>
          <p>100 - Centro. CEP: 35010-330</p>
          <p>+55 33 3278-1002</p>
        </div>


        <div className="icons-footer">
          <FacebookIcon id="color"/>
          <LinkedInIcon id="color"/>
          <InstagramIcon id="color"/>
          <TwitterIcon id="color"/>
          <YouTubeIcon id="color"/>
          <GitHubIcon id="color"/>
          <RssFeedIcon id="color"/>
        </div>
  
    </footer>
  );
}

export default Footer;
