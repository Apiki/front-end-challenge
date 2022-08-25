import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./posts.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated: string;
  };
}

export default function Post({ data }: any) {
  return (
    <>
      <Head>
        <title>{data.title?.rendered} | Apiki</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <img
            src={data.yoast_head_json.og_image?.map(
              (ulrImg: { url: any }) => ulrImg.url
            )}
            alt={data.title.rendered}
            key={data.id}
          />
          <h1>{data.title?.rendered}</h1>
          <time>
            {new Date(data.modified_gmt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <p className={styles.postContainer}>
            {data.content.rendered.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  const [data] = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?slug=${slug}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
};
