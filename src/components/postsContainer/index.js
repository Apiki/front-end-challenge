import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { requestPosts } from '../../services/fetchAPI';
import PostCard from '../postCard';

export default function PostsContainer() {
  const { posts, setPosts } = useContext(AppContext);
  const [page, setPage] = useState(1);



  useEffect(() => {
    const getPosts = async () => {
      const request = await requestPosts(page)
      setPosts(request)
    }

    getPosts();
  }, [page, setPosts])

  return (
    <main>
      {posts.data && posts.data.map((post, i) => (
        <PostCard key={i} info={
          {
            image: post["_embedded"]["wp:featuredmedia"][0]["source_url"].replace('.png', '-350x250.png'),
            title: post.title.rendered,
            slug: post.slug,
            author: post["yoast_head_json"]["twitter_misc"]["Escrito por"]
          }

        } />
      ))}
      <button onClick={() => setPage(page + 1)}>Carregar mais...</button>
    </main>
  )
}
