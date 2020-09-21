import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function Autor() {
  const { internaData } = useContext(Context);

  const url = Object.keys(internaData[0]._embedded.author[0].avatar_urls)[0];
  const dateLastMod = internaData[0].modified.substring(0, 10).split('-');

  return (
    <div>
      <img src={internaData[0]._embedded.author[0].avatar_urls[`${url}`]} alt="Avatar do Autor" />
      <p>{`by ${internaData[0]._embedded.author[0].name}`}</p>
      <p>{`Última modificação: ${dateLastMod[2]}-${dateLastMod[1]}-${dateLastMod[0]}`}</p>
    </div>
  );
}
