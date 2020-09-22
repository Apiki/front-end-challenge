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
      <div className="text-center">
        <label className="margin-bottom" to="name">Nome</label>
        <input className="margin-bottom margin-left" id="name" name="name" type="text" maxLength="10" />
      </div>
      <div className="margin-bottom card-deixe">
        <label className="margin-bottom" to="textarea">Comentário</label>
        <div>
          <textarea className="margin-bottom margin-left" id="comentario" name="textarea" type="text" maxLength="100"
            onChange={(event) => calcularCaracteres(event)}
          />
          <p className="margin-bottom">{`Você ainda pode digitar ${qtdCaracteres} caracteres.`}</p>
        </div>
      </div>
      <button className="margin-bottom btn btn-sm btn-salmon" onClick={() => submitComentario() || setQtdCaracteres(100)} type="button">
        Enviar comentário
      </button>
    </div>
  );
}
