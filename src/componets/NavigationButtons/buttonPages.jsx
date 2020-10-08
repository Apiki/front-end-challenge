import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';

function changePage(e, setActual, lastPage) {
  setActual((actual) => {
    switch (e) {
      case 'Anterior':
        return actual - 1;
      case 'Carregar mais...':
        if (actual === lastPage - 1) return lastPage;
        return actual + 1;
      default:
        return e;
    }
  });
}

/*
Contornei a deficiência de não ter conseguido acessar o número de páginas na resposta da requisição
através da desabilitação do botção de avançar e de uma requisitação extra para verificar se a próxima 
página existe
*/
export default function ButtonPages(props) {
  const { text, hide = false } = props;
  const { actual, setActual, lastPage } = useContext(Context);
  useEffect(() => {
    console.log(actual);
  }, [lastPage]);
  const visibility = !hide ? 'visible' : 'hidden';
  return (
    <button
      style={{ visibility }}
      className="buttonPages"
      disabled={actual >= lastPage}
      onClick={() => {
        changePage(text, setActual, lastPage);
      }}
    >
      {text}
    </button>
  );
}
