import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../API";
import "./style.css";

const Intern = () => {
  const params = useParams();
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetchPost(params.slug);
    setItem(data);
  };

  useEffect(async () => {
    await fetchItem();
  }, []);

  console.log(item);

  if (item.length > 0) {
    const image = item[0]._embedded["wp:featuredmedia"];
    const content = item[0].content.rendered;
    const subtitle = item[0].excerpt.rendered
      .replace("<p>", "")
      .replace("</p>", "");
    const title = item[0].title.rendered;
    const author = item[0]._embedded.author[0];
    const date = item[0].date.slice(0, 10).replaceAll("-", "/");

    setTimeout(() => {
      const textBox = document.querySelector(".intern__content");

      textBox.innerHTML = content;
    }, 350);

    return (
      <>
        <section className="intern">
          <section className="intern__info">
            <h1 className="intern__info__title">{title}</h1>
            <p className="intern__info__subtitle">{subtitle}</p>
            <section className="intern__info__header">
              {author.avatar_urls != undefined ? (
                <div className="intern__info__author">
                  <a
                    href={author.link ? author.link : {}}
                    className="intern__info__link"
                    target="_blank"
                    rel="noreferrer"
                    title={"Publicado por " + author.name}
                  >
                    <img
                      src={author.avatar_urls[48]}
                      alt=""
                      className="intern__info__icon"
                    />{" "}
                    Publicado por {author.name}
                  </a>
                </div>
              ) : (
                <section className="intern__info__author">
                  <img
                    className="intern__info__icon"
                    src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png"
                    alt="autor desconhecido"
                  />
                  <p className="intern__info__text">Sem autor</p>
                </section>
              )}
              <p className="intern__info__date">Publicado em {date}</p>
            </section>
          </section>
          <figure className="intern__image--box">
            {image ? (
              <img
                src={image[0].source_url}
                alt={image[0].alt_text}
                className="intern__image"
              />
            ) : (
              <img
                src="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
                alt="Sem imagem"
              />
            )}
          </figure>
          <section className="intern__content"></section>
        </section>
      </>
    );
  } else {
    return <h1></h1>;
  }
};

export default Intern;
