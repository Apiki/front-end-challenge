import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

export default function NotFound() {
  const { setActual } = useContext(Context);
  useEffect(() => {
    setActual(1);
  }, []);
  return (
    <div className="not-found">
      <h1>
        Infelizmente esse link que você que acessar não existe. Mas temos diversos outros artigos
        interessantes.
      </h1>
      <h2>
        Clique <Link to="/">AQUI</Link> e vamos voltar a página principal!
      </h2>
    </div>
  );
}
