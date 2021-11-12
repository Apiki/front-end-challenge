import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import './Header.css';

const Header = function () {
  const { links, setLinks } = useContext(DataContext);
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/');
    setLinks([{ url: '', name: 'Login' }]);
  }

  return (
    <header className="header-container">
      <h1>Ebytr - Tarefas</h1>
      <nav className="nav-container">
        {links.map((link) => {
          if (link.name !== 'Sair') {
            return (
              <Link key={link.name} to={link.url}>
                {link.name}
              </Link>
            );
          }
          return (
            <button onClick={logout} type="button">
              {link.name}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
