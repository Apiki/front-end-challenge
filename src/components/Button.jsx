import React, { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import buttonHandler from '../services/buttonHandler';

const Button = () => {
  const { data, setData } = useContext(ApikiBlogContext);
  return (
    <button
      className='main-page-load-more'
      onClick={ () => {
        buttonHandler()
        .then(posts => {
        setData(data.concat(posts));
    });
    } }>
      Carregar mais...
    </button>
  )
}

export default Button;
