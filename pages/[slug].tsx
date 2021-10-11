import { GetServerSideProps } from 'next'
import PostContent from '../components/post_content'
import PostHero from '../components/post_hero'
import { SEO } from '../components/seo'

import api from '../services/api'
import { IPost } from '../types/post'
import transformToPost from '../utils/transformToPost'

interface PostProps {
  post: IPost
  seo_info: {
    title: string
    description: string
  }
}

const Post: React.FC<PostProps> = ({ post, seo_info }) => {
  return (
    <>
      <SEO title={seo_info.title} description={seo_info.description} />
      <PostHero image={post.image} />
      <PostContent post={post} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await api.get(`/posts?_embed&slug=${query.slug}`)

  const post: IPost = transformToPost(response.data[0])
  const seo_info = {
    title: response.data[0]?.yoast_head_json?.title,
    description: response.data[0]?.yoast_head_json?.description,
  }

  return {
    props: {
      post,
      seo_info,
    },
  }
}

export default Post
