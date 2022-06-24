import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Icon, Text, Spinner, Flex } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { AxiosResponseHeaders } from "axios";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";
import { Post } from "../types/post";
import { getPosts } from "../utils";

type HomePageProps = {
  _posts: Post[];
  headers: AxiosResponseHeaders;
};

function HomePage({ _posts, headers }: HomePageProps) {
  const [posts, setPosts] = useState(_posts);
  const [pageCount, setPageCount] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const maxPageCount = Number(headers["x-wp-totalpages"]);

  useEffect(() => {
    setIsMounted(true);
    setIsFetching(false);
  }, []);

  async function fetchPosts() {
    setIsFetching(true);
    if (pageCount < maxPageCount) {
      const { posts: newPosts } = await getPosts(pageCount + 1);

      setPageCount(pageCount + 1);
      setPosts([...posts, ...newPosts]);
      setIsFetching(false);
    }
  }

  return (
    <Layout>
      {posts.map((post) => isMounted && <PostCard post={post} key={post.id} />)}

      {pageCount < maxPageCount && (
        <Flex mb={4}>
          <Button
            display="inline-block"
            mx="auto"
            h="100%"
            py={4}
            disabled={isFetching}
            onClick={fetchPosts}
          >
            {isFetching ? (
              <Spinner />
            ) : (
              <>
                <Icon
                  aria-label="Color Mode Switcher"
                  fontSize="3xl"
                  as={PlusSquareIcon}
                />
                <Text ml={2}>Carregar Mais</Text>
              </>
            )}
          </Button>
        </Flex>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts, headers } = await getPosts();

  return {
    props: {
      _posts: posts,
      headers,
    },
  };
};

export default HomePage;
