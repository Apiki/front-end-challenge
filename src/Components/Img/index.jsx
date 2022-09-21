import { useHistory } from "react-router-dom";
import Logo from "../../Img/logo-apiki.png";
import { Img_Card_Index, Img_Header_Logo, Img_Postagem } from "./styled";

export const Img = ({
  card,
  elementos,
  postagem,
  infoPostagem,
  logo,
  click,
}) => {
  const history = useHistory();
  return (
    <>
      {/* Logo do Header */}
      {logo && (
        <>
          <Img_Header_Logo onClick={() => history.push(`/`)} srcSet={Logo} />
        </>
      )}

      {/* Imagem em destaque dos cards */}
      {card && (
        <>
          <Img_Card_Index
            onClick={() => history.push(`/post/${click}`)}
            srcSet={elementos._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}

      {/* Imagem em destaque da pasta de postagem */}
      {postagem && (
        <>
          <Img_Postagem
            srcSet={infoPostagem._embedded["wp:featuredmedia"][0].source_url}
          />
        </>
      )}
    </>
  );
};
