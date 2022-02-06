import "./style.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const content = post.excerpt.rendered.replace("<p>", "").replace("</p>", "");
  const image = post._embedded["wp:featuredmedia"][0].source_url;
  const altText = post._embedded["wp:featuredmedia"][0].alt_text;
  const title = post.title.rendered;
  const author = post._embedded.author[0];
  const date = post.date.slice(0, 10).replaceAll("-", "/");

  return (
    <section className="post">
      <figure className="post__image--box">
        {post._embedded["wp:featuredmedia"] ? (
          <img className="post__image" src={image} alt={altText} />
        ) : (
          <img
            src="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
            alt="no-img"
            className="post__image"
          />
        )}
      </figure>
      <article className="post__box">
        <h3 className="post__title">{title}</h3>
        <p className="post__date">Publicado em: {date}</p>
        {post._embedded.author[0].avatar_urls != undefined ? (
          <section className="post__author">
            <p className="post__author--name">By: {author.name}</p>
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
        <Link to={`/${post.slug}`} className="post__link">
          Acesse a página
        </Link>
      </article>
    </section>
  );
};

export default Post;
