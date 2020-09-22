import { saveComentariosLocalStorage } from './localStorage';

export const submitComentario = () => {
  const nome = document.querySelector('#name').value;
  const coment = document.querySelector('#comentario').value;
  if (nome === '' || coment === '') {
    alert('Digite todos os campos antes de enviar o comentário');
  } else {
    saveComentariosLocalStorage(window.location.pathname.substring(1));
    document.querySelector('#name').value = '';
    document.querySelector('#comentario').value = '';
    alert('Comentário enviado com sucesso!');
    window.location.reload(true);
  }
}
