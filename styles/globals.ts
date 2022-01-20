import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, p, h1, h2 {
    margin: 0;
    color: #fff;
    font-family: Outfit;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #374151 0%, #111827 100%);
    padding: 32px;
    min-width: 100vw;
    min-height: 100vh;
  }
`;