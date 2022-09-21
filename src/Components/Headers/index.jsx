import { Header_styled } from "./styled";
import Logo from "../../Img/logo-apiki.png";
import { Img } from "../Img";
import { useHistory } from "react-router-dom";

export const Headers = ({ headerPostagem }) => {
  const history = useHistory();

  const home = () => {
    history("/");
  };
  return (
    <>
      <Header_styled>
        <div>
          <Img logo />
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              {headerPostagem ? (
                <>
                  <a href="/">Postagens</a>
                </>
              ) : (
                <>
                  <a href="#cards">Postagens</a>
                </>
              )}
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Cadastrar</a>
            </li>
          </ul>
        </div>
      </Header_styled>
    </>
  );
};
