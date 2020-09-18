import React, { useEffect, useContext } from 'react';
import { apikiAPI } from '../services/apikiAPI';
import Context from '../Context/Context';
import Card from '../components/Card';
import CarregarMais from '../components/ButtonCarregarMais';

export default function PaginaInicial() {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    apikiAPI().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <section>
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      <CarregarMais />
    </section>
  );
}
