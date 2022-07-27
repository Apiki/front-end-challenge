import React from 'react';

export default function ButtonLoadMore({ page, totalPage, action }) {
  const handleToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return page <= totalPage ? (
    <button onClick={() => action()} className="c-button">
      Carregar mais
    </button>
  ) : (
    <button onClick={() => handleToTopClick()} className="c-button">
      Voltar ao topo
    </button>
  );
}
