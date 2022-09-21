import { useContext } from "react";
import { PagePostContext } from "../../Providers/PagePost";
import { PostContext } from "../../Providers/Posts";
import { Button } from "../Botao";
import { Card } from "../Card";
import { Img } from "../Img";
import {
  Main_H1,
  Main_H1_titulo,
  Main_index,
  Main_index_div,
  Main_Postagem,
  Main_Postagem_Content,
  Main_Postagem_div,
  Main_Postagem_title,
} from "./styled";
import parse from "html-react-parser";

export const Main = ({ index, pagePostagem }) => {
  const { post } = useContext(PostContext);

  const { infoPostagem } = useContext(PagePostContext);

  return (
    <>
      {/* Main da Page Index */}
      {index && (
        <>
          <Main_index>
            {post.length != 0 && <Main_H1_titulo>Postagens</Main_H1_titulo>}
            <Main_index_div id="cards">
              {/* Caso o Array estiver vazio ele retorna Carregando, se tiver conteudo, os Cards renderiza */}
              {post.length === 0 ? (
                <>
                  <Main_H1>Carregando...</Main_H1>
                </>
              ) : (
                <>
                  {post.map((elemento) => {
                    return <Card key={elemento.id} elemento={elemento}></Card>;
                  })}
                </>
              )}
            </Main_index_div>
            {post.length != 0 && (
              <>
                <Button carregar>Carregar mais...</Button>
              </>
            )}
          </Main_index>
        </>
      )}

      {infoPostagem.length != 0 && pagePostagem && (
        <>
          <Main_Postagem>
            <Main_Postagem_div>
              {console.log(infoPostagem)}
              <div>
                <Img postagem infoPostagem={infoPostagem} />
              </div>
              <Main_Postagem_title>
                <h1>{infoPostagem.title.rendered}</h1>
              </Main_Postagem_title>
              <Main_Postagem_Content>
                {parse(infoPostagem.content.rendered)}
              </Main_Postagem_Content>
              <div>
                <Button voltar>Voltar</Button>
              </div>
            </Main_Postagem_div>
          </Main_Postagem>
        </>
      )}
    </>
  );
};
