import React from 'react';

export default function ButtonLoadMore({ page, totalPage, action }) {
  return (
    <button
      onClick={() => action()}
      className={`${page <= totalPage ? 'c-button' : 'c-button--disable'}`}
    >
      Carregar mais
    </button>
  );
}
