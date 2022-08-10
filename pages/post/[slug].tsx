import Image from "next/image";
import Head from "next/head";
import { decode } from "html-entities";
import { sanitize } from "isomorphic-dompurify";
import parse from "html-react-parser";
import styles from "../../styles/Post.module.scss";

import { useRouter } from "next/router";
import { fetchPosts } from "../../utils/post";
import { GetStaticProps, NextPage } from "next";
import {
  PostState,
  SinglePostProps,
  SinglePostParams,
} from "../../types/Posts";
import AuthorSection from "../../components/AuthorSection";

const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

export const Post: NextPage<PostState> = ({
  title,
  excerpt,
  authorName,
  authorLink,
  avatar,
  date,
  content,
  imageURL,
  alt,
  imageHeight,
  imageWidth,
  yoast_head,
}) => {
  const router = useRouter();
  const ratio = (imageWidth ?? 1080) / (imageHeight ?? 567);

  return (
    <>
      {/*use this html react parser lib, according to NextJS issue #17894*/}
      {yoast_head ? <Head>{parse(yoast_head)}</Head> : null}
      <div className={styles.outer_container}>
        <main className={styles.post_container}>
          <button className={styles.button_back} onClick={() => router.back()}>
            Voltar
          </button>
          {imageURL && (
            <Image
              alt={alt || title}
              width={1080}
              height={1080 / ratio}
              src={imageURL}
            />
          )}
          <h1 className={styles.post_title}>{decode(title)}</h1>
          <span
            className={styles.post_subtitle}
            dangerouslySetInnerHTML={{ __html: sanitize(decode(excerpt)) }}
          ></span>
          <hr />
          <AuthorSection
            avatar={avatar}
            authorLink={authorLink}
            authorName={authorName}
            date={date}
          />
          <div
            className={styles.post_content}
            dangerouslySetInnerHTML={{ __html: sanitize(content) }}
          />
          <button
            className={styles.button_back_bottom}
            onClick={() => router.back()}
          >
            Voltar
          </button>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  SinglePostProps,
  SinglePostParams
> = async (ctx) => {
  const { slug } = ctx.params!; // see nextjs issue #16522
  const tenHours = 60 * 60 * 10;
  const postOptions = { params: { slug } };
  const { posts } = await fetchPosts(url, postOptions);

  return { props: { ...posts[0] }, revalidate: tenHours };
};

export const getStaticPaths = async () => {
  const allPostsOptions = { params: { per_page: 100 } };

  const { posts, headers } = await fetchPosts(url, allPostsOptions);
  const totalPages = parseInt(headers["x-wp-totalpages"] as string, 10);

  for (let i = 2; i <= totalPages; i++) {
    const postsOptions = { params: { per_page: 100, page: i } };
    const { posts: _posts } = await fetchPosts(url, postsOptions);
    _posts.forEach((post) => {
      posts.push(post);
    });
  }

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export default Post;
