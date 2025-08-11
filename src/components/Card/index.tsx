import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import { CardNamed } from "@/types/CardNamed";
import Link from "next/link";

export default function SingleCard(post : CardNamed) {
  const slug = post.link.split('com/')[1]
  return (
    <article className={styles.card}>
      <Link href={`/${slug}`} title={`Leia mais sobre: ${post.titulo}` }>
        <Image
          src={post.imagem}
          width={post.width}
          height={post.height}
          alt={post.alt}
          className={styles.img}
          priority={false}
          loading="lazy"
        />
        <div className={styles.cardContent}>
          <h2>{post.titulo}</h2>
          {post.data && <time className={styles.date}>{post.data}</time>}
        </div>
      </Link>
    </article>
  );
}
