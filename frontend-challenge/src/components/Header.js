import React from 'react';
import '../style/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header--container header--nav">
        <div className="header--nav-logo">Logo</div>
        <nav className="header--nav-links">Links</nav>
      </div>
      <div className="header--container header--search-bar">
        <form>
          <input type="text" placeholder="Pesquisar..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}
