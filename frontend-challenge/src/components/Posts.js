import React, { useEffect, useState } from 'react';
import '../style/Posts.css';
import { v4 } from 'uuid';

import PostCard from './PostCard';
import basicFetch from '../api/basicFetch';
import Loading from './Loading';

const URL = 'https://blog.apiki.com/';
const END_POINT = 'wp-json/wp/v2/posts?_embed&categories=518';

export default function Posts() {
  const [blogApi, setBlogApi] = useState([]);

  const data = async () => await basicFetch(URL, END_POINT)
    .then((response) => response)
    .catch((err) => err);


  useEffect(() => {
    // com função iife
    // (async function func() {
    //   const resolve = await data();
    // }())

    data().then((res) => setBlogApi(res));
  }, []);


  const newCard = blogApi.map((curr) => {
    return <PostCard key={v4()} props={ curr } />
  });

  return (
    <main className="main flex">
      {console.log(blogApi)}
      <h1 id="main--title">Postagens</h1>
      <div className="main--container flex">{ blogApi.length > 0 ? newCard : <Loading /> }</div>
    </main>
  )
}
