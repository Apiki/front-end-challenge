import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="header__logo">
        <a href="/" className="header__link">
          <div className="header__box">
            <img
              src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552.png"
              alt="Apiki logo"
            />
            <p className="header__text">| For Devs</p>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
