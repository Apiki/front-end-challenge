import React, { useEffect, useState, useContext } from 'react';
import { apikiInternaAPI } from '../services/apikiInternaAPI';
import InternaCard from '../components/InternaContent';
import Context from '../Context/Context';
import Voltar from '../components/BtnVoltar';

export default function Interna() {
  const { internaData, setInternaData, setAuthor } = useContext(Context);

  useEffect(() => {
    apikiInternaAPI(window.location.pathname.substring(1)).then((response) => {
      setAuthor(response[0]._embedded.author);
      setInternaData(response);
      // setCategoria(response[0]._embedded['wp:term'][0][0].name);
    });
    return setInternaData([]);
  }, []);
  
  return (
    <div>
      <Voltar />
      {internaData.map((post) => <InternaCard key={post.id} post={post} />)}
      <Voltar />
    </div>
  );
}
