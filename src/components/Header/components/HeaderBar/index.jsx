import './index.css'

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaSignal,
  FaSearch
} from "react-icons/fa"

import ApikiLogo from "../../../../assets/apiki-logo.png"

const index = () => {
  return (
    <div className="header__bar__container">
      <div className="header__bar__wrapper" >
        <header className="header__bar">
          <div className="header__bar__logo">
            <img src={ApikiLogo} alt="Apiki Logo" className="header__bar__logo__img" />
            <hr />
            <span>DEVBLOG</span>
          </div>
          <div className="header__bar__search">
            <input type="text" name="searchPost" id="searchPost" placeholder="Search..." />
            <label htmlFor="searchPost">
              <FaSearch className="header__bar__search__icon" />
            </label>
          </div>
          <div className="header__bar_social__media">
            <a href="https://www.facebook.com/ApikiWordPress">
              <FaFacebookF className="header__bar_social__media__icons" />
            </a>
            <a href="https://www.linkedin.com/company/apiki/">
              <FaLinkedinIn className="header__bar_social__media__icons" />
            </a>
            <a href="https://www.instagram.com/apikiwordpress/">
              <FaInstagram className="header__bar_social__media__icons" />
            </a>
            <a href="https://twitter.com/apikiWordPress">
              <FaTwitter className="header__bar_social__media__icons" />
            </a>
            <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA">
              <FaYoutube className="header__bar_social__media__icons" />
            </a>
            <a href="https://github.com/Apiki">
              <FaGithub className="header__bar_social__media__icons" />
            </a>
            <a href="https://blog.apiki.com/feed/">
              <FaSignal className="header__bar_social__media__icons" />
            </a>
          </div>
        </header>
      </div>
    </div>
  )
}

export default index;