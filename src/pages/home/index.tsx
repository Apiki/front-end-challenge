import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../components/Link'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/axios'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './styles'

export interface IPost {
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  guid: {
    rendered: string
    id: number
  }
  link: string
  slug: string
  id: number
  _embedded: string
  modified_gmt: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`posts?_embed&categories=518&page=${page}`)
      // console.log(response.data)
      setPosts([...response.data])
    } finally {
      setIsLoading(false)
    }
  }, [page])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <SearchInput postsLength={posts.length} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map(post => (
            <>
              <Post key={post.id} post={post} />
            </>
          ))}
          <button onClick={() => setPage(setPostPage => setPostPage + 1)}>
            Carregar mais...
          </button>
          <button onClick={() => setPage(setPostPage => setPostPage - 1)}>
            Voltar
          </button>
        </PostsListContainer>
      )}
    </>
  )
}
