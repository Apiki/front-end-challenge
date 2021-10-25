import React from 'react';
import '../style/Posts.css';
import Post from './Post';

export default function Posts() {
  const exampleResponse = [
    {
      img: 'imagem',
      title: 'Titulo1',
      content: 'Exemplo de conteudo de uma postagem'
    },
    {
      img: 'imagem',
      title: 'Titulo2',
      content: 'Exemplo de conteudo de uma postagem'
    },
    {
      img: 'imagem',
      title: 'Titulo3',
      content: 'Exemplo de conteudo de uma postagem'
    }
  ];

  const exampleElement = exampleResponse.map((curr) => {
    return <Post key={curr.title} img={curr.img} title={curr.title} content={curr.content} />
  });

  return (
    <main className="main flex">
      <h1 id="main--title">Postagens</h1>
      <div className="main--container flex">{ exampleElement }</div>
    </main>
  )
}
