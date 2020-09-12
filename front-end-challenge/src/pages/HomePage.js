import React, { useState, useEffect } from 'react';
import { fetchBaseUrl } from '../services/apikiAPI'
import Loading from '../components/Loading';
import PostCard from '../components/PostCard';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBaseUrl()
      .then((response) => {
        for (let pair of response.headers.entries()) {
          if (pair[0] === 'x-wp-totalpages') setTotalPages(pair[1]);
        }
        return response.json();
      })
      .then((json) => Promise.resolve(json))
      .then((posts) => {
        setPosts([ ...posts ]);
        setLoading(false);
      })
  }, []);

  if (loading) return <Loading/>
  console.log(totalPages);
  return (
    <div className="HomePage container">

      <h1 className="title text-center">Blog APIki</h1>
      <div className="row mb-2">
      { // Listagem dos 10 primeiros posts.
        posts.map((elem) => <PostCard key={elem.id} elem={elem}/> ) 
      }
      </div>

      <div className="row">

      </div>

    </div>
  );
}

export default HomePage;
