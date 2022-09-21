import styled from "styled-components";

export const Footer_Pages = styled.footer`
  @media (min-width: 320px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 30px;
    background: rgb(0, 0, 0, 0.9);
    border-top: 2px inset rgb(204, 204, 204, 0.5);
    p {
      color: white;
      font-size: 0.7em;
      width: 50%;
      padding-left: 20px;
      font-style: italic;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }

  @media (min-width: 760px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 60px;
    background: rgb(0, 0, 0, 0.9);
    border-top: 2px inset rgb(204, 204, 204, 0.5);
    p {
      color: white;
      font-size: 0.8em;
      width: 50%;
      padding-left: 20px;
      font-style: italic;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
`;
