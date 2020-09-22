import React from 'react';

export default function ComentarioCard({ props }) {
  return (
    <div className="card-coment">
      <h4>{props.nome}</h4>
      <p className="margin-left">{props.comentario}</p>
    </div>
  );
}
