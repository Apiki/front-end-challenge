import type { GetServerSideProps } from "next";
import { useState } from "react";

import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { SEO } from "@/components/SEO";
import { api } from "@/services/api";
import { PostsResponseData } from "@/shared/types/postsResponse";
import { formatPostList } from "@/utils/formatPostList";

import styles from "@/styles/Home.module.scss";

type Post = ReturnType<typeof formatPostList>[0];
type PageProps = { posts: Post[]; totalPages: number };

export default function Home({ posts: initialPosts, totalPages }: PageProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLoadMore() {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const url = `/posts?_embed&categories=518&page=${nextPage}`;
      const res = await api.get<PostsResponseData>(url);
      const newPosts = formatPostList(res.data);

      setPosts((oldPosts) => [...oldPosts, ...newPosts]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      window.alert(
        "Não foi possível carregar mais postagens, um erro inesperado ocorreu."
      );
    }
    setIsLoading(false);
  }

  const hasMorePages = page < totalPages;

  return (
    <>
      <SEO
        pageTitle="Apiki Blog Dev"
        pageDescription=""
        siteName="Apiki Blog Dev"
        title="Apiki Blog Dev, seu blog com conteúdo exclusivo sobre desenvolvimento"
        description="Venha conhecer conosco tudo sobre desenvolvimento, em especial sobre WordPress"
        image={`${process.env.NEXT_PUBLIC_APP_URL}/meta_image.png`}
      />

      <header className={styles.header}>
        <h1>Apiki Blog Dev</h1>
        <p>
          Seu blog com conteúdo exclusivo sobre desenvolvimento. <br />
          Venha aprender e crescer conosco!
        </p>
      </header>

      <main>
        <div className={styles.articles}>
          {posts.map((post) => (
            <ArticleCard data={post} key={post.id} />
          ))}
        </div>

        {hasMorePages && (
          <div className={styles.loadMore}>
            <Button isLoading={isLoading} onClick={handleLoadMore}>
              Carregar mais...
            </Button>
          </div>
        )}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "/posts?_embed&categories=518";
  const res = await api.get<PostsResponseData>(url);

  const posts = formatPostList(res.data);
  const totalPages = Number(res.headers["x-wp-totalpages"]);

  return { props: { posts, totalPages } };
};
