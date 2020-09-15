import React from 'react';
import { connect } from 'react-redux';

const CardList = (props) => {
  const { list } = props;
  // const linkToPage = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';
  if (list) {
    const cards = list.map((e) =>  {
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
          <img src={e.imagemDestacada} alt={e.title}></img>
          <p>{e.titulo}</p>
          <a href={`/${e.link}`}>Leia</a>
        </div>)
    );  
  } else {
    return (<div>Loading...</div>);
  }
};

const mapStateToProps = (state) => ({
  list: state.blog.list,
});

export default connect(mapStateToProps, null)(CardList);
