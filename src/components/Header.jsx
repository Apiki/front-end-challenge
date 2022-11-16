import logo from '../apiki-dev.png';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaGithub, FaRss } from "react-icons/fa";

export default function Header () {
  return(
    <header className='header'>
      <div className="header-container">
        <div className='header__box-left'>
          <a href='/'>
            <img src={logo} className='header__logo' alt="Apiki Dev"/>
          </a>
          <form action="" className='header-form'>
            <input type="text" placeholder='Pesquisar...' className='header__search'/>
          </form>
        </div>

        <div className='header__box-right'>
          <a href='https://www.facebook.com/ApikiWordPress' title="Facebook" target="_blank" rel="noreferrer" className='header__icon'>
            <FaFacebookF/>
          </a>
          <a href='https://www.linkedin.com/company/apiki' title="Linkedin" target="_blank" rel="noreferrer" className='header__icon'>
            <FaLinkedinIn/>
          </a>
          <a href='https://www.instagram.com/apikiwordpress/' title="Instagram" target="_blank" rel="noreferrer" className='header__icon'>
            <FaInstagram/>
          </a>
          <a href='https://twitter.com/apikiWordPress' title="Twitter" target="_blank" rel="noreferrer" className='header__icon'>
            <FaTwitter/>
          </a>
          <a href='https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA' title="Youtube" target="_blank" rel="noreferrer" className='header__icon'>
            <FaYoutube/>
          </a>
          <a href='https://github.com/Apiki' title="Github" target="_blank" rel="noreferrer" className='header__icon'>
            <FaGithub/>
          </a>
          <a href='https://blog.apiki.com/feed/' title="Feed Rss" target="_blank" rel="noreferrer" className='header__icon'>
            <FaRss/>
          </a>
        </div>
      </div>
    </header>
  );
}