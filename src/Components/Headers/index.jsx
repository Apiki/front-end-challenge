import { Header_styled } from "./styled";
import Logo from "../../Img/logo-apiki.png";

export const Headers = ({}) => {
  return (
    <>
      <Header_styled>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Postagens</li>
            <li>Login</li>
            <li>Cadastrar</li>
          </ul>
        </div>
      </Header_styled>
    </>
  );
};
