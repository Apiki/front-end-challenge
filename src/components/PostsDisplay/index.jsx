import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "styled-components";
import {
  PostsDisplayWrapper,
  PostCard,
  CardImg,
  CardTitle,
  CardDescription,
  Button,
} from "./styles";

export const PostsDisplay = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [morePages, setMorePages] = useState(true);

  useEffect(() => {
    fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const loadMore = () => {
    fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
    )
      .then((response) => {
        if (page == response.headers.get("X-WP-TotalPages")) {
          setMorePages(false);
        }
        return response.json();
      })
      .then((newData) => setData(data.concat(newData)))
      .then(setPage(page + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <PostsDisplayWrapper>
          {data.map((item) => {
            return (
              <PostCard key={item.id}>
                <Link to={item.slug}>
                  <CardImg src={item.yoast_head_json.og_image[0].url} />
                </Link>
                <CardTitle>{item.title.rendered}</CardTitle>
                <CardDescription>
                  {item.yoast_head_json.description}
                </CardDescription>
              </PostCard>
            );
          })}
        </PostsDisplayWrapper>
        {morePages && <Button onClick={() => loadMore()}>Carregar mais</Button>}
      </main>
    </ThemeProvider>
  );
};
