import React, { useContext } from 'react';
import { DateContext } from '../Provider/DataContext';

function Card() {
  const {
    arr,
  } = useContext(DateContext);

  console.log(arr)

  return (
    <div>
      {arr.map((post) => {
        const {source_url, slug} = post._embedded["wp:featuredmedia"][0]
        return (
          <div key={post.id}>
            <img src={source_url} alt={slug}></img>
            <div>{post.title.rendered}</div>
            <div>{post.link}</div>
          </div>
        )
      })}

    </div>
  )
}

export default Card;