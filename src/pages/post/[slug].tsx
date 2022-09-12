import { api } from '../../lib/axios'
import { Loader } from '../../components/Loader'
import { PostContainer, PostContent } from '../../styles/pages/post'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

interface PostProps {
  post: {
    title: string;
    content: string;
    imageUrl: string
  }
}

export default function Post({ post }:PostProps) {
  const { isFallback } = useRouter()

  return (
    <>

      <Head>
        <title> {post?.title} | Blog Apiki</title>
      </Head>

      {isFallback ? (
        <Loader />
      ) : (
        <PostContainer>
          <header>
            <h1>{post?.title}</h1>
          </header>

          <PostContent>
            <img src={post.imageUrl} alt="" />
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          </PostContent>
        </PostContainer>
      )}
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}


export const getStaticProps: GetStaticProps = async ({ params}) => {
  const postSlug = params.slug

  const response = await api.get(`posts?_embed&slug=${postSlug}`)

  return {
    props :{
      post : {
        title: response.data[0].title.rendered,
        content: response.data[0].content.rendered,
        imageUrl: response.data[0]._embedded['wp:featuredmedia'][0].source_url
      }
    },
    revalidate: 60 * 60 * 1, // 60 minutes
  }
}
