import React from "react"
import Image from "next/image"

import styles from "./styles.module.scss"

type Post = {
  id: number
  title: string
  description: string
  thumbnail: string
  createdAt: string

  author: string
}

type PostCardProps = {
  data: Post
}

const PostCard: React.FC<PostCardProps> = ({ data }) => (
  <div className={styles.card}>
    <aside>
      <Image src={data.thumbnail} alt={data.title} width={150} height={150} />
    </aside>
    <div className={styles.content}>
      <h3>{data.title}</h3>
      <span className={styles.description}>{data.description}</span>
      <div>
        <span>By </span>
        <strong>{data.author}</strong>
        <span>{data.createdAt}</span>
      </div>
    </div>
  </div>
)

export default PostCard
