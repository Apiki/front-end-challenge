import React, { useEffect, useState } from "react";
import { getPosts } from "../Services/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const postsFromApi = await getPosts();
      setPosts(postsFromApi)
    }
    fetchApi()
  }, [])

  return <div>
    {posts.map((post) => {
      return (
        <div key={post.id}>
          <a href={post.slug}>
          <h2> {post.title.rendered}</h2>
          </a>
          <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="img" />
        </div>)
    })}
  </div>;
}
