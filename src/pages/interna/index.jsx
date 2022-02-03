import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
    const textoPostagem = post[0].content.rendered;
    const titulo = post[0].title.rendered;
    const autor = post[0]._embedded.author[0];

    setTimeout(() => {
      const textPostagemContainer = document
        .querySelector("#post")
        .querySelector(".post__content");

      const imagemContainer = document
        .querySelector("#post")
        .querySelector(".post__image");

      imagemContainer.style.background = "url(" + imagem + ")";

      textPostagemContainer.innerHTML = textoPostagem;
    }, 300);

    return (
      <>
        <Header single={true} />

        <div id="post">
          <div className="post__image">
            <div className="title">
              <h1>{titulo}</h1>
            </div>
          </div>
          <div className="post__info">
            <div className="post__info__header">
              {/* <h2>{titulo}</h2> */}
              {autor.avatar_urls != undefined ? (
                <a
                  href={autor.link ? autor.link : {}}
                  className="post__info__author"
                  target="_blank"
                  title={"Publicado por " + autor.name}
                >
                  <img src={autor.avatar_urls[48]} alt="" /> Publicado por{" "}
                  {autor.name}
                </a>
              ) : null}
            </div>
            <div className="post__content"></div>
          </div>
        </div>

        <Footer single={true} />
      </>
    );
  } else {
    return null;
  }
};

export default Interna;
