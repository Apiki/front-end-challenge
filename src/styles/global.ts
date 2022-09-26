import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-300']};
  }

  body {
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ul {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`