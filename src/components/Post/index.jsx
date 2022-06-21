import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import { PostWrapper, PostDescription, PostTitle, PostContent } from "./styles";

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
            <PostContent
              id="content"
              dangerouslySetInnerHTML={{
                __html: selectedPost[0].content.rendered,
              }}
            ></PostContent>
          </>
        )}
      </PostWrapper>
    </ThemeProvider>
  );
};
