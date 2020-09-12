import React, { useState } from "react";
import { parseISO, format } from "date-fns";
import { FiHeart } from "react-icons/fi";
import "./styles.css";

const PostDescription = ({ post}) => {
  const [like, setLike] = useState(false);

  return (
    <div className="box-post">
      <img
        src={post._embedded["wp:featuredmedia"][0].source_url}
        alt={post._embedded["wp:featuredmedia"][0].alt_text}
      />
      <span className="fullpost-title">
        {post._embedded["wp:featuredmedia"][0].title.rendered}
      </span>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <div className="fullpost-footer">
        <span className="fullpost-author">{post._embedded.author[0].name}</span>
        <span className="fullpost-date">
          Criado em: {format(parseISO(post.date), "dd'/'MM'/'yyyy ")}
        </span>
      </div>
      <div className="like">
        Gostou desse post? Deixe o seu like!{" "}
        <FiHeart size={20} color={like ? "red" : null} onClick={()=> setLike(prevState => !prevState)} />
      </div>
    </div>
  );
};

export default PostDescription;
