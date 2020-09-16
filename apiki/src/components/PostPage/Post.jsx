import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { ContextAplication } from "../../context/ContextAplication";
import CreateCards from "../Cards/CreateCards";

const InternalNews = () => {
  const { getNewSlug, newInformation } = useContext(ContextAplication);
  const { slug } = useParams();

  useEffect(() => {
    getNewSlug(slug);
  }, []);

  return (
    <div className="container">
      {newInformation.length === 0 && <div>Carregando...</div>}
      {newInformation.map((item, idx) => {
        const title = item.title.rendered;
        const image = item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
        const alt = item._embedded["wp:featuredmedia"][0].alt_text;
        const content = parse(item.content.rendered);

        return (
          <div className="cards">
            <CreateCards
              key={idx}
              title={title}
              alt={alt}
              content={content}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InternalNews;
