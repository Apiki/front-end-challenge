import React, { useState } from 'react';
import { submitComentario } from '../services/submitComentario';

export default function DeixeComentario() {
  const [qtdCaracteres, setQtdCaracteres] = useState(100);
  const calcularCaracteres = (event) => {
    setQtdCaracteres(100 - event.target.value.length);
  }
  return (
    <div className="text-center margin-bottom">
      <h3 className="margin-bottom">Deixe um comentário</h3>
      <div>
        <label className="margin-bottom" to="name">Nome</label>
        <input className="margin-bottom" id="name" name="name" type="text" maxLength="10" />
      </div>
      <div className="margin-bottom">
        <label className="margin-bottom" to="textarea">Comentário</label>
        <textarea className="margin-bottom" id="comentario" name="textarea" type="text" maxLength="100"
          onChange={(event) => calcularCaracteres(event)}
        />
        <p className="margin-bottom">{`Você ainda pode digitar ${qtdCaracteres} caracteres.`}</p>
      </div>
      <button className="margin-bottom btn btn-sm" onClick={() => submitComentario() || setQtdCaracteres(100)} type="button">
        Enviar comentário
      </button>
    </div>
  );
}
