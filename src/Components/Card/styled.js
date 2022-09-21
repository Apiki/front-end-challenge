import styled from "styled-components";

export const Card_Index = styled.div`
  @media (min-width: 760px) {
    border: 1px solid #ccc;
    box-sizing: border-box;

    border-radius: 10px 10px 10px 10px;

    width: 32%;

    min-height: 450px;

    margin-bottom: 30px;
    padding-bottom: 20px;

    background-color: #e6e6e6;

    h1 {
      margin: 0 15px 20px 15px;
      font-size: 1.2em;
    }

    a {
      margin-left: 15px;
      text-decoration: none;
      color: black;
      font-weight: 600;
      :hover {
        color: rgb(0, 0, 0, 0.8);
      }
    }

    p {
      margin: 0 15px 10px 15px;
      font-size: 0.8em;
      min-height: 50px;
      text-align: justify;
    }
  }
`;
