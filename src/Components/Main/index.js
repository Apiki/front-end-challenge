import { useEffect, useState } from "react";
import "./style.css";
import Post from "../Post";
import basicFetch from "../../API";

const Main = () => {
  const [posts, setPosts] = useState([]);
  // const [pages, setPages] = useState(2);
  const url =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

  const getFirstData = async () => {
    const data = await basicFetch(url);
    setPosts(data);
  };

  // const fetchPages = async (url, page) => {
  //   const requisition = await fetch(`${url}&page=${page}`);
  //   const json = await requisition.json();
  //   setPosts(json, ...posts);
  //   console.log(posts);
  // };

  useEffect(async () => {
    getFirstData();
  }, []);

  return (
    <main>
      <h1 className="main__title">Página inicial</h1>
      <h2 className="main__subtitle">
        Navegue pelos melhores posts do nosso blog!
      </h2>
      <section className="main__posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
      <button
        className="main__button"
        // onClick={() => {
        //   setPages(pages + 1);
        //   fetchPages(url, pages);
        // }}
      >
        Carregar Mais
      </button>
    </main>
  );
};

export default Main;
