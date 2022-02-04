import "./style.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const date = new Date(post.date_gmt);
  const year = date.getFullYear();
  const content = post.excerpt.rendered;
  const formatedContent = content.replace("<p>", "").replace("</p>", "");

  return (
    <section className="post">
      <figure className="post__image--box">
        {post._embedded["wp:featuredmedia"] ? (
          <img
            className="post__image"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post._embedded["wp:featuredmedia"][0].alt_text}
            alt="img"
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
        <h3 className="post__title">{post.title.rendered}</h3>
        <p className="post__date">Publicado em: {year}</p>
        <p className="post__author">
          By:{" "}
          {post._embedded.author.map((author) => {
            return author.name;
          })}
        </p>
        <p className="post__description">{formatedContent}</p>
        <Link to={`/${post.slug}`} className="post__link">
          Acesse a página
        </Link>
      </article>
    </section>
  );
};

export default Post;
