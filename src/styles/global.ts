import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --text: 'black';
    --bgColor: #ffffff;
    --bgHeaderColor: #ffffff;
  }

  [data-theme="dark"] {
    --text: #ffffff;
    --bgColor: #181818;
    --bgHeaderColor: #202020;
  }

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: var(--bgColor);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

svg {
  color: var(--text);
}

header {
  background-color: var(--bgHeaderColor);
}

* {
  box-sizing: border-box;
}
`;
