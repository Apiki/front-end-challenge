import styled from "styled-components";

export const Main_index = styled.main`
  @media (min-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 2%;
    box-sizing: border-box;
    margin-bottom: 40px;
  }
`;

export const Main_index_div = styled.div`
  @media (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 15vh 0 20px 0;
    background-color: rgb(70, 66, 71, 0.2);
    padding: 10px 10px;
    border-radius: 10px;
    border: rgb(70, 66, 71, 0.1);
    border-style: outset;
  }
`;

export const Main_H1 = styled.h1`
  @media (min-width: 760px) {
    font-size: 1.8em;
  }
`;

export const Main_H1_titulo = styled.h1`
  @media (min-width: 760px) {
    text-align: center;
    margin: 12vh 0 -12vh 0;
    padding: 0 0 10px 0;
    width: 100%;
    background-color: rgb(232, 95, 12, 0.8);
    border-radius: 10px;
    color: white;
  }
`;

export const Main_Postagem = styled.main`
  @media (min-width: 760px) {
    padding: 12vh 10% 40px 10%;
  }
`;

export const Main_Postagem_div = styled.div`
  @media (min-width: 760px) {
    border: 1px solid rgb(70, 66, 71, 0.1);
    border-radius: 10px;
    padding: 20px 40px;
    background-color: rgb(70, 66, 71, 0.2);

    box-sizing: border-box;
  }
`;

export const Main_Postagem_title = styled.div`
  @media (min-width: 760px) {
    display: flex;
    h1 {
      width: 100%;
      text-align: center;
      color: #e34920;
      font-size: 2.2em;
    }
  }
`;

export const Main_Postagem_Content = styled.div`
  @media (min-width: 760px) {
    box-sizing: border-box;
    p {
      text-align: justify;
      font-size: 0.9em;
    }

    h2 {
      color: #d9611e;
    }

    h3 {
      color: #ff6a17;
    }

    img {
      width: 100%;
    }

    div,
    video {
      box-sizing: border-box;
      width: 30%;
      height: 100%;
    }
  }
`;
