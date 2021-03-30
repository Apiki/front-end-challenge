import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { _embedded , title, slug } = this.props.card;
    return (
      <div className="d-flex flex-column justify-content-start text-light">
        <Link to={`/article/${slug}`} >
          <img alt ="" src={_embedded.['wp:featuredmedia'][0].media_details.sizes.medium.source_url} />
        </Link>
        <div>
          <h2>{title.rendered}</h2>
        </div>
      </div>
    )
  };
};

export default Card;
