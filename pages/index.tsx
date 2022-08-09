import axios from "axios";
import type { NextPage } from "next";
import { PostsProps, PostsResponse, PostState } from "../types/Posts";
import { fetchPosts } from "../utils/post";
import Page from "./page/[slug]";

const getTenPostsUrl =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

const Home: NextPage<PostsProps> = (props) => {
  return <Page {...props} />;
};

export const getStaticProps = async () => {
  const postsOptions = { params: { page: 1 } };

  const { posts, headers } = await fetchPosts(getTenPostsUrl, postsOptions);

  return {
    props: {
      posts,
      totalPages: parseInt(headers["x-wp-totalpages"] as string) ?? 1,
      page: 1,
    },
  };
};

export default Home;
