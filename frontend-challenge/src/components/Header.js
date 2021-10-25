import React from 'react';
import '../style/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header--container header--nav">
        <div className="header--nav-logo">
          <img id='logo' src='https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png' alt="Apiki logo"/>
        </div>
        <nav className="header--nav-links">
          <a href="https://www.instagram.com/phtoselli/">Intagram</a>
          <a href="https://www.linkedin.com/in/pedrotoselli/">Linkedin</a>
          <a href="https://github.com/Pedro-Toselli">Github</a>
        </nav>
      </div>
      <div className="header--container header--search-bar">
        <form>
          <input type="text" placeholder="Procurar postagem..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}
