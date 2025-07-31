import { Logo } from "~components/atoms";
import "./styles.scss";

export const Footer = () => (
    <footer className="footer">
        <section className="footer__box">
            <Logo
                lightColor
                size="lg"
            />
            <p className="footer__text footer__text--credits">Made by Igor</p>
        </section>
        <div />
        <p className="footer__text">© 2025 Apiki</p>
    </footer>
);
