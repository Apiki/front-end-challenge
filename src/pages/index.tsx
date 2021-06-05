import { GetStaticProps } from "next"
import { useEffect, useState } from "react"

import styles from "../styles/home.module.scss"

import PostCard from "../components/PostCard"
import { getPosts } from "../utils/getPosts"

type Post = {
  id: number
  title: string
  description: string
  thumbnail: string
  createdAt: string
  slug: string
  author: string
}

type HomeProps = {
  posts: Array<Post>
  totalPages: number
}

const Home = (props: HomeProps) => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState(props.posts)

  useEffect(() => {
    const callGetPosts = async () => {
      const { posts: morePosts } = await getPosts(page)
      const allPosts = [...posts, ...morePosts]
      setPosts(allPosts)
    }

    if (page > 1 && page <= props.totalPages) {
      callGetPosts()
    }
  }, [page])

  return (
    <div className={styles.homeContainer}>
      <h2>Postagens</h2>
      <section>
        <main>
          {posts.map((post, index) => (
            <PostCard key={index} data={post} />
          ))}
        </main>

        {page < props.totalPages && (
          <span onClick={() => setPage(page + 1)} className={styles.loadMore}>
            Carregar mais
          </span>
        )}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts, totalPages } = await getPosts(1)

  return {
    props: {
      posts,
      totalPages,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }
}

export default Home
