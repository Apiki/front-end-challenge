import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import {
  PostWrapper,
  PostDescription,
  PostTitle,
  PostContent,
  AuthorWrapper,
  AuthorImg,
  Author,
  PostImg,
} from "./styles";

export const Post = ({ params }) => {
  const theme = useTheme();
  const [selectedPost, setSelectedPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Blog - Apiki");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    async function loadPost() {
      const response = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
      );
      let data = await response.json();
      await setSelectedPost(data);
      await setTitle(`${data[0].title.rendered} - Apiki`);
      setLoading(false);
    }

    loadPost();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PostWrapper>
        {loading ? (
          <h1>Carregando</h1>
        ) : (
          <>
            <PostTitle>{selectedPost[0].title.rendered}</PostTitle>

            <PostDescription>
              {selectedPost[0].yoast_head_json.description}
            </PostDescription>

            <AuthorWrapper>
              <AuthorImg
                src={selectedPost[0]._embedded.author[0].avatar_urls["48"]}
              />
              <span>by</span>
              <Author
                target="_blank"
                href={selectedPost[0]._embedded.author[0].link}
              >
                {selectedPost[0]._embedded.author[0].name}
              </Author>
            </AuthorWrapper>

            <PostImg src={selectedPost[0].yoast_head_json.og_image[0].url} />

            <PostContent
              id="content"
              dangerouslySetInnerHTML={{
                __html: selectedPost[0].content.rendered,
              }}
            />
          </>
        )}
      </PostWrapper>
    </ThemeProvider>
  );
};
