import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import ButtonPages from './buttonPages';

export default function NavigationPage() {
  const [build, setBuild] = useState(false);
  const { actual, noPageAfter, lastPage } = useContext(Context);
  useEffect(()=>{setBuild(true); return ()=>{setBuild(false)}},[lastPage])
  if (!build) return <span>Carregando...</span>;
  return (
    <div>
      {actual > 1 ? <ButtonPages text="Anterior" /> : null}
      <ButtonPages text={actual} />
      {!noPageAfter ? <ButtonPages text="Próxima" /> : null}
    </div>
  );
}
