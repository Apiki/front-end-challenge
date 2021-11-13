import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../css/Post.css'

function Post ({ title, image, link, date }) {
  const formatedDate = new Date(date).toLocaleDateString(0)

  return (
    <div id="post">
      <Link to={`/post/${link}`}>
        <div id="post-infos">
          <h2>{title}</h2>
          <p>{formatedDate}</p>
        </div>
        <img id="post-image" src={image} alt={title} />
      </Link>
    </div>
  )
}

export default Post

Post.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
