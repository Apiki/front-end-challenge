import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function User() {
  const { internaData } = useContext(Context);

  const url = Object.keys(internaData[0]._embedded.author[0].avatar_urls)[0];
  return (
    <div>
      <img src={internaData[0]._embedded.author[0].avatar_urls[`${url}`]} alt="Avatar do Autor" />
      <h4>{internaData[0]._embedded.author[0].name}</h4>
      <p>{internaData[0]._embedded.author[0].description}</p>
    </div>
  );
}
