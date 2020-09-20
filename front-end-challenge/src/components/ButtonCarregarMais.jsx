import React, { useContext, useState } from 'react';
import { apikiPagesAPI } from '../services/apikiAPI';
import Context from '../Context/Context';

export default function CarregarMais() {
  const { data, setData } = useContext(Context);

  const [pageNumber, setPageNumber] = useState(2);
  const [disableButton, setDisableButton] = useState(false);

  async function carregarMais() {
    try {
      const response = await apikiPagesAPI(pageNumber);
      const newPosts = await response.json();
      if (newPosts) {
        const newData = [...data, ...newPosts];
        setData(newData);
        setPageNumber((currentPage) => currentPage + 1);
      }
    } catch (error) {
      alert('Não existem mais postagens a serem exibidas.');
      setDisableButton(true);
    }
  }

  if (disableButton) return <button type="button" disabled>Carregar mais...</button>;

  return (
    <button
      type="button"
      onClick={() => carregarMais()}
    >
      Carregar mais...
    </button>
  );
}
