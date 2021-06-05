import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "./styles.module.scss"

type Post = {
  id: number
  title: string
  description: string
  thumbnail: string
  createdAt: string
  slug: string
  author: string
}

type PostCardProps = {
  data: Post
}

const PostCard: React.FC<PostCardProps> = ({ data }) => (
  <Link href={`/post/${data.slug}`}>
    <a className={styles.link}>
      <div className={styles.card}>
        <aside>
          {data.thumbnail ? (
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={150}
              height={150}
            />
          ) : (
            <img src="/wordpress.png" alt="Wordpress" />
          )}
        </aside>
        <div className={styles.content}>
          <h3>{data.title}</h3>
          <span className={styles.description}>{data.description}</span>
          <div>
            {data.author ? (
              <>
                <span>By </span>
                <strong>{data.author}</strong>
              </>
            ) : (
              <span>By ...</span>
            )}
            <span>{data.createdAt}</span>
          </div>
        </div>
      </div>
    </a>
  </Link>
)

export default PostCard
