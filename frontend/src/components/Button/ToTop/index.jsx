import React from 'react';

export default function ToTopButton({ action }) {
  return (
    <button onClick={() => action()} className="c-button-to-top">
      <span>Voltar ao topo</span>
    </button>
  );
}
