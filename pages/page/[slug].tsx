import type { GetServerSideProps, NextPage } from "next";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { decode } from "html-entities";
import { sanitize } from "isomorphic-dompurify";
import Head from "next/head";
import Image from "next/image";
import { PostsProps, PostState } from "../../types/Posts";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPosts } from "../../utils/post";
import styles from "../../styles/Home.module.scss";
import AuthorSection from "../../components/AuthorSection";

const getTenPostsUrl =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

const Page: NextPage<PostsProps> = ({ posts, totalPages, page }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);
  const [pagePosts, setPagePosts] = useState<PostState[]>(posts);

  const handlePage = (event: MouseEvent, page: number) => {
    const pageNumber = currentPage + page;
    event.preventDefault();
    router.push(`/page/${pageNumber}`);
  };

  useEffect(() => {
    setCurrentPage(page);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }
    if (currentPage < 1) {
      setCurrentPage(1);
      return;
    }

    // don't make useEffect async, make another func for it
    const getPosts = async () => {
      const postsOptions = { params: { page: currentPage } };
      const { posts } = await fetchPosts(getTenPostsUrl, postsOptions);
      setPagePosts(posts);
    };

    getPosts();
  }, [currentPage, page]);

  return (
    <>
      <Head>
        <title>Blog da Apiki | Desenvolvimento</title>
        <meta name="description" content="Blog da Apiki" />
        <meta
          name="keywords"
          content="blog, apiki, desenvolvimento, wordpress"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1 className={styles.blog_title}>Blog da Apiki</h1>
      <main
        className={styles.posts_container}
        role="main"
        aria-label="Conteúdo Principal"
      >
        {pagePosts.map((post) => {
          const ratio = (post.imageWidth ?? 384) / (post.imageHeight ?? 202); // defaults to 1.9
          return (
            <article
              role="card"
              aria-label="Post Card contendo um breve conteúdo do post, 
              incluindo o título, autor, data de publicação e uma imagem"
              className={styles.post_card}
              key={post.slug}
            >
              <h2 className={styles.post_title}>{decode(post.title)}</h2>
              {post.imageURL ? (
                <Image
                  width={350}
                  height={350 / ratio}
                  src={post.imageURL}
                  alt={post.alt || post.title}
                />
              ) : null}
              <span
                className={styles.post_description}
                dangerouslySetInnerHTML={{ __html: sanitize(post.excerpt) }}
              />
              <div className={styles.post_card_footer}>
                <AuthorSection
                  hideOnMobile={true}
                  avatar={post.avatar}
                  authorLink={post.authorLink}
                  authorName={post.authorName}
                  date={post.date}
                />
                <Link href={`/post/${post.slug}`}>
                  <a
                    role="button"
                    aria-label="Botão para ler mais detalhes sobre o post"
                    className={styles.post_button}
                  >
                    <strong>Ler mais</strong>
                  </a>
                </Link>
              </div>
            </article>
          );
        })}
      </main>
      <div className={styles.pagination}>
        {totalPages > 1 ? (
          <>
            <button
              role="button"
              aria-label="Botão para ir para a página anterior"
              className={styles.pagination_button}
              onClick={(e) => handlePage(e, -1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className={styles.pagination_counter}>
              {currentPage} de {totalPages}
            </span>
            <button
              role="button"
              aria-label="Botão para ir para a página seguinte"
              className={styles.pagination_button}
              onClick={(e) => handlePage(e, +1)}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postsOptions = { params: { page: context.query.slug } };
  const { posts, headers } = await fetchPosts(getTenPostsUrl, postsOptions);

  return {
    props: {
      posts,
      totalPages: parseInt(headers["x-wp-totalpages"] as string) ?? 1,
      page: parseInt(context.query.slug as string) ?? 1,
    },
  };
};

export default Page;
