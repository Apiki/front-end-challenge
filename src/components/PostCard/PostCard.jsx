import React from 'react';
import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const { title, _embedded, slug, excerpt } = post;
  const image = _embedded['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article className={styles.post}>
      {image && <img src={image} alt={title.rendered} className={styles['post__image']} />}
      <Link to={`/post/${slug}`} className={styles['post__link']}>
        <h2 className={styles['post__title']}>{title.rendered}</h2>
        <span className={styles['post__excerpt']}>{excerpt.rendered}</span>
      </Link>
    </article>
  );
}