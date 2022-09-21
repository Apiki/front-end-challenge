import styled from "styled-components";

export const Button_Index = styled.button`
  @media (min-width: 320px) {
    padding: 10px 20px;
    border: 2px solid rgb(232, 95, 12, 0.8);
    border-radius: 10px;
    background-color: rgb(232, 95, 12, 0.8);
    color: white;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    :hover {
      font-weight: 800;
      border: 3px solid rgb(232, 95, 12, 0.8);
    }
  }

  @media (min-width: 760px) {
    padding: 10px 20px;
    border: 2px solid rgb(232, 95, 12, 0.8);
    border-radius: 10px;
    background-color: rgb(232, 95, 12, 0.8);
    color: white;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    :hover {
      font-weight: 800;
      border: 3px solid rgb(232, 95, 12, 0.8);
    }
  }
`;

export const Button_Postagem_Voltar = styled.button`
  @media (min-width: 320px) {
    margin-top: 40px;
    padding: 5px 10px;
    border: 2px solid rgb(232, 95, 12, 0.4);
    border-radius: 10px;
    background-color: rgb(232, 95, 12, 0.5);
    color: white;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    :hover {
      border: 2px solid rgb(232, 95, 12, 0.8);
      background-color: rgb(232, 95, 12, 0.9);
    }
  }

  @media (min-width: 760px) {
    margin-top: 40px;
    padding: 10px 20px;
    border: 2px solid rgb(232, 95, 12, 0.4);
    border-radius: 10px;
    background-color: rgb(232, 95, 12, 0.5);
    color: white;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    :hover {
      border: 2px solid rgb(232, 95, 12, 0.8);
      background-color: rgb(232, 95, 12, 0.9);
    }
  }
`;
