import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

import '../css/Post.css'

function Post () {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const link = location.pathname.split('/')[2]
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${link}`)
      .then((response) => setData(response.data[0]))
  }, [])

  console.log(data)

  if (!data) return <ReactLoading color="#252525" />

  const { title, excerpt, content } = data

  return (
    <div id="post">
      <div id="post-container">
      <h1>{title.rendered}</h1>
      <p id="post-subtitle" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>

      <p
        id="post-content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      ></p>
      </div>
    </div>
  )
}

export default Post
