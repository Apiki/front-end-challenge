import React from "react";
import { useParams } from "react-router-dom";
import '../css/reset.css'
import "../css/Noticias.css";

const Noticias = () => {
  console.log(useParams());

  const { slug } = useParams();

  var [Item, getItem, mundo] = React.useState([]);

  React.useEffect(() => {
    Document.title = "Noticias de apiki";
    getCard();
  }, []);

  const getCard = async () => {
    const data = await fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
    );
    const apiItem = await data.json();
    console.log(apiItem);

    mundo = apiItem;
    getItem(apiItem);

    console.log(Item);
  };

  return (
    <div className="padding">
      {Item.map((item) => (
        <div>
          <div className="Noticiablock">
            <h1 className="Noticiatitulo">{item.title.rendered}</h1>
            <h3 className="NoticiaHeadline">
              {item.excerpt.rendered.replace(/<[^>]+>/g, "")}
            </h3>
          </div>          
          <div className="conteudo" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
        </div>
      ))}
    </div>
  );
};

export default Noticias;
