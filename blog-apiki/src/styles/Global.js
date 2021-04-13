import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color:#F5F5F5;
  color: #333;
  font-family: sans-serif;
  font-size: 14px;
  height: 100vh;
}
`;
