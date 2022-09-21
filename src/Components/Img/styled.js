import styled from "styled-components";

export const Img_Header_Logo = styled.img`
  @media (min-width: 760px) {
    margin-left: 30px;
    min-height: 1.1em;
    max-height: 100%;
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width: 759px) {
    margin-left: 30px;
    min-height: 1.1em;
    max-height: 100%;
    cursor: pointer;
  }
`;

export const Img_Card_Index = styled.img`
  @media (min-width: 760px) {
    box-sizing: border-box;
    width: 100%;
    padding: 6px;
    background-color: rgb(0, 0, 0, 0.8);
    border: 1px solid rgb(0, 0, 0, 0.8);
    border-radius: 10px 10px 0 0;
    cursor: pointer;
  }
`;

export const Img_Postagem = styled.img`
  @media (min-width: 760px) {
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    border: 2px solid black;
  }
`;
