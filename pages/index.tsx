import { useState, useCallback, useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import PostsList from '../components/posts_list'

import api from '../services/api'
import { IPost } from '../types/post'
import transformToPost from '../utils/transformToPost'
import { SEO } from '../components/seo'

interface PostsListsProps {
  posts: IPost[]
  total_pages: number
  total_posts: number
}

const Home: React.FC<PostsListsProps> = ({ posts, total_pages }) => {
  const [postsList, setPostsList] = useState<IPost[]>(posts)
  const [page, setPage] = useState<number>()
  const [loading, setLoading] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

  useEffect(() => {
    setPage(Math.round(postsList.length / 12))
    if (page === Number(total_pages)) {
      setNoMorePosts(true)
    }
  }, [page, postsList.length, total_pages])

  const handleSeeMore = useCallback(async () => {
    setLoading(true)
    try {
      const response = await api.get(`/posts?_embed&categories=518&page=${page + 1}&per_page=12`)

      const newPosts = response.data.map((item: any) => transformToPost(item))

      setPostsList(postsList.concat(newPosts))

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [page, postsList])

  return (
    <>
      <SEO
        title="Apiki DEV"
        description="O melhor conteúdo sobre desenvolvimento da internet brasileira"
      />
      <PostsList
        posts={postsList}
        seeMore={handleSeeMore}
        loading={loading}
        noMorePosts={noMorePosts}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get(`/posts?_embed&categories=518&per_page=12`)

  let total_pages: number
  let total_posts: number

  Object.keys(response.headers).forEach((item) => {
    if (item === 'x-wp-total') {
      total_posts = response.headers[item]
    }

    if (item === 'x-wp-totalpages') {
      total_pages = response.headers[item]
    }
  })

  const posts: IPost[] = response.data.map((item: any) => transformToPost(item))

  return {
    props: {
      posts,
      total_pages,
      total_posts,
    },
  }
}

export default Home
