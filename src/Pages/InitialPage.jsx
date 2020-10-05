import React, { useEffect, useState } from 'react';
import Card from '../componets/card';
import apiPost from '../services/apiPosts';

export default function InitialPage(params) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    apiPost().then(setPosts);
  }, []);
  console.log(posts);
  return (
    <section>
      <h1>Desenvolvimento WordPress</h1>
      <h2>Desenvolva seu negócio, desenvolvendo com WordPress.</h2>
      {posts.map((post) => {
        const { _embedded, slug, title, date } = post;
        const { author } = _embedded;
        console.log(post)
        const { alt_text, link, source_url: url } = _embedded['wp:featuredmedia'][0];
        return <Card image={url} title={title.rendered} alt={alt_text} slug={slug} author={author[0]} date={date} />;
      })}
    </section>
  );
}
