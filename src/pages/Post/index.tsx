import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { PostContainer, PostContent } from './styles'
import { Loader } from '../../components/Loader'

interface PostProps {
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  _embedded: {
    'wp:featuredmedia': {
      0: {
        source_url: string
      }
    }
  }
}

export function Post() {
  const { slug } = useParams()

  const [post, setPost] = useState<PostProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(`posts?_embed&slug=${slug}`)

      setPost(response.data[0])
      setLoading(false)
    }

    fetchPost()
  }, [slug])

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(post?.content.rendered as string),
  })

  return (
    <>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <PostContainer>
          <header>
            <h1>{post?.title.rendered}</h1>
          </header>

          <PostContent>
            <img
              src={
                post?._embedded['wp:featuredmedia'] &&
                post?._embedded['wp:featuredmedia'][0].source_url
              }
              alt=""
            />
            <div dangerouslySetInnerHTML={sanitizedData()}></div>
          </PostContent>
        </PostContainer>
      )}
    </>
  )
}
