import './Footer.css';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaGithub, 
  FaRss 
} from "react-icons/fa";

export default function Footer () {
  return(
    <footer className="footer">
      <div className='footer__container'>
        <div>
          <a href='https://www.facebook.com/ApikiWordPress' title="Facebook" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaFacebookF/>
          </a>
          <a href='https://www.linkedin.com/company/apiki' title="Linkedin" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaLinkedinIn/>
          </a>
          <a href='https://www.instagram.com/apikiwordpress/' title="Instagram" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaInstagram/>
          </a>
          <a href='https://twitter.com/apikiWordPress' title="Twitter" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaTwitter/>
          </a>
          <a href='https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA' title="Youtube" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaYoutube/>
          </a>
          <a href='https://github.com/Apiki' title="Github" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaGithub/>
          </a>
          <a href='https://blog.apiki.com/feed/' title="Feed Rss" target="_blank" rel="noreferrer" className='footer__icon'>
            <FaRss/>
          </a>
        </div>

        <p className='footer__rights'>© 2022 Apiki - Empresa especializada em WordPress.</p>
      </div>
    </footer>
  )
}