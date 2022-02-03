import React from "react";
import "./style/style.css";

const Post = (props) => {
  const title = props.data.title.rendered;
  const image = props.data._embedded["wp:featuredmedia"][0].source_url;
  const excerpt = props.data.excerpt.rendered
    .replace("<p>", "")
    .replace("</p>", "");
  const data = props.data.date.slice(0, 10);
  const autor = props.data._embedded.author[0];

  console.log(autor.link);

  return (
    <div className="post">
      <a href={"/" + props.data.slug}>
        <img src={image} alt="" />
      </a>
      {autor.avatar_urls != undefined ? (
        <a
          href={autor.link ? autor.link : {}}
          className="post__author"
          target="_blank"
        >
          <img src={autor.avatar_urls[48]} alt="" />
        </a>
      ) : null}
      <div className="post__info">
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <span className="post__info__date">
          <i className="far fa-calendar-alt"></i> {data}
        </span>
      </div>
    </div>
  );
};

export default Post;
