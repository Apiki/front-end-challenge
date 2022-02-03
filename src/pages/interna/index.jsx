import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import "./style/style.css";

const Interna = () => {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPostagens = async () => {
      const response = await axios.get(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + params.slug
      );

      setPost(response.data);
    };

    fetchPostagens();
  }, []);

  if (post.length > 0) {
    const imagem = post[0]._embedded["wp:featuredmedia"][0].source_url;
    const altTitle = post[0]._embedded["wp:featuredmedia"][0].alt_text;
    const textoPostagem = post[0].content.rendered;
    const titulo = post[0].title.rendered;

    console.log();

    setTimeout(() => {
      const textPostagemContainer = document
        .querySelector("#single")
        .querySelector(".post__info");

      textPostagemContainer.innerHTML = textoPostagem;
    }, 300);

    return (
      <>
        <Header single={true} />

        <div id="single">
          <div className="left-container">
            <img src={imagem} alt={altTitle} />
            <div className="title">
              <h1>{titulo}</h1>
            </div>
          </div>
          <div className="post__info">
            <div className="post__info__header"></div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Interna;
