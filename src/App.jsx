import { Header, Posts } from "./components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { light } from "./themes/light";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Header />
        <Posts />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body, #root{
    min-height: 100vh;
  }
`;

export default App;
