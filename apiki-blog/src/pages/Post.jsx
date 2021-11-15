import React from 'react'
import axios from 'axios'

import Loading from '../components/Loading'
import Footer from '../components/Footer'

import '../css/Post.css'

function Post () {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const link = location.pathname.split('/')[2]
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${link}`)
      .then((response) => setData(response.data[0]))
  }, [])

  if (!data) return <Loading />

  const { title, excerpt, content } = data

  return (
    <div id="post">
      <div id="post-container">
        <h1>{title.rendered}</h1>
        <p
          id="post-subtitle"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        ></p>

        <hr />

        <p
          id="post-content"
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        ></p>
      </div>

      <Footer />
    </div>
  )
}

export default Post
