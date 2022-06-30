import React from "react";
import './Footer.css';
import { facebook, instagram, twitter, github, linkedin, youtube } from '../imgs/index';

function footer() {
  return(
    <div className="div-footer">
      <div className="links-social-midia" >
        <a 
          className="link"
          target="_blank"
          href="https://www.facebook.com/ApikiWordPress" rel="noreferrer"
        >
          <img
            src={ facebook }
            alt="facebook-icon"
          />
          <span>FACEBOOK</span>
        </a>
        <a 
          className="link"
          target="_blank"
          href="https://www.instagram.com/apikiwordpress/" rel="noreferrer"
        >
          <img
            src={ instagram }
            alt="instagram-icon"
          />
          <span>INSTAGRAM</span>
        </a>
        <a 
          className="link"
          target="_blank"
          href="https://twitter.com/apikiWordPress" rel="noreferrer"
        >
          <img
            src={ twitter }
            alt="twitter-icon"
          />
          <span>TWITTER</span>
        </a>
        <a 
          className="link"
          target="_blank"
          href="https://www.linkedin.com/company/apiki" rel="noreferrer"
        >
          <img
            src={ linkedin }
            alt="linkedin-icon"
          />
          <span>LINKEDIN</span>
        </a>
        <a 
          className="link"
          target="_blank"
          href="https://github.com/Apiki" rel="noreferrer"
        >
          <img
            src={ github }
            alt="github-icon"
          />
          <span>GITHUB</span>
        </a>
        <a 
          className="link"
          target="_blank"
          href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA" rel="noreferrer"
        >
          <img
            src={ youtube }
            alt="youtube-icon"
          />
          <span>YOUTUBE</span>
        </a>
      </div>
      <h5>© 2020 Apiki - Empresa especializada em WordPress.</h5>
    </div>
  );
};

export default footer;