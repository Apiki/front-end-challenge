import Image from "next/image";
import Link from "next/link";
import ReactHTMLParser from "react-html-parser";

import styles from "./styles.module.scss";

type Image = { src: string; alt: string };

type ArticleCardProps = {
  data: {
    slug: string;
    title: string;
    excerpt: string;
    image: Image;
    author: { name: string; image: Image } | null;
  };
};

export function ArticleCard({ data }: ArticleCardProps) {
  return (
    <article className={styles.container}>
      <Link href={`/${data.slug}`}>
        <a className={styles.imageLink}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={480}
            height={270}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </Link>

      <div className={styles.content}>
        {data.author && (
          <div className={styles.author}>
            <Image
              src={data.author.image.src}
              alt={data.author.image.alt}
              width={36}
              height={36}
              objectFit="cover"
            />

            <p>
              Por <span>{data.author.name}</span>
            </p>
          </div>
        )}

        <h2>
          <Link href={`/${data.slug}`}>
            <a>{ReactHTMLParser(data.title)}</a>
          </Link>
        </h2>
        <p>{data.excerpt}</p>
      </div>
    </article>
  );
}
