export const saveComentariosLocalStorage = (url) => {
  let comentarios = JSON.parse(localStorage.getItem(`${url}`));
  if (comentarios !== null) {
    const nome = document.querySelector('#name').value;
    const comentario = document.querySelector('#comentario').value;
    const objeto = { nome, comentario };
    comentarios.push(objeto);
    localStorage.setItem(`${url}`, JSON.stringify(comentarios));
  } else {
    comentarios = [];
    const nome = document.querySelector('#name').value;
    const comentario = document.querySelector('#comentario').value;
    const objeto = { nome, comentario };
    comentarios.push(objeto);
    localStorage.setItem(`${url}`, JSON.stringify(comentarios));
  }
};
