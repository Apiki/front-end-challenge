import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

export default function Voltar() {
  const { internaData } = useContext(Context);

  const paginaInicial = internaData[0]._embedded['wp:term'][0][0].name;
  const title = internaData[0].title.rendered;

  return (
    <div className="flex">
      <Link className="link" to="/">{paginaInicial}</Link>
      <p className="font-grey">{`>>> ${title}`}</p>
    </div>
  );
}
