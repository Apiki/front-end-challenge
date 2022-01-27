import React, { useEffect, useState } from "react";
import { getPosts } from "../Services/api";
import Button from "./Button";
import PostCard from "./PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [headers, setHeaders] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      const postsFromApi = await getPosts(page);
      setPosts(postsFromApi[0]);
      setHeaders(postsFromApi[1]);
    }
    fetchApi();
  }, [page])

  useEffect(() => {
    if (headers) {
      setLoading(false);
    }
  }, [headers])

  return (
    <section>
      { loading ? "Carregando..." : <PostCard posts={posts} /> }
      <div id="button-div">
        <Button text={"Voltar para o início"} page={0} setPage={setPage}/>
        <Button text={"Mais notícias"} page={page} headers={headers} setPage={setPage} />
      </div>
    </section>
  );
}
