import './content.css';
import { useState, useEffect } from 'react';
import { Post } from '../Post';

export function Content() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + page)
      .then((res) => res.json())
      .then((data) => setPosts(posts.concat(data)));
    // eslint-disable-next-line
  }, [page]);


  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">

      <section>
        <h1>Desenvolvimento WordPress</h1>
        <p>Desenvolva seu negócio, desenvolvendo com WordPress</p>
      </section>

      <main>

        <h3>Últimas postagens</h3>
        <ul>
          {posts.map(post => { return <Post key={post.id} post={post} /> })}
        </ul>

        <button className="load-button" onClick={loadMore}> Carregar mais</button>
      </main>

    </div>
  )
}