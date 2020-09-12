import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import axios from "../../services/api";
import Button from "../../components/Button";
import "react-block-ui/style.css";
import "./styles.css";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  //Função responsável por fazer a chamada dos 10 primeiros post.
  const fetchPosts = () => {
    axios
      .get("/posts?_embed&categories=518")
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((err) => setError(true));
  };

  //pagina 12 array 6 sem wp:featuredmedia. Adicionar condição ao fazer map para nao quebrar aplicação;
  //Função responsável por chamar o restante dos posts.
  const fetchNextsPosts = (page) => {
    console.log(page);
    axios
      .get(`posts?_embed&categories=518&page=${page}`)
      .then((res) => {
        const currentPage = res.headers["x-wp-totalpages"];
        if (+currentPage === pageNumber) {
          setDisabled(true);
        } else {
          setPageNumber((prevState) => prevState + 1);
        }
        setPostsData((prevState) => [...prevState, ...res.data]);
      })
      .catch((err) => setError(true));
  };

  //Vai chamar a função fetchPosts toda vez que a pagina RECARREGAR.
  useEffect(() => {
    fetchPosts();
  }, []);

  if (postsData.length === 0 && !error) return "Loading...";

  return (
    <main className="main-container">
      <div className="container-posts">
        {postsData.map((post) =>
          post._embedded["wp:featuredmedia"] ? (
            <Post post={post} key={post._embedded["wp:featuredmedia"][0].id} />
          ) : null
        )}
      </div>

      {!error && (
        <Button
          type="button"
          disabled={disabled}
          onClick={() => fetchNextsPosts(pageNumber)}
        >
          {" "}
          Carregar mais....
        </Button>
      )}
      {error && <h4>Erro ao carregar posts! Tente novamente!</h4>}
    </main>
  );
};

export default Posts;
