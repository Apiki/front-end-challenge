import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function Autor() {
  const { internaData, semImagem } = useContext(Context);

  const avatars = internaData[0]._embedded.author[0].avatar_urls;
  const dateLastMod = internaData[0].modified.substring(0, 10).split('-');

  return (
    <div>
      <div className="flex">
        <img
          className="img-sm"
          src={(avatars) ? avatars[`${Object.keys(avatars)[0]}`] : semImagem}
          alt="Avatar do Autor"
        />
        <p>{`by ${internaData[0]._embedded.author[0].name}`}</p>
      </div>
      <p>{`Última modificação: ${dateLastMod[2]}-${dateLastMod[1]}-${dateLastMod[0]}`}</p>
    </div>
  );
}
