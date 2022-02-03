import "./style.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const date = new Date(post.date_gmt);
  const year = date.getFullYear();
  const media = post._embedded["wp:featuredmedia"];
  const content = post.excerpt.rendered;
  const formatedContent = content.replace("<p>", "").replace("</p>", "");

  return (
    <section className="post">
      <figure className="post__image--box">
        <img
          className="post__image"
          src={media.map((item) => {
            return `https://blog.apiki.com/wp-content/uploads/sites/2/${item.media_details.file}`;
          })}
          alt={media.map((item) => {
            return item.alt_text;
          })}
        />
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
