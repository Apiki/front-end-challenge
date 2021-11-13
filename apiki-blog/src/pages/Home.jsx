import React from 'react'
import axios from 'axios'

import Post from '../components/Post'

import '../css/Home.css'

function Home () {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios
      .get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then((response) => setData(response.data))
  }, [])

  if (!data.length) return <p>Loading...</p>

  console.log(data)

  return (
    <div id="home">
      <h1 id="home-title">Fique informado sobre o mundo da tecnologia!</h1>

      {data.map((post) => (
        <Post
          key={post.id}
          title={post.title.rendered}
          image={post._embedded['wp:featuredmedia'][0].source_url}
          date={post._embedded['wp:featuredmedia'][0].date}
          link={post.slug}
        />
      ))}
    </div>
  )
}

export default Home
