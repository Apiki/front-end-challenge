import { Header, Post } from "../components";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { GlobalStyle } from "../themes/globalStyle";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const params = useParams();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Header />
        <Post params={params} />
      </ThemeProvider>
    </>
  );
};
