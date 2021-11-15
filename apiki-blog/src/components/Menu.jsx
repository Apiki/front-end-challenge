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
          <a>Web Stories</a>
        </li>
        <li>
          <a>Desenvolvimento</a>
        </li>
        <li>
          <a>Infra</a>
        </li>
        <li>
          <a>Mobile</a>
        </li>
        <li>
          <a>Performance</a>
        </li>
        <li>
          <a>Segurança</a>
        </li>
        <li>
          <a>SEO</a>
        </li>
        <li>
          <a>E-commerce</a>
        </li>
      </ul>

      <ul id="menu-social-links">
        <li>
          <a>
            <img src={facebookIcon} />
          </a>
        </li>
        <li>
          <a>
            <img src={instagramIcon} />
          </a>
        </li>
        <li>
          <a>
            <img src={linkedinIcon} />
          </a>
        </li>
        <li>
          <a>
            <img src={youtubeIcon} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
