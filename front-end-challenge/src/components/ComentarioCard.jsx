import React from 'react';

export default function ComentarioCard({ props }) {
  return (
    <div>
      <h4>{props.nome}</h4>
      <p>{props.comentario}</p>
    </div>
  );
}
