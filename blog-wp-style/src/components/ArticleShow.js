import React from 'react';

const ArticleShow = (props) => {
  const { content } = props;
  let imagemArtigo, avatarAutor, nomeAutor, bioAutor;
  // const linkToPage = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';  
  const article = content.map((e) =>  {
    if (!e._embedded) {
      imagemArtigo = '';
      avatarAutor = '';
      nomeAutor = 'Desconhecido';
      bioAutor = 'Bio desconhecida';
    }
    if (e._embedded.author[0].message && !e._embedded['wp:featuredmedia']) {
      imagemArtigo = '';
      avatarAutor = '';
      nomeAutor = 'Desconhecido';
      bioAutor = 'Bio desconhecida';
    }
    if (e._embedded.author[0].message && e._embedded['wp:featuredmedia']) {
      imagemArtigo =  e._embedded['wp:featuredmedia'][0].source_url;
      avatarAutor = '';
      nomeAutor = 'Desconhecido';
      bioAutor = 'Bio desconhecida';
    }
    if (!e._embedded.author[0].message && !e._embedded['wp:featuredmedia']) {
      imagemArtigo =  '';
      avatarAutor = e._embedded.author[0].avatar_urls['96'];
      nomeAutor = e._embedded.author[0].name;
      bioAutor = e._embedded.author[0].description;
    }
    if (!e._embedded.author[0].message && e._embedded['wp:featuredmedia']) {
      imagemArtigo =  e._embedded['wp:featuredmedia'][0].source_url;
      avatarAutor = e._embedded.author[0].avatar_urls['96'];
      nomeAutor = e._embedded.author[0].name;
      bioAutor = e._embedded.author[0].description;
    }
    return {
      imagemDestacada: imagemArtigo,
      titulo: e.title.rendered,
      conteudo: e.content.rendered,
      avatar: avatarAutor,
      autor: nomeAutor,
      bio: bioAutor,
    }
  });
  return (
    article.map((e, index) =>
    <div key={`${e.title}${index}`} style={{align: "center", padding: "50px"}}>
      <div><img src={e.imagemDestacada} width="800px" alt={e.title}/></div>
      <h1 style={{width: "800px"}}>{e.titulo}</h1>
      <div><img src={e.avatar} alt={e.title}/><span style={{padding: "10px"}}>Escrito por: {e.autor}</span></div>
      <div style={{width: "800px"}} contentEditable='true' dangerouslySetInnerHTML={{ __html: `${e.conteudo}` }}></div>
      <div style={{width: "800px"}}><span>Sobre o autor: {e.bio}</span></div>
    </div>)
  );
};

export default ArticleShow;
