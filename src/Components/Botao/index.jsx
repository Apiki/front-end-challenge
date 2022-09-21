import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../Providers/Posts";
import { Button_Index, Button_Postagem_Voltar } from "./styled";

export const Button = ({ children, carregar, voltar }) => {
  const history = useHistory();
  const { AddPosts } = useContext(PostContext);

  return (
    <>
      {carregar && (
        <>
          <Button_Index
            onClick={() => {
              AddPosts();
            }}
          >
            {children}
          </Button_Index>
        </>
      )}

      {voltar && (
        <>
          <Button_Postagem_Voltar
            onClick={() => {
              history.push("/");
            }}
          >
            {children}
          </Button_Postagem_Voltar>
        </>
      )}
    </>
  );
};
