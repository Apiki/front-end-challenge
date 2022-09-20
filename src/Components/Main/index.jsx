import { useContext } from "react";
import { PostContext } from "../../Providers/Posts";
import { Card } from "../Card";
import { Link } from "../Link";
import { Main_index, Main_index_div } from "./styled";

export const Main = ({ index }) => {
  const { post } = useContext(PostContext);

  console.log(post.length);

  return (
    <>
      {index && (
        <>
          <Main_index>
            {/* <div>
              <h1>Empresa especializada em WordPress</h1>
              <p>
                A Apiki é a primeira empresa especializada em WordPress do
                Brasil. Com mais de 13 anos de existência, fazemos tudo que seu
                projeto em WordPress precisa para alcançar o sucesso.
              </p>
            </div> */}
            <Main_index_div>
              {post.length === 0 ? (
                <>
                  <h1>Carregando...</h1>
                </>
              ) : (
                <>
                  {post.map((elemento) => {
                    /* console.log(elemento._embedded["wp:featuredmedia"][0].link); */
                    return <Card elemento={elemento}></Card>;
                  })}
                </>
              )}
            </Main_index_div>
            <Link carregar>Carregar mais...</Link>
          </Main_index>
        </>
      )}
    </>
  );
};
