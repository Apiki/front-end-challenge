import React from 'react'

import facebookIcon from '../imgs/icons/facebook.svg'
import instagramIcon from '../imgs/icons/instagram.svg'
import linkedinIcon from '../imgs/icons/linkedin.svg'
import youtubeIcon from '../imgs/icons/youtube.svg'

import '../css/Menu.css'

function Menu () {
  return (
    <div id="menu">
      <ul id="menu-content-links">
        <li>
          <a href="https://blog.apiki.com/web-stories/">Web Stories</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/infra/">Infra</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/mobile/">Mobile</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/performance/">Performance</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/seguranca/">Segurança</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/seo/">SEO</a>
        </li>
        <li>
          <a href="https://blog.apiki.com/e-commerce/">E-commerce</a>
        </li>
      </ul>

      <ul id="menu-social-links">
        <li>
          <a
            href="https://www.facebook.com/ApikiWordPress"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/apikiwordpress/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/apiki/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtubeIcon} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
