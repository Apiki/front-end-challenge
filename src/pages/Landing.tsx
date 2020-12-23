import '../styles/global.css';
import logoimg from '../imagens/logo.svg';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
function Landing() {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoimg} alt='Para Devs' width="22%" />

                <main>
                    <h1> Nossas últimas notícias, atualizações e histórias para desenvolvedores</h1>
                    <p>Visite o site e conheça nosso Trabalho!</p>
                </main>

                <div className="location">
                    <strong> Sabinópolis </strong>
                    <span> Minas Gerais</span>
                </div>

                <Link to="/Home" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0.0,0.6)">
                    </FiArrowRight>
                </Link>

            </div>
        </div>
    );
}

export default Landing;