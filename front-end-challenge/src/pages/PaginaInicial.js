import React, { useContext } from 'react';
import Context from '../Context/Context';
import Card from '../components/Card';
import CarregarMais from '../components/ButtonCarregarMais';
import Carregando from '../components/Carregando';

export default function PaginaInicial() {
  const { data } = useContext(Context);

  if (!data.length) return <Carregando />;

  return (
    <section>
      {data.map((post) => <Card key={post.id} post={post} />)}
      <CarregarMais />
    </section>
  );
}
