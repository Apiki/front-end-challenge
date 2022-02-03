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
    const permalink = post[0].link;

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

              <ul className="post__info__header__share-buttons">
                <li>
                  <a
                    className="share-facebook"
                    href={
                      "https://www.facebook.com/sharer/sharer.php?u=" +
                      permalink
                    }
                    title="Share on Facebook"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="share-twitter"
                    href={
                      "https://twitter.com/intent/tweet?url=" +
                      permalink +
                      "&text=" +
                      titulo
                    }
                    title="Tweet this"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="share-pinterest"
                    href={
                      "//pinterest.com/pin/create/%20button?url=" + permalink
                    }
                    target="_blank"
                    title="Pin it"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="share-linkedin"
                    href={
                      "http://www.linkedin.com/shareArticle?mini=true&url=" +
                      permalink +
                      "&title=" +
                      titulo
                    }
                    title="Share on Linkedin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="share-whatsapp"
                    href={
                      "https://api.whatsapp.com/send?text=" +
                      titulo +
                      ": " +
                      permalink
                    }
                    data-action="share/whatsapp/share"
                    title="Share on Whatsapp"
                    target="_blank"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="share-email"
                    href={
                      "mailto:type%20email%20address%20here?subject=" +
                      titulo +
                      " de " +
                      autor.name +
                      "&body=" +
                      titulo +
                      " - " +
                      permalink
                    }
                    title="Email to a friend/colleague"
                    target="_blank"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
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
