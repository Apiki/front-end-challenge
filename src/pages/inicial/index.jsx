import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Post from "../../components/Post";
import "./style/style.css";

const Inicial = () => {
  const postsURL =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
  const [postagens, setPostagens] = useState([]);
  const [totalPostagens, setTotalPostagens] = useState();
  const [totalPaginas, setTotalPaginas] = useState();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [categoria, setCategoria] = useState();

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
    }
  };

  useEffect(() => {
    const fetchPostagens = async () => {
      const response = await axios.get(postsURL);

      setCategoria(response.data[0]._embedded["wp:term"][0][0].slug);
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
        <h2>
          {totalPostagens} postagens na categoria{" "}
          <span className="text-underlined">{categoria}</span>
        </h2>
        <p>
          Página <b>{paginaAtual}</b> de {totalPaginas}
        </p>
      </section>

      <section id="container">
        {postagens.map((postagem, index) => (
          <Post key={index} data={postagem} />
        ))}
      </section>

      <div id="pagination">
        <ul>
          <li>
            <a href="#" className="next" onClick={handleMorePosts}>
              Carregar Mais
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Inicial;
