import "./style.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const content = post.excerpt.rendered
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("&#8220;", "")
    .replace("&#8221;", "")
    .replace("&nbsp;", "")
    .replace("&nbsp;", "")
    .replace("[&hellip;]", ".");
  const image = post._embedded["wp:featuredmedia"];
  const title = post.title.rendered
    .replace("&#8220;", "")
    .replace("&#8221;", "")
    .replace("&#8211;", "");
  const author = post._embedded.author[0];
  const date = post.date.slice(0, 10).replaceAll("-", "/");

  return (
    <section className="post">
      <figure className="post__image--box">
        {image ? (
          <img
            className="post__image"
            src={image[0].source_url}
            alt={image[0].alt_text}
          />
        ) : (
          <img
            src="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
            alt="no-img"
            className="post__image"
          />
        )}
      </figure>
      <article className="post__box">
        <Link to={`/${post.slug}`} className="post__link">
          <h3 className="post__title">{title}</h3>
        </Link>
        <p className="post__date">Publicado em: {date}</p>
        {post._embedded.author[0].avatar_urls != undefined ? (
          <section className="post__author">
            <p className="post__author--name">Por: {author.name}</p>
            <img
              className="post__author--avatar"
              src={author.avatar_urls[48]}
              alt="Avatar do autor"
            />
          </section>
        ) : (
          <section className="post__author">
            <p className="post__author--name">By: Sem autor</p>
            <img
              className="post__author--avatar"
              src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png"
              alt="Autor indisponível"
            />
          </section>
        )}
        <p className="post__description">{content}</p>
      </article>
    </section>
  );
};

export default Post;
