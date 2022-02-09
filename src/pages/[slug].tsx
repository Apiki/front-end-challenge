import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactHTMLParser from "react-html-parser";
import { BiArrowBack } from "react-icons/bi";

import { Button } from "@/components/Button";
import { api } from "@/services/api";
import { PostsResponseData } from "@/shared/types/postsResponse";
import { formatPost } from "@/utils/formatPost";

import styles from "@/styles/Post.module.scss";

type Post = ReturnType<typeof formatPost>;
type PageProps = { post: Post };

export default function Post({ post }: PageProps) {
  return (
    <>
      <Head>{ReactHTMLParser(post.pageHead)}</Head>

      <header className={styles.header}>
        <Button variant="secondary" href="/" iconLeft={BiArrowBack}>
          Voltar
        </Button>

        <h1>{ReactHTMLParser(post.title)}</h1>
        <p>{post.excerpt}</p>

        {post.author && (
          <div className={styles.author}>
            <Image
              src={post.author.image.src}
              alt={post.author.image.alt}
              width={48}
              height={48}
              objectFit="cover"
            />

            <p>
              Por <span>{post.author.name}</span>
            </p>
          </div>
        )}
      </header>

      <div className={styles.image}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={960}
          height={540}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <main
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className={styles.footer}>
        <Button variant="secondary" href="/" iconLeft={BiArrowBack}>
          Voltar ao início
        </Button>
      </footer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const url = "/posts?_embed&categories=518";
  const { data } = await api.get<PostsResponseData>(url);

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string };
  const res = await api.get<PostsResponseData>(`/posts?_embed&slug=${slug}`);
  const data = res.data[0];

  if (!data) return { notFound: true };

  const post = formatPost(data);

  return {
    props: { post },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
