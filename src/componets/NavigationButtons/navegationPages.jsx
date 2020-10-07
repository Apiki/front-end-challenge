import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import ButtonPages from './buttonPages';

export default function NavigationPage() {
  const [build, setBuild] = useState(false);
  const { actual, noPageAfter, lastPage } = useContext(Context);
  useEffect(() => {
    setBuild(true);
    return () => {
      setBuild(false);
    };
  }, [lastPage]);
  if (!build) return <span>Carregando...</span>;
  return (
    <div className="navigation-bar">
      {<ButtonPages text="Anterior" hide={actual > 1 ? false : true} />}
      <span className="span-page-atual">{actual}</span>
      <ButtonPages text="Próxima" hide={!noPageAfter ? false : true} />
    </div>
  );
}
