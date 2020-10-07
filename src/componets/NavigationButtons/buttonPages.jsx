import React from 'react';

function changePage(e, setActual) {

  console.log(setActual);
  setActual((actual) => {
    switch (e) {
      case 'Anterior':
        return actual - 1;
      case 'Próxima':
        return actual + 1;
      default:
        return e;
    }
  });
}

export default function ButtonPages(props) {
  const { text, setActual } = props;
  console.log(props)
  return (
    <button className="buttonPages" onClick={(e) => {
      changePage(text, setActual)}}>
      {text}
    </button>
  );
}
