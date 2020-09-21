import React, { useEffect, useContext, useState } from 'react';
import Context from '../Context/Context';
import Autor from './Autor';

export default function InternaContent() {
  const { semImagem, internaData } = useContext(Context);

  useEffect(() => {
    const content_el = document.querySelector('#content');
    content_el.innerHTML = internaData[0].content.rendered;
  }, []);

  return (
    <div>
      <h2>{internaData[0].title.rendered}</h2>
      <h3>{internaData[0].excerpt.rendered.substring(3, (internaData[0].excerpt.rendered.length) - 5)}</h3>
      <Autor />
      <img src={(internaData[0]._embedded['wp:featuredmedia']) ? internaData[0]._embedded['wp:featuredmedia'][0].source_url : semImagem} alt="Imagem destacada" />
      <pre id="content"></pre>
    </div>
  );
}
