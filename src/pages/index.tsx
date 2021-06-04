import { GetStaticProps } from "next"

import styles from "../styles/home.module.scss"

import PostCard from "../components/PostCard"
import api from "../services/api"

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

type Post = {
  id: number
  title: string
  description: string
  thumbnail: string
  created_at: string
  slug: string
  author: string
}

type HomeProps = {
  posts: Post
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Postagens</h2>
      <section>
        <main>
          {posts.map(post => (
            <PostCard key={post.id} data={post} />
          ))}
        </main>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("")
  const posts = data.map(post => {
    const description = post.excerpt.rendered
      .replace("<p>", "")
      .replace("</p>", "")
    const createdAt = format(new Date(post.date), "d MMM, yyyy", {
      locale: ptBR,
    })

    return {
      id: post.id,
      title: post.title.rendered,
      description,
      thumbnail:
        post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
          .source_url,
      createdAt,
      slug: post.slug,
      author: post._embedded.author[0].name
        ? post._embedded.author[0].name
        : null,
    }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }
}

export default Home
