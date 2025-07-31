import { Link } from "react-router";
import { Logo } from "~components/atoms";
import "./styles.scss";

export const Header = () => (
    <header className="header">
        <section className="header__box">
            <Link
                to="/"
                className="header__link"
            >
                <Logo lightColor />
            </Link>
            <nav className="header__box">
                <ul className="header__box header__box--list">
                    <li className="header__box header__box--item">
                        <Link
                            to="/"
                            className="header__link header__link--item"
                        >
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
);
