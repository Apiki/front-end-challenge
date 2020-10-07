import React from 'react';
import { Link } from 'react-router-dom';

export default function PagesCompany(params) {
  return (
    <div>
      <h3 className="bold">Páginas do Apiki.com</h3>

      <ul>
        <li>
          <Link to="https://apiki.com/">Apiki.com</Link>
        </li>
        <li>
          <a href="https://apiki.com/empresa-especializada-em-wordpress/">Sobre a Apiki</a>
        </li>
        <li>
          <a href="https://apiki.com/desenvolvimento-sites-wordpress/">
            Desenvolvimento em WordPress
          </a>
        </li>
        <li>
          <a href="https://apiki.com/manutencao-wordpress/">Sustentação WordPress</a>
        </li>
        <li>
          <a href="https://apiki.com/infra-hospedagem-wordpress/">Hospedagem WordPress</a>
        </li>
        <li>
          <a href="https://apiki.com/atendimento/">Atendimento</a>
        </li>
      </ul>
    </div>
  );
}
