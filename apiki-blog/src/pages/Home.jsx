import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

import PostCard from '../components/PostCard'

import fetchApiByPage from '../services/fetchApiByPage'

import '../css/Home.css'

function Home () {
  const [data, setData] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)
  let numberOfPages = 0

  React.useEffect(() => {
    axios
      .get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then((response) => {
        setData(response.data)
        numberOfPages = response.headers['x-wp-totalpages']
        setLoading(false)
      })
  }, [])

  if (loading) return <ReactLoading color="#252525" />

  return (
    <div id="home">
      <h1 id="home-title">Fique informado sobre o mundo da tecnologia!</h1>

      {data.map((post) => (
        <PostCard
          key={post.id}
          title={post.title.rendered}
          image={ post._embedded['wp:featuredmedia'][0].source_url }
          date={post._embedded['wp:featuredmedia'][0].date}
          link={post.slug}
        />
      ))}

      <div id="home-btns-container">
        <button
          disabled={page === 1}
          onClick={ () => fetchApiByPage(page, setData, setPage, setLoading, 'before') }
          id="btn-load-more"
        >
          {'<'}
        </button>

        <p id="home-page-number">{page}</p>

        <button
          disabled={page === numberOfPages}
          onClick={ () => fetchApiByPage(page, setData, setPage, setLoading, 'after') }
          id="btn-load-more"
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Home
