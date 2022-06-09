import "./header.scss";
import apikiLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__container__link">
          <img
            src={apikiLogo}
            alt="apiki logo"
            className="header__container__image"
          />
          <h1 className="header__container__title">| For devs</h1>
        </Link>
      </section>
    </header>
  );
};

export default Header;
