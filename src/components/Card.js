import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
import placeholder from '../img/placeholder.png';

class Card extends Component {
  render() {
    const { _embedded, title, slug, date, excerpt } = this.props.card;
    let url;
    try {
      url = _embedded['wp:featuredmedia'][0].media_details.sizes['jnews-360x180'].source_url;
    } catch {
      url = null;
    }

    return (
      <div className="post clearfix">
          {url ? (
            <img
              className="post-image"
              alt =""
              src={url}
            />
          ) : (
            <img
              className="post-image"
              alt =""
              src={placeholder}
            />
          )}
          <div className="post-preview">
            <h2>{title.rendered}</h2>
              <p className="info">Publicado por {_embedded.author[0].name} em {moment(date).locale('pt-br').format('L')}</p>
              <p className="preview-text" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            <Link to={`/article/${slug}`} >
              <input className="btn read-more" type="button" value="Ler este artigo"></input>
            </Link>
          </div>
      </div>
    )
  };
};

export default Card;
