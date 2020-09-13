import React from 'react';

const CardList = (props) => {
  const { content } = props;
  // const linkToPage = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';  
  const cards = content.map((e) =>  {
   if (!e._embedded['wp:featuredmedia']) {
     return { 
       imagemDestacada: '',
       titulo: e.title.rendered,
       link: e.slug,
     }
   }
   return {
      imagemDestacada: e._embedded['wp:featuredmedia'][0].source_url,
      titulo: e.title.rendered,
      link: e.slug,
    }
  });
    return (
      cards.map((e, index) =>
        <div key={`${e.title}${index}`}>
          <img src={e.imagemDestacada} width="200px" alt={e.title}></img>
          <p>{e.titulo}</p>
          <a href={`/${e.link}`}>Leia</a>
        </div>)
    );
};

export default CardList;
