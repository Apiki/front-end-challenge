import React from 'react';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header d-flex justify-content-between">
      <a className="logo-brand" href="#home">
        <img src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png" width="130" height="auto" alt="Logomarca da APIKI" />
      </a>
      <SearchBar />
      <button type="button" className="btn btn-orange rounded">Cadastre seu email</button>
    </header>
  );
}

export default Header;
