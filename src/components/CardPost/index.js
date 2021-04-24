import React from 'react';
import { Link } from 'react-router-dom';
import { fromatDate } from '../../utils/formatDate';

import './styles.scss';

const CardPost = ({ post }) => {
  return (
    <div className='card'>
      <div className='card__box-img'>
        <img
          src={
            post._embedded['wp:featuredmedia'][0].media_details.sizes
              .medium_large.source_url
          }
          alt='Ilustração'
          className='card__img'
        />
      </div>
      <div className='card__content'>
        <div className='card__content-text'>
          <Link to={`/post/${post.slug}`} className='card__link'>
            <h2 className='card__title'>{post.title.rendered}</h2>
          </Link>
        </div>

        <div className='card__info'>
          <span className='card__author'>{post._embedded.author[0].name}</span>
          <span className='card__date-post'>{fromatDate(post.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
