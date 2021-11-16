import React from 'react'

import facebookIcon from '../imgs/icons/facebook.svg'
import instagramIcon from '../imgs/icons/instagram.svg'
import linkedinIcon from '../imgs/icons/linkedin.svg'
import youtubeIcon from '../imgs/icons/youtube.svg'

function SocialLinks () {
  return (
    <ul className="footer-social__links">
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
  )
}

export default SocialLinks
