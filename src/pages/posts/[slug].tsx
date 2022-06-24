import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticPaths } from "next";
import React, { useEffect, useState } from "react";
import HtmlReactParse from "html-react-parser";
import { Layout } from "../../components/Layout";
import { Post } from "../../types/post";
import { getPost, getPosts } from "../../utils";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  return (
    <Layout>
      <Heading textAlign="center" mt={8}>
        {post.title.rendered}
      </Heading>
      <Text as="i" display="block" my={8} textAlign="center">
        {HtmlReactParse(post.excerpt.rendered)}
      </Text>

      <Prose>{HtmlReactParse(post.content.rendered)}</Prose>

      <Link
        href="/"
        display="block"
        mb={4}
        mx="auto"
        textAlign="center"
        py={2}
        px={4}
        w="fit-content"
        shadow="md"
        bg="white"
        _dark={{
          bg: "whiteAlpha.200",
        }}
        borderRadius="lg"
      >
        Voltar à página inicial
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { posts } = await getPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const post = await getPost(context.params.slug as string);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
