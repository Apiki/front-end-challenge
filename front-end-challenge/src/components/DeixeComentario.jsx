import React, { useState } from 'react';
import { saveComentariosLocalStorage } from '../services/localStorage';

export default function DeixeComentario() {
  const [qtdCaracteres, setQtdCaracteres] = useState(100);

  const calcularCaracteres = (event) => {
    setQtdCaracteres(100 - event.target.value.length);
  }

  const submitComentario = () => {
    const nome = document.querySelector('#name').value;
    const coment = document.querySelector('#comentario').value;
    if (nome === '' || coment === '') {
      alert('Digite todos os campos antes de enviar o comentário');
    } else {
      saveComentariosLocalStorage(window.location.pathname.substring(1));
      document.querySelector('#name').value = '';
      document.querySelector('#comentario').value = '';
      alert('Comentário enviado com sucesso!');
      setQtdCaracteres(100);
      window.location.reload(true);
    }
  }

  return (
    <div>
      <h3>Deixe um comentário</h3>
      <div>
        <label to="name">Nome</label>
        <input id="name" name="name" type="text" maxLength="10" />
      </div>
      <div>
        <label to="textarea">Comentário</label>
        <textarea id="comentario" name="textarea" type="text" maxLength="100" onChange={(event) => calcularCaracteres(event)} />
        <p>{`Você ainda pode digitar ${qtdCaracteres} caracteres.`}</p>
      </div>
      <button onClick={() => submitComentario()} type="button">Enviar comentário</button>
    </div>
  );
}
