import React from "react";
import "./style/style.css";

const Post = (props) => {
  const title = props.data.title.rendered;
  const image = props.data._embedded["wp:featuredmedia"][0].source_url;
  const excerpt = props.data.excerpt.rendered;
  const data = props.data.date.slice(0, 10);
  const autor = props.data._embedded.author[0];
  const id = props.data.id;

  setTimeout(() => {
    const excerptContainer = document
      .querySelector(`[data-id="${id}"]`)
      .querySelector("p");
    const titleContainer = document
      .querySelector(`[data-id="${id}"]`)
      .querySelector("h2");

    excerptContainer.innerHTML = excerpt;
    titleContainer.innerHTML = title;

    console.log(excerptContainer);
  }, 300);

  return (
    <div className="post" data-id={id}>
      <a href={"/" + props.data.slug}>
        <img src={image} alt="" />
      </a>
      {autor.avatar_urls != undefined ? (
        <a
          href={autor.link ? autor.link : {}}
          className="post__author"
          target="_blank"
          title={"Publicado por " + autor.name}
        >
          <img src={autor.avatar_urls[48]} alt="" />
        </a>
      ) : null}
      <div className="post__info">
        <h2>
          <a href={"/" + props.data.slug}>{title}</a>
        </h2>
        <p></p>
        <span className="post__info__date">
          <i className="far fa-calendar-alt"></i> {data}
        </span>
      </div>
    </div>
  );
};

export default Post;
