import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../componets/card';
import NavigationButtons from '../componets/NavigationButtons/navegationPages';
import Context from '../context/context';
import apiPost from '../services/apiPosts';

// Function to escape of some problemas in the text received from the API
function escapeSpecialChar(str) {
  if (str === null || str === '') return false;
  const map = {
    '&#8220;': `“`,
    '&#8221;': `”`,
    '&#8211;': `–`,
  };
  return str.replace(/(&#8220;|&#8221;|&#8211;)/g, function (m) {
    return map[m];
  });
}

export default function InitialPage(params) {
  const [posts, setPosts] = useState(null);
  const { actual, lastPage, setLastPage, noPageAfter, setNoPageAfter } = useContext(Context);
  useEffect(() => {
    apiPost(actual)
      .then((e) => setPosts(e.response))
      .then(async (e) => {
        if (!noPageAfter && actual === lastPage) {
          await apiPost(lastPage + 1)
            .then(({ status }) =>
              status !== 200 ? setNoPageAfter(lastPage) : setLastPage(lastPage + 1)
            )
            .catch(() => setNoPageAfter(lastPage));
        }
      });
  }, [actual]);
  if (!posts || posts === undefined) return null;
  if (posts.data !== undefined) {
    if (posts.data.status !== 200) {
      return <Redirect to="/NotFound" />;
    }
  }
  return (
    <section>
      <h1 className="title">Desenvolvimento WordPress</h1>
      <h2 className="subtitle">Desenvolva seu negócio, desenvolvendo com WordPress.</h2>
      {posts.map((post) => {
        const { _embedded, slug, title, date } = post;
        const { author, replies } = _embedded;
        if (_embedded['wp:featuredmedia'] === undefined) {
          return null;
        }
        const { alt_text, link, source_url: url } = _embedded['wp:featuredmedia'][0];
        return (
          <div>
            <Card
              image={url}
              title={escapeSpecialChar(title.rendered)}
              alt={alt_text}
              slug={slug}
              author={author[0]}
              date={date}
              replies={replies === undefined || !replies ? 0 : replies.lenght}
            />
          </div>
        );
      })}
      <NavigationButtons last={lastPage} actual={actual} />
    </section>
  );
}
