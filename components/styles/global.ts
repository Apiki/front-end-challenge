import { createGlobalStyle } from 'styled-components'

export const theme = {}

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  background: #fbfbfb;
  color: #333;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.5s;
  :hover {
    color: #666;
  }
}
* {
  box-sizing: border-box;
}
input, textarea, select {
    outline: 0;
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
`
