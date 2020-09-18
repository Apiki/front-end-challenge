import React, { useContext } from 'react';
import { apikiPagesAPI } from '../services/apikiAPI';
import Context from '../Context/Context';

export default function CarregarMais() {
  const { pageNumber, setPageNumber, data, setData } = useContext(Context);

  async function carregarMais() {
    try {
      const response = await apikiPagesAPI(pageNumber);
      const newPosts = await response.json();
      if (newPosts) {
        const newData = [...data, ...newPosts];
        setData(newData);
        setPageNumber((currentPage) => currentPage + 1);
      } else {
        alert('Não existem mais postagens a serem carregadas.');
      }
    } catch (error) {
      alert('Não existem mais postagens a serem carregadas.');
    }
  }
  return (
    <button
      type="button"
      onClick={() => carregarMais()}
    >
      Carregar mais...
    </button>
  );
}
