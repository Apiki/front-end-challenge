import type { NextPage } from "next";
import axios, { AxiosRequestHeaders } from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Posts, { PostsProps, PostsResponse } from "../types/Posts";

const Home: NextPage<PostsProps> = ({ posts, totalPages }) => {
  return (
    <main>
      {posts.map((post) => {
        const ratio = post.width / post.height ?? 1;
        return (
          <article key={post.slug}>
            <h2>{post.title}</h2>
            <Image width={350} height={350 / ratio} src={post.image} />
            <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <a href={post.link}>{post.slug}</a>
          </article>
        );
      })}
      <p>Total de páginas: {totalPages}</p>
    </main>
  );
};

export const getStaticProps = async () => {
  const tenHours = 10 * 60 * 60;
  const lastTenPostsUrl =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
    
  const { data: postsData, headers }: PostsResponse = await axios.get(
    lastTenPostsUrl
  );

  const posts = postsData.map((post) => {
    return {
      title: post.title.rendered,
      link: post.link,
      slug: post.slug,
      image: post._embedded["wp:featuredmedia"][0].source_url,
      width: post._embedded["wp:featuredmedia"][0].media_details.width,
      height: post._embedded["wp:featuredmedia"][0].media_details.height,
      excerpt: post.excerpt.rendered,
    };
  });

  return {
    props: {
      posts,
      totalPages: headers["x-wp-totalpages"] ?? 1,
    },
    revalidate: tenHours, // 10 hours is the industry standard that complies with certain scripts
  };
};

export default Home;
