import { Link } from "react-router-dom";

import './style.css';

function CardPost({ srcImg, header, content, slug }) {
  return (
    <section className="card-post">
      <div className="card-post__holes"></div>
      <div className="card-post__coil"></div>
      <Link className="card-post__link card-post-front" to={`/post-details/${slug}`} slug={ slug }>
        <header className="card-post-front__header">{ header }</header>
        <img className="card-post-front__img" src={ srcImg } alt=""/>
        <p className="card-post-front__footer">
          {content.rendered.replace(/<.*?>/g, '').slice(0,25)}
          <span>...ver mais</span>              
        </p>
      </Link>
    </section>
  );
};

export default CardPost;