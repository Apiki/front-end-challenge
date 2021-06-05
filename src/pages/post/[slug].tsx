import { GetStaticProps, GetStaticPaths } from "next"
import Image from "next/image"
import ErrorPage from "next/error"

import { getPosts } from "../../utils/getPosts"
import { getPostBySlug } from "../../utils/getPostBySlug"

import styles from "./styles.module.scss"

type Post = {
  title: string
  description: string
  content: string
  thumbnail: string
  author: string
  createdAt: string
  authorAvatar: string
}

type PostPageProps = {
  post: Post
}

const Post = ({ post }: PostPageProps) => {
  if (!post.title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.content}>
          <h2>{post.title}</h2>
          <span>{post.description}</span>
          <section>
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={768}
              height={403}
            />
          </section>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer>
            <span>By </span>
            {post.author ? <strong>{post.author}</strong> : <span>... </span>}
            <span>{post.createdAt}</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getPosts(1)

  const paths = posts.map(post => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params

  const post = await getPostBySlug(slug as string)

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

export default Post
