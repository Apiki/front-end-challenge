import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../css/PostCard.css'

function Post ({ title, image, link, author, description, date }) {
  const formatedDate = new Date(date).toLocaleDateString()

  return (
    <div id="postCard">
      <Link to={`/post/${link}`}>
        <h2 id="postCard-title">{title}</h2>
        <img id="postCard-image" src={image} alt={title} />
        <p id="postCard-date">{`${author || 'Blog'} - ${formatedDate}`}</p>
        <p
          id="postCard-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </Link>
    </div>
  )
}

export default Post

Post.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
}
