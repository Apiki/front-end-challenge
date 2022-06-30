import React from 'react';
import Loading from './Loading';
import './PostCard.css'
// import PropTypes from 'prop-types';

function PostCard({ post }) {

  const info = () => {
    const dados = post.excerpt.rendered;
    return dados; 
  }

  if (!post) {
    return <Loading />;
  }  
  return (
    <div
      className='card-post'
    >
        <h2>
          <a
            className='post_card_title'         
            href={`${post.slug}`}
          >{ post.title.rendered }</a>
        </h2>
      {
        post._embedded['wp:featuredmedia'] && 
          <div
            className='div-info'
          >
            <a
              href={`${post.slug}`}
            >
              <img
                className='img-post'
                src={ post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url }
                alt={ post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.file }
              />
            </a>
            <div className='infos-post' >
              <span>by </span>
              <span><b>{post._embedded.author[0].name}</b></span>
              <div 
                className='p-info'
                dangerouslySetInnerHTML={{__html: info()}} 
              />
            </div>
          </div>
      }
    </div>
  )
}

export default PostCard;