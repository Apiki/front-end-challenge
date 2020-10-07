import React from 'react';
import ButtonPages from './buttonPages';

export default function NavigationPage(props) {
  const { last, actual, setActual } = props;
  console.log(props);
  return (
    <div>
      {actual > 1 ? <ButtonPages text="Anterior" /> : null}
      <ButtonPages text={actual} />
      {actual !== last ? <ButtonPages text="Próxima" setActual={setActual} /> : null}
    </div>
  );
}
