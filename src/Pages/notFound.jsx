import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>
        Infelizmente esse link que você que acessar não existe. Mas temos diversos outros artigos
        interessantes.
      </h1>
      <h2>
        Clique <Link>AQUI</Link> e vamos voltar a página principal!
      </h2>
    </div>
  );
}
