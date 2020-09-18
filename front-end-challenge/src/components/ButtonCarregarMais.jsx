import React, { useContext } from 'react';
import { apikiPagesAPI } from '../services/apikiAPI';
import Context from '../Context/Context';

export default function CarregarMais() {
  const { pageNumber, setPageNumber, data, setData } = useContext(Context);

  async function carregarMais() {
    try {
      const response = await apikiPagesAPI(pageNumber);
      const newPosts = await response.json();
      if (newPosts.length) {
        const newData = [...data, ...newPosts];
        setData(newData);
        console.log(data);
        setPageNumber((currentPage) => currentPage + 1);
        console.log(pageNumber);
      } else {
        alert('Não existem mais postagens a serem carregadas.');
      }
    } catch (error) {
      console.log(error);
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
