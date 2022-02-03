import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import api from "../../services/api";
import "./style/style.css";

const Inicial = () => {
  const [postsURL, setPostsURL] = useState(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const [postagens, setPostagens] = useState([]);
  const [totalPostagens, setTotalPostagens] = useState();
  const [totalPaginas, setTotalPaginas] = useState();
  const [paginaAtual, setPaginaAtual] = useState(1);

  const handleMorePosts = (e) => {
    // e.preventDefault();
    if (paginaAtual <= totalPaginas) {
      setPaginaAtual(paginaAtual + 1);

      axios
        .get(
          `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${paginaAtual}`
        )
        .then((response) => {
          setPostagens(response.data);
        });

      console.log(postagens);
    }
  };

  useEffect(() => {
    const fetchPostagens = async () => {
      const response = await axios.get(postsURL);
      setPostagens(response.data);
      setTotalPostagens(response.headers["x-wp-total"]);
      setTotalPaginas(response.headers["x-wp-totalpages"]);
    };

    fetchPostagens();
  }, []);

  return (
    <div id="main">
      <Header />

      <section id="site-intro">
        <h2>{totalPostagens} postagens nesta categoria</h2>
        <p>
          Página <b>{paginaAtual}</b> de {totalPaginas}
        </p>
      </section>

      <section id="container">
        {postagens.map((postagem, index) => (
          <Post key={index} data={postagem} />
        ))}
      </section>

      <div id="navigation">
        <ul>
          <li>
            <a href="#" className="next" onClick={handleMorePosts}>
              Carregar Mais
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inicial;
