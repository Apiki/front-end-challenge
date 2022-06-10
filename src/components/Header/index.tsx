import { Link } from "react-router-dom";
import ApikiLogoBlogHeader from '../../assets/apikiBlogHeader.svg'
import MenuMobileIcon from '../../assets/List-menu-mobile.svg'
import './index.css'
import './mediaqueries.css'
export function Header() {
    return (
        <header>
            <nav>
                <Link to='/'><img loading="lazy" src={ApikiLogoBlogHeader} alt="Logo da Apiki Blog" /></Link>
                <button className="button-newsletter">Cadastrar email</button>
                <button className="menu-mobile hidden"><img src={MenuMobileIcon} alt="menu" /></button>
            </nav>
        </header>
    )
}