import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

import PostCard from '../components/PostCard'

import fetchApiByPage from '../services/fetchApiByPage'

import '../css/Home.css'

function Home () {
  const [data, setData] = React.useState([])
  const [page, setPage] = React.useState(2)
  const [totalPages, setTotalPages] = React.useState(null)

  React.useEffect(() => {
    axios
      .get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then((response) => {
        setData(response.data)
        setTotalPages(Number(response.headers['x-wp-totalpages']))
      })
  }, [])

  if (!data.length) return <ReactLoading color="#252525" />

  return (
    <div id="home">

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
        id="btn-load-more"
      >
        Carregar mais...
      </button>
    </div>
  )
}

export default Home
