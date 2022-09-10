import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { HeaderCategory, HomeContent } from './styles'
import { ButtonPaginate } from '../../components/ButtonPaginate'
import { api } from '../../lib/axios'
import { Loader } from '../../components/Loader'

interface PostProps {
  imgURl: string
  title: {
    rendered: string
  }
  author: string
  slug: string
  _embedded: {
    'wp:featuredmedia': {
      [0]: {
        source_url: string
      }
    }
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get(
        `/posts?_embed&categories=518&page=${page}`,
      )

      setPosts(response.data)

      const totalPages = response.headers['x-wp-totalpages']
      setPageCount(Number(totalPages))
      setLoading(false)
    }

    fetchPosts()
  }, [page])

  const nextPage = () => {
    if (page < pageCount) {
      setPage((prevState) => prevState + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1)
    }
  }

  return (
    <>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderCategory>
            <h1>Desenvolvimento</h1>
          </HeaderCategory>

          <HomeContent>
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  imgURl={
                    post._embedded['wp:featuredmedia'] &&
                    post._embedded['wp:featuredmedia'][0].source_url
                  }
                  title={post.title.rendered}
                  slug={post.slug}
                />
              )
            })}

            <ButtonPaginate
              onClickNext={nextPage}
              onClickPrev={prevPage}
              page={page}
              pageCount={pageCount}
            />
          </HomeContent>
        </>
      )}
    </>
  )
}
