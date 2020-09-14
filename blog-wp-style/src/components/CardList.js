import React from 'react';

let xf = {};
const CardList = (props) => {
  const { content, actualPage } = props;
  // const linkToPage = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';  
  console.log('eu');
  xf = {...xf, [actualPage]: content}
  console.log('xf ', xf);
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
        <div key={`${e.title}${index}`} className="cardLength padStepTwo">
          <img src={e.imagemDestacada} width="360px" alt={e.title}></img>
          <p>{e.titulo}</p>
          <a href={`/${e.link}`}>Leia</a>
        </div>)
    );
};

export default CardList;
