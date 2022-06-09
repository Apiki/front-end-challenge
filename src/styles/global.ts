import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
  
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      height: 100%;
      overflow-x: hidden;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export default GlobalStyles;
