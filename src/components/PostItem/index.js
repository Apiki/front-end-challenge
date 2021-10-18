import React, { memo } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import calculateReadingTime from "../../utils/calculateReadingTime";
import getPostEmbeddedData from "../../utils/getPostEmbeddedData";

import "./style.css";

function PostItem({ post }) {
  const history = useHistory();
  const { embedded, featuredMedia, postImage } = getPostEmbeddedData(post);
  const readingTime = calculateReadingTime(post.content.rendered);

  // When the user click on the post, redirect him/her to the post page
  const handlePostClick = () => {
    history.push(`/post/${post.slug}`);
  };

  return (
    <div className="post-item" onClick={handlePostClick}>
      <div className="post-item__cover round-borders">
        <img
          className="post-item__cover__img round-borders "
          src={postImage?.source_url}
          alt={featuredMedia.alt_text}
        />
      </div>
      <div className="post-item__info">
        <h1 className="post-item__info__title">{post.title.rendered}</h1>

        <p className="post-item__info__reading-time">
          <AiFillClockCircle size={20} /> {readingTime} minutos de leitura
        </p>

        <p className="post-item__info__author">
          Publicado por <b>{embedded.author[0].name}</b>
        </p>
      </div>
    </div>
  );
}

// Using memo the posts will not re-render unless it own properties change, increases the performance (a lot)
export default memo(PostItem);
