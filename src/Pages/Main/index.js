import { useEffect, useState } from "react";
import "./style.css";
import Post from "../../Components/Post";
import { basicFetch, fetchPages } from "../../API";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [disabledNext, setDisabledNext] = useState(false);

  const handleNext = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    const correctedPage = page + 1;
    const newTotal = Number(totalPages) + 1;
    if (correctedPage >= newTotal) {
      setDisabledNext(true);
    } else {
      getNewPages(correctedPage);
    }
    setPage(page + 1);
  };

  const getData = async () => {
    const data = await basicFetch(page);
    setPosts(data[0]);
    setTotalPages(data[1]);
  };

  const getNewPages = async (page) => {
    const data = await fetchPages(page);
    setPosts(data);
  };

  useEffect(async () => {
    getData();
    setPage(1);
    setDisabledNext(false);
  }, []);

  return (
    <main>
      <h1 className="main__title">
        Navegue pelos melhores posts do nosso blog!
      </h1>
      <section className="main__posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
      <section className="main__buttons-box">
        <button
          disabled={disabledNext}
          className="main__button"
          onClick={(event) => {
            handleNext(event);
          }}
        >
          Próxima Página
        </button>
      </section>
    </main>
  );
};
export default Main;
