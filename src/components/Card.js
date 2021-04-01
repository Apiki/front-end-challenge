import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../img/placeholder.png';
import '../style/card.css';

class Card extends Component {
  render() {
    const { _embedded, title, slug, excerpt } = this.props.card;
    return (
      <div className="col-lg-6">
        <div className="card border-dark text-light">
            {_embedded['wp:featuredmedia'] ? <img className="card-img" alt ="" src={_embedded['wp:featuredmedia'][0].media_details.sizes['jnews-360x180'].source_url} /> :  <img className="card-img" alt ="" src={placeholder} />}
            {/* <img className="card-img" alt ="" src={_embedded['wp:featuredmedia'][0].media_details.sizes['jnews-360x180'].source_url} /> */}
            <div className="card-img-overlay">
              <h2 className="card-title h4">{title.rendered}</h2>
              <div className="col-sm-8">
                <p className="card-text small" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
              </div>
              <Link to={`/article/${slug}`} >
                <input class="btn btn-dark" type="button" value="Ler este artigo"></input>
              </Link>
            </div>
        </div>
      </div>
    )
  };
};

export default Card;
