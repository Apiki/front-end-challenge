import { useEffect, useState } from "react";
import "./style.css";
import Post from "../../Components/Post";
import { basicFetch, fetchPages } from "../../API";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    const data = await basicFetch();
    setPosts(data[0]);
    setTotalPages(data[1]);
  };

  const getNewPages = async (page) => {
    const data = await fetchPages(page);
    setPosts(data);
  };

  useEffect(async () => {
    getData();
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
        onClick={() => {
          getNewPages(page);
          setPage(page + 1);
          console.log(page);
        }}
      >
        Carregar Mais
      </button>
    </main>
  );
};

export default Main;
