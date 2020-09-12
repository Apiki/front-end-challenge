import React from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import './styles.css';

const Post = ({post}) => (
  <Link to={`/${post.slug}`}>
    <img
      src={post._embedded["wp:featuredmedia"][0].source_url}
      alt={post._embedded["wp:featuredmedia"][0].alt_text}
    />
    <div className="text-box">
      <span className="title-post">
        {post._embedded["wp:featuredmedia"][0].title.rendered}
      </span>
      <span className="date-post">
        Criado em:{" "}
        {format(
          parseISO(post._embedded["wp:featuredmedia"][0].date),
          "dd'/'MM'/'yyyy "
        )}
      </span>
    </div>
  </Link>
);

export default Post;
