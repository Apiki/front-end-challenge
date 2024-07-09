import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    color: ${colors.primary[600]};
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
    background-color: ${colors.primary[200]};
  }
`;