import React from 'react';
import { Link } from 'react-router-dom';

export default function PagesCompany(params) {
  return (
    <div>
      <h3 className="bold">Páginas do Apiki.com</h3>

      <ul>
        <li>
          <Link to="/">Apiki.com</Link>
        </li>
        <li>
          <a href="#">Sobre a Apiki</a>
        </li>
        <li>
          <a href="#">Desenvolvimento em WordPress</a>
        </li>
        <li>
          <a href="#">Sustentação WordPress</a>
        </li>
        <li>
          <a href="#">Hospedagem WordPress</a>
        </li>
        <li>
          <a href="#">Atendimento</a>
        </li>
      </ul>
    </div>
  );
}
