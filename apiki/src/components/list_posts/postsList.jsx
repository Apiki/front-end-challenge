/**
 * @author   : Matheus de Castro Sousa
 * @since    : React 17.0.2
 * Date      : 2022-01-19
 * Porpouse  : Component for renderer posts 
 * React usage : Link to router-dom 
 */

import './index.scss';


import React from 'react';
import { Link } from 'react-router-dom';

export default function PostsList({ posts }) {

  const renderPosts = () => {
    if (!posts) return (<h2>Loading posts...</h2>);
    return (
      <>
        {posts.map(post => (

          <li key={post.title.rendered} className="posts-list__item" data-post-id={post.id.toString()} >
            <h1 className="posts-list__item__title">{post.title.rendered}</h1>
            <img className="posts-list__item__img" src={`${post?._embedded['wp:featuredmedia'][0]['media_details']?.sizes?.full?.source_url}`} alt="Logo" />
            <p className="posts-list__item__description">{post?.slug}</p>
            <Link to={`/posts/detales${post?.slug}`}  >
              <button type="button">
                Detalhes do Post
              </button></Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <div className="posts-list-container">
      <ul className="posts-list">
        {renderPosts()}
      </ul>
    </div>
  );
}