import React, { useEffect, useContext } from 'react';
import { apikiInternaAPI } from '../services/apikiInternaAPI';
import InternaContent from '../components/InternaContent';
import Context from '../Context/Context';
import Voltar from '../components/BtnVoltar';
import Carregando from '../components/Carregando';
import User from '../components/User';
import DeixeComentario from '../components/DeixeComentario';
import Comentarios from '../components/Comentarios';
import Aside from '../components/Aside';

export default function Interna() {
  const { internaData, setInternaData } = useContext(Context);

  useEffect(() => {
    apikiInternaAPI(window.location.pathname.substring(1)).then((response) => {
      setInternaData(response);
    });
  }, []);

  if (!internaData.length) return <Carregando />;

  return (
    <section className="flex">
      <div>
        <Voltar />
        <InternaContent />
        <User />
        <Comentarios />
        <DeixeComentario />
        <Voltar />
      </div>
      <div>
        <Aside />
      </div>

    </section>
  );
}
