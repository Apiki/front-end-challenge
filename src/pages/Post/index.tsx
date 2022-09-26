import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPost } from '../home'
import { PostContent } from './components/PostContent'

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { slug } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/posts?_embed&slug=${slug}`)
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <>{!isLoading && <PostContent post={postData} />}</>
    </>
  )
}
