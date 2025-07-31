import URL from "@/services/api";
import styles from "./slug.module.scss"
import Image from 'next/image';

async function getPost(slug) {
  const res = await fetch(`${URL}posts?_embed&slug=${slug}`, {
    cache: "no-store",
  });

  const json = await res.json();
  return json[0]; 
}

export default async function SlugPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div className={styles.container}>  
      <section className={styles.blackBG}></section>
      <section className={styles.whiteBG}></section>
      <div className={styles.slug}>
        <h1 className={styles.title}>{post.title.rendered}</h1>
        <Image
          src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
          width={900}
          height={400}
          alt="#"
          className={styles.image_card}
        />
        <div className={styles.contentSlug} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}
