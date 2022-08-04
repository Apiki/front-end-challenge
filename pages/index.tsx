import type { NextPage } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

type Posts = Post[]
type Post = {

  slug: string,
  link: string,
  yoast_head: string,
  title: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  _embedded: {
    'wp:featuredmedia': [
      {
        source_url: string,
        media_type: string,
        media_details: {
          sizes: {
            medium: {
              source_url: string
            }
          }
        }
      }
    ]
  }

}

type PostsProps = {
  title: string,
}

const Home: NextPage<PostsProps> = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

export const getStaticProps = async () => {
  const tenHours = 10 * 60 * 60;
  const lastTenPostsUrl = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
  const posts: Posts = await (await axios.get(lastTenPostsUrl)).data;
  
  return {
    props: {
      title: posts[0].title.rendered,
    },
    revalidate: tenHours
  }

}

export default Home
