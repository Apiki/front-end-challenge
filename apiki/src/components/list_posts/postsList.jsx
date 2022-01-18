import './index.scss';
import { useEffect, useState } from 'react';


import React from 'react';
import { Link, NavigationType } from 'react-router-dom';

export default function PostsList({ posts }) {

  const renderPosts = () => {
    if (!posts) return (<li>Carregando programas...</li>);
    return (
      <>
        {posts.map(prog => (
          <li key={prog.title.rendered} className="posts-list__item" data-prog-id={prog.id.toString()} >
            <h1 className="posts-list__item__title">{prog.title.rendered}</h1>
            <img className="posts-list__item__img" src={`${prog._embedded['wp:featuredmedia'][0]['media_details'].sizes.full.source_url}`} alt="Logo" />
            <p className="posts-list__item__description">{prog.slug}</p>
            {/* <a href={`${prog.link}`} >
              <button type="button">
                Detalhes do Post
              </button></a> */}
            <Link to={`/posts/detales${prog.slug}`}  >
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