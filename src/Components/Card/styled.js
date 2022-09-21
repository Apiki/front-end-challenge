import styled from "styled-components";

export const Card_Index = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 2px solid rgb(204, 204, 204, 2);
    box-sizing: border-box;

    border-radius: 10px;

    width: 100%;

    margin-bottom: 30px;
    padding-bottom: 20px;

    background-color: #ffffff;
    :hover {
      border: 2px solid rgb(232, 95, 12, 0.8);
    }

    h1 {
      margin: 0 15px 20px 15px;
      font-size: 1.2em;
      height: 25%;
    }

    p {
      margin: 0 15px 10px 15px;
      font-size: 0.8em;
      min-height: 50px;
      text-align: justify;
    }
  }

  @media (min-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 2px solid rgb(204, 204, 204, 2);
    box-sizing: border-box;

    border-radius: 10px;

    width: 32%;

    margin-bottom: 30px;
    padding-bottom: 20px;

    background-color: #ffffff;
    :hover {
      border: 2px solid rgb(232, 95, 12, 0.8);
    }

    h1 {
      margin: 0 15px 20px 15px;
      font-size: 1.2em;
      height: 25%;
    }

    p {
      margin: 0 15px 10px 15px;
      font-size: 0.8em;
      min-height: 50px;
      text-align: justify;
      height: 110px;
    }
  }
`;

export const Card_Link = styled.div`
  @media (min-width: 320px) {
    position: static;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 100%;
    a {
      width: 100%;
      margin-left: 15px;
      text-decoration: none;
      color: black;
      font-weight: 600;
      :hover {
        color: rgb(0, 0, 0, 0.8);
      }
    }
  }

  @media (min-width: 760px) {
    position: static;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 100%;
    a {
      width: 100%;
      margin-left: 15px;
      text-decoration: none;
      color: black;
      font-weight: 600;
      :hover {
        color: rgb(0, 0, 0, 0.8);
      }
    }
  }
`;
