import React, { useContext, useEffect } from "react";
import { ContextAplication } from "../../context/ContextAplication";
import "./index.css";

const NewsCards = () => {
  const { getHomePage, Home, numberPages } = useContext(ContextAplication);

  useEffect(() => {
    getHomePage();
    numberPages();
  }, []);

  return (
    <div className="container">
      {Home.length === 0 && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
      {Home.map((item, idx) => {
        const title = item.title.rendered;
        const image =
          item._embedded["wp:featuredmedia"][0].media_details.sizes.full
            .source_url;
        const alt = item._embedded["wp:featuredmedia"][0].alt_text;
        const slug = item.slug;

        return (
          <div key={idx} className="cards">
            <h1>{title}</h1>
            <img src={image} alt={alt}></img>
            <a href={`https://blog.apiki.com/${slug}`} target="_blanck">
              <h3>Leia mais sobre a notícia.</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCards;
