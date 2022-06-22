import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Layout } from "../components/Layout";
import { Post } from "../types/post";

interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  return <Layout>{/* <Heading>{post.title.rendered}</Heading> */}</Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params);

  const response = await axios.get(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${context.params.slug}`
  );

  return {
    props: {
      post: response.data,
    },
  };
};

export default PostPage;
