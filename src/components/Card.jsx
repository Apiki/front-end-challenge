import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApikiContext from '../context/apikiContext';

function Card({ post, post: { _embedded } }) {
  const { setId_postDetails } = useContext(ApikiContext);
  const src = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
  return (
    <div className="card-post">
      <Link
        to="/post-details"
        className="text-overflow"
        onClick={
          () => setId_postDetails(post.id)
      } >
        <img src={ src } alt="imagem representativo do post" />
        {
          post.title.rendered
        }        
      </Link>
    </div>
  );
}

export default Card;
