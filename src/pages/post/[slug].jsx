import Header from '../../components/Header'
import Head from "next/head";
import Image from "next/image";
import styles from "./post.module.css";
import { sanitize } from 'isomorphic-dompurify';

export default function Post({ data }) {
  return (
    <>
    <Header />
      <Head>
        <title>{data.title?.rendered}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
         <h1>{data.title?.rendered}</h1>
          <Image 
          src={data.yoast_head_json.og_image[0].url} 
          alt=""
          width={data.yoast_head_json.og_image[0].width}
          height={data.yoast_head_json.og_image[0].height} />
          
          <main
            dangerouslySetInnerHTML={{
              __html: sanitize(data.content.rendered),
            }}
            className={styles.postContent}
          ></main>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
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