import React, { useEffect, useState } from "react";
import { getPosts } from "../Services/api";
import Button from "./Button";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [headers, setHeaders] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApi() {
      const postsFromApi = await getPosts(page);
      setPosts(postsFromApi[0]);
      setHeaders(postsFromApi[1]);
    }
    fetchApi()
  }, [page])

  useEffect(() => {
    if (headers) {
      setLoading(false)
    }
  }, [headers])

  return (
    <main>
      {loading ? "Carregando..." : posts.map((post) => {
        return (
          <div key={post.id}>
          <a href={post.slug}>
          <h2> {post.title.rendered}</h2>
          </a>
          {post._embedded["wp:featuredmedia"] &&
          <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="img" width="350" />}
          </div>)
        }
        )
      }
      <Button page={page} headers={headers} setPage={setPage} />
    </main>
  )
}
