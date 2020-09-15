import React from 'react';
import { connect } from 'react-redux';

const ArticleShow = (props) => {
  const { content } = props;
  if (content) {
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
      <div key={`${e.title}${index}`}>
        <div><img src={e.imagemDestacada} width="100%" alt={e.title}/></div>
        <h1>{e.titulo}</h1>
        <div><img className="avatar" src={e.avatar} alt={e.title}/><span style={{padding: "10px"}}>Escrito por: {e.autor}</span></div>
        <div  className="entreringHTML" contentEditable='false' dangerouslySetInnerHTML={{ __html: `${e.conteudo}` }}></div>
        <div><span>Sobre o autor: {e.bio}</span></div>
      </div>)
    );
  }
  return (<div>Loading...</div>);
};

const mapStateToProps = (state) => ({
  content: state.blog.actual,
});

export default connect(mapStateToProps, null)(ArticleShow);
