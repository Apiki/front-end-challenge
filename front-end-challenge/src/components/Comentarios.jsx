import React, { useEffect, useState } from 'react';
import { loadComentariosLocalStorage } from '../services/localStorage';
import ComentarioCard from './ComentarioCard';

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  useEffect(() => {
    const coment = loadComentariosLocalStorage(window.location.pathname.substring(1));
    if (coment) {
      setComentarios(coment);
    } else {
      setComentarios([]);
    }
  }, []);
  if (!comentarios.length) {
    return (
      <div className="text-center">
        <h3>Comentários</h3>
        <p>Esta postagem ainda não possui comentários. Seja o primeiro a comentar!</p>
      </div>
    );
  }
  return (
    <div className="text-center">
      <h3>Comentários</h3>
      {comentarios.map((comentario, i) => <ComentarioCard key={i} props={comentario} />)}
    </div>
  );
}
