import React from 'react';
import '../style/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const headers = [
    'Sobre',
    'Site',
    'Perfil',
  ];

  return (
    <header>
      <Link to="/">
        <img
          src="https://cdn.blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
          alt="logo-apiki" />
      </Link>
      <ul>
        {headers.map((elem) => <a className="anchor" target="_blanck" href="https://apiki.com/">{elem}</a>)}
      </ul>
    </header>
  );
}

export default NavBar;
