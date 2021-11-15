import React from 'react'

import fetchPost from '../services/fetchPost'

import Loading from '../components/Loading'
import Footer from '../components/Footer'

import '../css/Post.css'

function Post () {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetchPost(setData)
  }, [])

  if (!data) return <Loading />

  const { title, excerpt, content } = data

  return (
    <div className="post">
      <div className="post-container">
        <h1>{title.rendered}</h1>
        <p
          className="post-container__subtitle"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        />
        <hr />
        <p
          className="post-container__content"
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Post
