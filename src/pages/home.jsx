import { Header, PostsDisplay } from "../components";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { GlobalStyle } from "../themes/globalStyle";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Header />
        <PostsDisplay />
      </ThemeProvider>
    </>
  );
};
