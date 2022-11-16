import './Home.css';

import { Post, Newsletter } from '../components/';
import { useEffect, useState } from 'react';

export default function Home () {

  const [ posts, setPosts ] = useState([]);
  const [ page, setPage ] = useState(1);
  
  async function getPosts(page) {

    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
      .then((response) => response.json()
      .then((json) => {
        setPosts([...posts, ...json])
      })
    );
  }


  useEffect(() => {
    getPosts(page);
  }, [page]);

  return (
    <>
      <div className="home">
        <main>
          {posts.map( item => (
            <Post 
              key={item.id} 
              img={item._embedded['wp:featuredmedia'][0].source_url}
              title={item.title.rendered} 
              author={item._embedded.author[0].name}
              date={item.date}
              excerpt={item.excerpt.rendered}
              slug={item.slug}
            />
          ))}

          <button className='btn' onClick={() => setPage(page + 1)}>
            Carregar mais..
          </button>
        </main>

        <aside className='home__sidebar'>
          <Newsletter />
        </aside>
      </div>
    </>
  )
}