import React from 'react';
import './index.css';

const BlogCard = (props) => {

  const { blog } = props;

  return (
    <article >
      <div className="card__container flex">
        <img className="card__img" src={`${blog._embedded['wp:featuredmedia']['0'].source_url}`}
          // alt={blog.title.rendered} width="300"></img>
          alt={blog.title.rendered} ></img>
        <div className="card__content flex">
          <div className="card__title">{blog.title.rendered}</div>
          <div className="card__author__container flex">
            <div className="card__author__by">By</div>
            <div className="card__author__name">
              {blog._embedded.author[0].name}

            </div>z
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard;
