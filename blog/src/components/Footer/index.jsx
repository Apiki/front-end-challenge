import LogoWB from '../../assets/apiki-logo-pb.png';
import FacebookLogoB from '../../assets/fb-branco.svg';
import InstagramLogoB from '../../assets/insta-branco.svg';
import LinkedinLogoB from '../../assets/linkedin-branco.svg';
import TwitterLogoB from '../../assets/twitter-branco.svg';
import YoutubeLogoB from '../../assets/youtube-branco.svg';
import './styles.css';

function Footer() {
    return (
        <footer className='footer-container'>
            <nav>
                <a href='/' className='logo'>
                    <img src={LogoWB} alt="logo apiki" />
                </a>
                <p>2022. Apiki WordPress. Todos os Direitos Reservados</p>
                <div className='social-media'>
                    <a href="https://www.facebook.com/ApikiWordPress" target='_blank' rel='noreferrer'>
                        <img src={FacebookLogoB} alt="facebook apiki" />
                    </a>
                    <a href="https://www.linkedin.com/company/apiki/"  target='_blank' rel='noreferrer' >
                        <img src={LinkedinLogoB} alt="linkedin apiki" />
                    </a>
                    <a href="https://www.instagram.com/apikiwordpress/"  target='_blank' rel='noreferrer' >
                        <img src={InstagramLogoB} alt="instagram apiki" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"  target='_blank' rel='noreferrer' >
                        <img src={YoutubeLogoB} alt="youtube apiki" />
                    </a>
                    <a href="https://twitter.com/apikiWordPress"  target='_blank' rel='noreferrer' >
                        <img src={TwitterLogoB} alt="twitter apiki" />
                    </a>
                </div>

            </nav>
        </footer>
    );
};

export default Footer;