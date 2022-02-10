import "./index.css"

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

import ApikiLogo from "../../assets/apiki-logo.png"

const index = () => {
  return (
    <div className="header__container">
      <div className="header__wrapper" >
        <header className="header">
          <div className="header__logo">
            <img src={ApikiLogo} alt="Apiki Logo" className="header__logo__img" />
            <hr />
            <span>DEVBLOG</span>
          </div>
          <div className="header__search__bar">
            <input type="text" name="searchPost" id="searchPost" placeholder="Search..." />
            <label htmlFor="searchPost">
              <FaSearch className="header__search__bar__icon" />
            </label>
          </div>
          <div className="header_social__media">
            <a href="https://www.facebook.com/ApikiWordPress">
              <FaFacebookF className="header_social__media__icons" />
            </a>
            <a href="https://www.linkedin.com/company/apiki/">
              <FaLinkedinIn className="header_social__media__icons" />
            </a>
            <a href="https://www.instagram.com/apikiwordpress/">
              <FaInstagram className="header_social__media__icons" />
            </a>
            <a href="https://twitter.com/apikiWordPress">
              <FaTwitter className="header_social__media__icons" />
            </a>
            <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA">
              <FaYoutube className="header_social__media__icons" />
            </a>
            <a href="https://github.com/Apiki">
              <FaGithub className="header_social__media__icons" />
            </a>
            <a href="https://blog.apiki.com/feed/">
              <FaSignal className="header_social__media__icons" />
            </a>
          </div>
        </header>
      </div>
    </div>
  )
}

export default index
