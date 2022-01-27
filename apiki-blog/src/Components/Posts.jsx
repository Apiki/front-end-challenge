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

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return <div>
    {posts.map((post) => {
      return (
        <div>
          <h2> {post.title.rendered}</h2>
        </div>)
    })}
  </div>;
}
