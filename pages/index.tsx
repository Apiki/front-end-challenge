import type { NextPage } from "next";
import axios, { AxiosRequestHeaders } from "axios";
import { decode } from "html-entities";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { PostsProps, PostsResponse, PostState } from "../types/Posts";
import { useEffect, useState } from "react";

const getTenPostsUrl =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

const Home: NextPage<PostsProps> = ({ posts, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePosts, setPagePosts] = useState<PostState[]>(posts);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }
    if (currentPage < 1) {
      setCurrentPage(1);
      return;
    }
    
    const getPosts = async () => {
      const { data: postsData }: PostsResponse = await axios.get(
        `${getTenPostsUrl}&page=${currentPage}`
      );

      const _posts = postsData.map((post) => {
        return {
          title: post.title.rendered,
          link: post.link,
          slug: post.slug,
          imageURL: post._embedded["wp:featuredmedia"]?.[0]?.source_url ?? "",
          imageWidth:
            post._embedded["wp:featuredmedia"]?.[0]?.media_details?.width ??
            null,
          imageHeight:
            post._embedded["wp:featuredmedia"]?.[0]?.media_details?.height ??
            null,
          alt: post._embedded["wp:featuredmedia"]?.[0]?.alt_text ?? "",
          excerpt: post.excerpt.rendered,
        };
      });
      setPagePosts(_posts);
    };

    getPosts();
  }),
    [currentPage];

  return (
    <main>
      {pagePosts.map((post) => {
        const ratio = (post.imageWidth ?? 384) / (post.imageHeight ?? 202); // defaults to 1.9
        return (
          <article key={post.slug}>
            <h2>{decode(post.title)}</h2>
            {post.imageURL ? (
              <Image
                width={350}
                height={350 / ratio}
                src={post.imageURL}
                alt={post.alt}
              />
            ) : null}
            <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <a href={post.link}>{post.slug}</a>
          </article>
        );
      })}
      {/*creates prev and next buttons*/}
      <div className={styles.pagination}>
        {totalPages > 1 ? (
          <>
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Prev
            </button>
            {"..."}
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </>
        ) : null}
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  const tenHours = 10 * 60 * 60;

  const { data: postsData, headers }: PostsResponse = await axios.get(
    getTenPostsUrl
  );

  const posts: PostState[] = postsData.map((post) => {
    return {
      title: post.title.rendered,
      link: post.link,
      slug: post.slug,
      imageURL: post._embedded["wp:featuredmedia"]?.[0]?.source_url ?? "",
      imageWidth:
        post._embedded["wp:featuredmedia"]?.[0]?.media_details?.width ?? null,
      imageHeight:
        post._embedded["wp:featuredmedia"]?.[0]?.media_details?.height ?? null,
      alt: post._embedded["wp:featuredmedia"]?.[0]?.alt_text ?? "",
      excerpt: post.excerpt.rendered,
    };
  });

  return {
    props: {
      posts,
      totalPages: parseInt(headers["x-wp-totalpages"] as string) ?? 1,
    },
    revalidate: tenHours, // 10 hours is the industry standard that complies with certain scripts
  };
};

export default Home;
