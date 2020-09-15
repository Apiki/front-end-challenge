import React, { useContext, useEffect } from "react";
import { ContextAplication } from "../../context/ContextAplication";

const InternalNews = () => {
  const { Internal, getInternalPage } = useContext(ContextAplication);

  useEffect(() => {
    getInternalPage();
  }, []);

  return (
    <div>
      {Internal.length === 0 && <div>Carregando...</div>}
      {Internal.map((item, idx) => {
          const title = item.title.rendered;
          const image = item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
          const alt = item._embedded["wp:featuredmedia"][0].alt_text;
          
          return (
            <div key={idx} className="test">
              <h1>{title}</h1>
              <img src={image} alt={alt} width="400px" height="200px"></img>
            </div>
          );
        })
      }
    </div>
  );
};

export default InternalNews;
