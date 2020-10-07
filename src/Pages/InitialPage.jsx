import React, { useEffect, useState } from 'react';
import Card from '../componets/card';
import NavigationButtons from '../componets/NavigationButtons/navegationPages';
import apiPost from '../services/apiPosts';

export default function InitialPage(params) {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [actual, setActual] = useState(1);
  const [noPageAfter, setNoPageAfter] = useState(undefined);
  useEffect(() => {
    apiPost()
      .then((e) => {
        setPosts(e.response);
      })
      .then(() => {
        if (!noPageAfter && actual === pages) {
          apiPost(pages + 1)
            .then(({ status }) => (status !== 200 ? setNoPageAfter(pages) : setPages(pages + 1)))
            .catch(() => setNoPageAfter(pages));
        }
      });
  }, []);
  if (!posts) return null;
  return (
    <section>
      <h1 className="title">Desenvolvimento WordPress</h1>
      <h2 className="subtitle">Desenvolva seu negócio, desenvolvendo com WordPress.</h2>
      {posts.map((post) => {
        const { _embedded, slug, title, date } = post;
        const { author } = _embedded;
        console.log(post);
        const { alt_text, link, source_url: url } = _embedded['wp:featuredmedia'][0];
        return (
          <div>
            <Card
              image={url}
              title={title.rendered}
              alt={alt_text}
              slug={slug}
              author={author[0]}
              date={date}
            />
          </div>
        );
      })}
      <NavigationButtons last={pages} actual={actual} setActual={setActual} />
    </section>
  );
}
