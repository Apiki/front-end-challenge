import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function User() {
  const { internaData, semImagem } = useContext(Context);

  const avatars = internaData[0]._embedded.author[0].avatar_urls;

  return (
    <div className="card-sm">
      <img src={(avatars) ? avatars[`${Object.keys(avatars)[0]}`] : semImagem} alt="Avatar do Autor" />
      <div className="text-center margin-left">
        <h4>{internaData[0]._embedded.author[0].name}</h4>
        <p>{internaData[0]._embedded.author[0].description}</p>
      </div>
    </div>
  );
}
