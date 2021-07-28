import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Rubik', sans-serif;
  }

  html {
    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
  }

  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;