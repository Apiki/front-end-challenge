import React, { useState } from 'react';

export default function DeixeComentario() {
  const [qtdCaracteres, setQtdCaracteres] = useState(100);

  const calcularCaracteres = (event) => {
    setQtdCaracteres(100 - event.target.value.length);
  }

  return (
    <div>
      <h3>Deixe um comentário</h3>
      <div>
        <label to="name">Nome</label>
        <input name="name" type="text" maxLength="10" />
      </div>
      <div>
        <label to="textarea">Comentário</label>
        <textarea name="textarea" type="text" maxLength="100" onChange={(event) => calcularCaracteres(event)} />
        <p>{`Você ainda pode digitar ${qtdCaracteres} caracteres.`}</p>
      </div>
    </div>
  );
}
