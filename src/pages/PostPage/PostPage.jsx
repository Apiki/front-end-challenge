import React, { useEffect, useState } from 'react';
import styles from './PostPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import LeftArrow from '../../assets/images/left-arrow.svg'
import { api } from '../../services/api';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await api.get(`/posts?_embed&slug=${slug}`);
        setPost(res.data[0]);
      } catch (err) {
        console.error('Erro ao carregar post', err);
      }
    }
    fetchPost();
  }, [slug]);

  if (!post) return <p>Carregando...</p>;

  const image = post._embedded['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
    <article className={styles.post}>
      <Link to="/" className={styles['post__returnToPosts']}>
      <div className={styles.iconWrapper}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          ></path>
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          ></path>
        </svg>
      </div>
      <p className={styles.text}>Voltar</p>
      </Link>
      <h1 className={styles['post__title']}>{post.title.rendered}</h1>
      <p className={styles['post__excerpt']}>{post.excerpt.rendered}</p>
      

      {image && <img src={image} alt={post.title.rendered} className={styles['post__image']} loading="lazy" />}

      <div
        className={styles['post__content']}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>

      <Link to="/" className={styles['post__returnToPostsEnd']}>
        <img src={LeftArrow} alt="Voltar" />
        Voltar para posts
      </Link>
    </article>
    </>
  );
}