import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../css/PostCard.css'

function Post ({ title, image, link, author, description, date }) {
  const formatedDate = new Date(date).toLocaleDateString()

  return (
    <div className="post-card">
      <Link to={`/post/${link}`}>
        <h2 className="post-card__title">{title}</h2>
        <img className="post-card__image" src={image} alt={title} />
        <p className="post-card__date">{`${author || 'Blog'} - ${formatedDate}`}</p>
        <p
          className="post-card__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
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
