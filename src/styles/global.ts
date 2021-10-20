import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --text: 'black';
    --bgColor: #ffffff;
    --bgHeaderColor: #ffffff;
    --border: '1px solid black',
  }

  [data-theme="dark"] {
    --text: #ffffff;
    --bgColor: #595761;
    --bgHeaderColor: #222;
    --border: '1px solid white',
  }

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: var(--bgColor);
  color: var(--text);
  border: var(--border);
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
