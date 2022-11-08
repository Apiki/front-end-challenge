function Header(){
    return (
       <header>
        <a href="/">
        <div className="logo-container">
        <img src={require('../assets/image/apiki-logo.png')} alt="Apiki Logo" className="logo"/>
        <span className="logo-subtitle">Blog</span>
        </div>
        </a>
       </header>
    );
  }
export default Header;