import React from 'react'

import fetchHome from '../services/fetchHome'

import Loading from '../components/Loading'
import PostCard from '../components/PostCard'

import fetchApiByPage from '../services/fetchApiByPage'

import '../css/Home.css'

function Home () {
  const [data, setData] = React.useState([])
  const [page, setPage] = React.useState(2)
  const [totalPages, setTotalPages] = React.useState(null)

  React.useEffect(() => {
    fetchHome(setData, setTotalPages)
  }, [])

  if (!data.length) return <Loading />

  return (
    <div className="home">
        {data.map((post) => {
          return (
            post._embedded['wp:featuredmedia'] && (
              <PostCard
                key={post.id}
                title={post.title.rendered}
                image={post._embedded['wp:featuredmedia'][0].source_url}
                date={post._embedded['wp:featuredmedia'][0].date}
                author={post._embedded.author[0].name}
                description={post.excerpt.rendered}
                link={post.slug}
              />
            )
          )
        })}

      <button
        disabled={page === totalPages}
        onClick={() => fetchApiByPage(page, data, setData, setPage)}
        className="home__btn"
      >
        Carregar mais...
      </button>
    </div>
  )
}

export default Home
