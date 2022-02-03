import React from "react";
import "./style/style.css";

const Post = (props) => {
  const title = props.data.title.rendered;
  const image = props.data._embedded["wp:featuredmedia"][0].source_url;
  const excerpt = props.data.excerpt.rendered
    .replace("<p>", "")
    .replace("</p>", "");

  // console.log(props.data);

  return (
    <div className="post">
      <a href={"/" + props.data.slug}>
        <img src={image} alt="" />
        <div className="post__info">
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default Post;
