import { Link } from "react-router-dom";

import './style.css';

function CardPost({ srcImg, header, link, slug }) {
  return (
    <div className="card-post">
      <h1 className="card-post__header">{ header }</h1>
      <img className="card-post__img" src={ srcImg } alt=""/>
      <Link className="card-post__link" to={ link } slug={ slug } />
    </div>
  );
};

export default CardPost;