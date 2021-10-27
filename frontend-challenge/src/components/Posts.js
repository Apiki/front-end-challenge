import React, { useEffect, useState } from 'react';
import '../style/Posts.css';
import { v4 } from 'uuid';

import PostCard from './PostCard';
import basicFetch from '../api/basicFetch';
import Loading from './Loading';


export default function Posts() {
  const [blogApi, setBlogApi] = useState([]);

  // X-WP-Total      X-WP-TotalPages

  const URL = 'https://blog.apiki.com/';
  const END_POINT = 'wp-json/wp/v2/posts?_embed&categories=518';
  let number = 1;
  let API_PAGE = `&page=${number}`

  const data = async () => await basicFetch(URL, END_POINT, API_PAGE)
    .then((response) => response)
    .catch((err) => err);

  useEffect(() => {
    data().then((res) => setBlogApi(res));
  }, []);

  const loadNewPosts = () => {
    data().then((res) => setBlogApi(res));
  }


  const newCard = blogApi.map((curr) => {
    return <PostCard key={v4()} props={ curr } />
  });

  return (
    <main className="main flex">
      <h1 id="main--title">Postagens</h1>
      <div className="main--container flex">{ blogApi.length > 0 ? newCard : <Loading /> }</div>
      <div>
        <button onClick={() => loadNewPosts()} className="main--button">Carregar mais ...</button>
      </div>
    </main>
  )
}
