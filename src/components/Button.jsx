import React, { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import buttonHandler from '../services/buttonHandler';

const Button = () => {
  const { setData, setLoading } = useContext(ApikiBlogContext);
  return (
    <button
      onClick={ () => {
        setLoading(true);
        buttonHandler()
        .then(posts => {
        setData(posts);
        setLoading(false);
    });
    } }>
      Carregar mais...
    </button>
  )
}

export default Button;
