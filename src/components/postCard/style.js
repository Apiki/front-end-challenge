import styled from "styled-components";
import palet from "../../services/palet";

export const Card = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 60px;
  margin-bottom: 24px;
  align-items: flex-start;
  justify-content: flex-start;
   
  img {
  max-width: 24%;
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;
  }

  div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 8px;
  cursor: pointer;

    h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    max-width: 400px;
    color: ${palet.secondary};
    }

    p {
      color: ${palet.primary};
      font-size: 12px;
      margin-top: 4px;
      max-width: 400px;
    }
  }

`;

export const Description = styled.p`
  font-weight: 500;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;