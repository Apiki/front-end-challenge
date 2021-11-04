import './content.css';
import { useState, useEffect } from 'react';
import { Post } from '../Post';

export function Content() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + page)
      .then((res) => {
        setTotalPages(res.headers.get('x-wp-totalpages'))
        return res.json()
      })
      .then((data) => setPosts(p => p.concat(data)));
  }, [page]);


  const loadMore = () => {
    setPage(page + 1)
  }

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

        <button onClick={loadMore} style={{ display: page >= totalPages - 5 ? 'none' : 'block' }}> Carregar mais</button>

      </main>

    </div>
  )
}