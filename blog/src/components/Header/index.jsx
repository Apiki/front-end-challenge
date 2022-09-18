import Logo from '../../assets/apiki_logo.png';
import FacebookLogo from '../../assets/facebook_logo.svg';
import InstagramLogo from '../../assets/instagram_logo.svg';
import LinkedinLogo from '../../assets/linkedin_logo.svg';
import TwitterLogo from '../../assets/twitter_logo.svg';
import YoutubeLogo from '../../assets/youtube_logo.svg';
import './styles.css';

function Header() {
    return (
        <header className='header-container'>
            <nav>
                <a href='/' className='logo'>
                    <img src={Logo} alt="logo apiki" />
                </a>
                <h1>BLOG</h1>
                <div className='social-media'>
                    <a href="https://www.facebook.com/ApikiWordPress" target='_blank' rel='noreferrer'>
                        <img src={FacebookLogo} alt="facebook apiki" />
                    </a>
                    <a href="https://www.linkedin.com/company/apiki/"  target='_blank' rel='noreferrer' >
                        <img src={LinkedinLogo} alt="linkedin apiki" />
                    </a>
                    <a href="https://www.instagram.com/apikiwordpress/"  target='_blank' rel='noreferrer' >
                        <img src={InstagramLogo} alt="instagram apiki" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"  target='_blank' rel='noreferrer' >
                        <img src={YoutubeLogo} alt="youtube apiki" />
                    </a>
                    <a href="https://twitter.com/apikiWordPress"  target='_blank' rel='noreferrer' >
                        <img src={TwitterLogo} alt="twitter apiki" />
                    </a>
                </div>

            </nav>
        </header>
    );
};

export default Header;