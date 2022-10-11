import { Icon } from '@iconify/react'
import Link from 'next/link'
import styles from './card.module.scss'
export default function Card({ posts }) {
  return (
    <>
      {posts.map(post => (
        <div key={post.id} className={styles.card}>
          <Link href={`${post.slug}`}>
            <a
              className={styles.card__img}
              style={{
                backgroundImage: `url(${post._embedded['wp:featuredmedia']['0'].source_url})`
              }}
            ></a>
          </Link>
          <div className="relative">
            <Link href={`${post.slug}`}>
              <a>
                <h2 className={styles.card__title}>{post.title.rendered}</h2>
              </a>
            </Link>

            <Link href={`${post.slug}`}>
              <a>
                <h3 className={styles.card__description}>
                  {post.yoast_head_json.og_description}
                </h3>
              </a>
            </Link>

            <div className="flex justify-between">
              <span className={styles.card__date}>
                <Icon icon="fontisto:date" color="white" />

                {new Date(post.date).toLocaleDateString('pt-BR')}
              </span>
              {post._embedded['author']['0'].name ? (
                <span className={styles.card__author}>
                  <Icon icon="bxs:user" color="white" />
                  {post._embedded['author']['0'].name}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
