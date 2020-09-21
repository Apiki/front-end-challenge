import React, { useEffect, useState, useContext } from 'react';
import { apikiInternaAPI } from '../services/apikiInternaAPI';
import InternaContent from '../components/InternaContent';
import Context from '../Context/Context';
import Voltar from '../components/BtnVoltar';
import Carregando from '../components/Carregando';
import User from '../components/User';

export default function Interna() {
  const { internaData, setInternaData } = useContext(Context);

  useEffect(() => {
    apikiInternaAPI(window.location.pathname.substring(1)).then((response) => {
      // setAuthor(response[0]._embedded.author);
      setInternaData(response);
      console.log(response);
      // setCategoria(response[0]._embedded['wp:term'][0][0].name);
    });
  }, []);

  if (!internaData.length) return <Carregando />;
  
  return (
    <div>
      <Voltar />
      <InternaContent />
      <User />
    </div>
  );
}
