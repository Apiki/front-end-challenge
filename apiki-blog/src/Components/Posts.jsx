import React, { useEffect, useState } from "react";
import { getPosts, getHeaders } from "../Services/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchApi() {
      const postsFromApi = await getPosts(page);
      setPosts(postsFromApi)
      setHeaders(await getHeaders())
    }
    fetchApi()
  }, [page])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return <div>
    {posts.map((post) => {
      return (
        <div key={post.id}>
          <a href={post.slug}>
          <h2> {post.title.rendered}</h2>
          </a>
          {post._embedded["wp:featuredmedia"] &&
           <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="img" width="350" />}
    </div>)
    })}
    <button 
      type="button" 
      onClick={ () => setPage(page + 1) }
      disabled={ page === 17 ? true : false }
    > 
      Mais noticias 
      </button>
  </div>;
}
