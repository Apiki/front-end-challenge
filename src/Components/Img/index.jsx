import Logo from "../../Img/logo-apiki.png";
import { Img_Card_Index } from "./styled";

export const Img = ({ card, elementos, link }) => {
  /* 
  const imgs = elementos._embedded["wp:featuredmedia"][0].source_url; */
  return (
    <>
      {card && (
        <>
          <Img_Card_Index
            srcSet={elementos._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}
    </>
  );
};
