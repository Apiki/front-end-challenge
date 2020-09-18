import React from 'react';

export default function Card({ post }) {
  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : '../images/download.jpg'}/>
      <h3>{post.title.rendered}</h3>
      <a href={post.link}>{post.slug}</a>
    </div>
  );
}
