import React from 'react';

function SearchBar() {
  return (
    <div className="searchbar">
      <form className="search-form d-flex rounded" role="search" action="" method="get">
        <input id="search-input" type="search" className="search-input" placeholder="Procurar por assuntos ou categorias..." />
        <button type="submit" aria-label="Pesquisa" className="search-submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
