import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Headers } from "../Components/Headers";
import { Main } from "../Components/Main";
import { PagePostContext } from "../Providers/PagePost";

export const Postagem = () => {
  const { slug } = useParams();
  const { setSlug, setInfoPostagem, infoPostagem } =
    useContext(PagePostContext);

  const elemento = () => {
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then((response) => {
        setInfoPostagem(response.data[0]); /* 
        console.log(response.data[0]); */
      });
  };

  useEffect(() => {
    elemento();
  }, elemento); /* 
  console.log(infoPostagem._embedded["wp:featuredmedia"][0].source_url); */
  return (
    <>
      <Headers />
      <Main pagePostagem />
    </>
  );
};
