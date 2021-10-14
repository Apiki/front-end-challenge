import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/apiHome';
import Cards from './Card';

function HomeComp() {
  const [posts, setPosts] = useState([]);

  const fetchApi = async () => {
    const result = await getPosts();
    setPosts(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (posts.length < 1) return 'Loading...'

  return (
    <>
      {/* <div>
        { posts.map((post) => (
          <p key={ post.id }>{ post.title.rendered }</p>
        ))}
      </div> */}
      <Cards props={ posts }/>
      Carregar mais...
    </>
  );
}

export default HomeComp;
