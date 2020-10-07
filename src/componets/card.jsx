import React from 'react';
import { Link } from 'react-router-dom';

function reverseData(date) {
  const dateSplited = /(....)-(..)-(..)T.*/.exec(date).reverse();
  return [dateSplited[0], dateSplited[1], dateSplited[2]].join('/');
}

export default function Card(props) {
  const { image, sendTo, alt, slug, author, title, date } = props;
  return (
    <div className="card">
      <Link className="links" to={`/${slug}`} alt={alt}>
        <img className="thumbnail" src={image} alt={alt} />
        <div className="side-photo-text">
          <p className="title-card">{title}</p>
          <span className="author">
            {!author.name ? null : 'By: '} {author.name}
          </span>
          <span className="date">{reverseData(date)}</span>
        </div>
      </Link>
    </div>
  );
}
