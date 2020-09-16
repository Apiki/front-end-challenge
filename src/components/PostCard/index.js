import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import Undefined from '../../assets/undefined.png';
import DefaultGravatar from '../../assets/defaultGravatar.png';

const PostCard = ({post}) => {
  return (
    <Link to={`/${post.slug}`} className="card scale-up-center">

      {console.log('PostCard', post)}

      <img 
        src={post['_embedded']["wp:featuredmedia"] ? post['_embedded']["wp:featuredmedia"][0].source_url : Undefined} 
        alt={post['_embedded']["wp:featuredmedia"] ? post['_embedded']["wp:featuredmedia"][0].alt_text : 'Undefined'} 
      />
      
      <h3>{post['title']["rendered"]} </h3>

      <p>{post['excerpt']["rendered"].slice(3, -5)}</p> 

      <span>
        <img
          src={ post._embedded.author[0].avatar_urls ? post._embedded.author[0].avatar_urls[24] : DefaultGravatar }
          alt={ post._embedded.author[0].name || 'Default Gravatar'}
        />
        | { post['_embedded']["author"][0].name } - {new Date(post.date).toLocaleDateString() }.
      </span>

    </Link>
  );
}

export default PostCard;
