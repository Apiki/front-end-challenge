import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import {
  PostsDisplay,
  PostCard,
  CardImg,
  CardTitle,
  CardDescription,
  Button,
} from "./styles";

export const Posts = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const loadMore = () => {
    fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
    )
      .then((response) => response.json())
      .then((newData) => setData(data.concat(newData)))
      .then(setPage(page + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <PostsDisplay>
          {data.map((item) => {
            return (
              <PostCard key={item.id}>
                <CardImg src={item.yoast_head_json.og_image[0].url} />
                <CardTitle>{item.title.rendered}</CardTitle>
                <CardDescription>
                  {item.yoast_head_json.description}
                </CardDescription>
              </PostCard>
            );
          })}
        </PostsDisplay>
        <Button onClick={() => loadMore()}>Carregar mais</Button>
      </main>
    </ThemeProvider>
  );
};
