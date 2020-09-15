import React, { useEffect, useContext } from "react";
import { ContextAplication } from "./context/ContextAplication";

const App = () => {
  const { getHomePage, Home } = useContext(ContextAplication);

  console.log(Home);

  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <div>
      {Home &&
        Home.map(
          (item, idx) => {
            const title = item.title.rendered;
            const image = item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
            const link =  item.link;
            const slug = item.slug;
            return (
              <div key={idx}>
                <h3>{title}</h3>
                <a href={link}>{slug}</a>
                <img src={image} width="400px" height="200px"></img>
              </div>
            );
          }
        )}
    </div>
  );
};

export default App;
