import React, { useContext } from 'react';
import { DateContext } from '../Provider/DataContext';
import '../Styles/styles.css';

function Card() {
  const {
    arr,
    showMorePosts
  } = useContext(DateContext);

  return (
    <div>
      {arr.map((post) => {
        const {source_url, slug} = post._embedded["wp:featuredmedia"][0]
        return (
          <div className="cardContainer" key={post.id}>
            <h3>{post.title.rendered}</h3>
            <img src={source_url} alt={slug}></img>
            <a href={post.link}>{post.link}</a>
          </div>
        )
      })}
      <button
        type="button"
        onClick={ showMorePosts }
      >
        Carregar Mais
      </button>

    </div>
  )
}

export default Card;