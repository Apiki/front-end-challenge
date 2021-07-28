import { CardContainer, CardContent, ImgDiv } from "./styles";

import imgExemple from '../../assets/img/exemple.jpg';

export function Card() {

  return (
    <CardContainer>
      <ImgDiv>
        <img src={imgExemple} alt="Imagem de exemplo" />
      </ImgDiv>
      <CardContent>
        <h3>Título</h3>
        <p>Breve descrição...</p>
      </CardContent>
    </CardContainer>
  )
}