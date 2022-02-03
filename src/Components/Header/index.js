import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="header__logo">
        <a href="https://blog.apiki.com" target="_blank" rel="noreferrer">
          <img
            src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552.png"
            alt="Apiki logo"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
