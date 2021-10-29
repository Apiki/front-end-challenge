import './header.css'
import logoImg from '../../assets/logo.png'

export function Header() {
    return (
        <header>
            <div className="container">
                <img src={logoImg} alt="apiki logo" />
            </div>
        </header>
    )
}