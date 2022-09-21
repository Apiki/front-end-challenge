import Logo from "../../Img/logo-apiki.png";
import { Img_Card_Index } from "./styled";

export const Img = ({ card, elementos, postagem, infoPostagem, logo }) => {
  /* 
  const imgs = elementos._embedded["wp:featuredmedia"][0].source_url; */
  return (
    <>
      {logo && (
        <>
          <Img_Card_Index
            srcSet={infoPostagem._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}
      {card && (
        <>
          <Img_Card_Index
            srcSet={elementos._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}

      {postagem && (
        <>
          <Img_Card_Index
            srcSet={infoPostagem._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}
    </>
  );
};
