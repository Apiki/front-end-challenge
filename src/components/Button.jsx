import React, { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import buttonHandler from '../services/buttonHandler';

const Button = () => {
  const { setData } = useContext(ApikiBlogContext);
  return (
    <button
      onClick={ () => { buttonHandler().then(posts => {
        setData(posts);
    });} }>
      Carregar mais...
    </button>
  )
}

export default Button;
