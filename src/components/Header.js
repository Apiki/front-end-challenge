import React from 'react';
import apikiLogo from '../style/pictures/apiki-blog.png';
import searchIcon from '../style/pictures/search-icon.png';
import twitterLogo from '../style/pictures/twitter.png';
import linkedinLogo from '../style/pictures/linkedin.png';
import facebookLogo from '../style/pictures/fb.png';
import youtubeLogo from '../style/pictures/youtube.png';
// import githubLogo from '../style/pictures/git.png';


class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      page: "",
    }
  }

  render() {
   
    return <div className="header-container">
      <a href="/">
        <img className="apiki-logo" src={apikiLogo} alt="apiki logo" />
      </a>
      <div className="search-bar-container">
        <input
        type="text"
        className="search-bar"
        placeholder="O que você está procurando?" />
        <button >
          <img src={searchIcon} alt="search icon" />
        </button>
        </div>
      <div className="social-media-container">
        <a href="https://twitter.com/apikiWordPress" target="_blank" rel="noreferrer">
          <img src={twitterLogo} alt="Twitter logo" />
        </a>
        <a href="https://www.facebook.com/ApikiWordPress" target="_blank" rel="noreferrer">
          <img src={facebookLogo} alt="Facebook logo" />
        </a>
        <a href="https://www.linkedin.com/company/apiki" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="Linkedin logo" />
        </a>
        <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA" target="_blank" rel="noreferrer">
          <img src={youtubeLogo} alt="Youtube logo" />
        </a>
      </div>
      </div>
  }
}

export default Header;
