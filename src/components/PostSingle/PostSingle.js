import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";

function PostSingle() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    function fetchPost() {
      fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + slug)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setPost(data[0]);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchPost();
  }, [slug]);

  function renderPageTitle() {
    let categoryName = post.yoast_head_json.title;
    return <title>{categoryName}</title>;
  }

  function renderBackButton() {
    let categoryName = post._embedded["wp:term"][0][0].name;
    return (
      <Link to="/">
        <button className="PostSingle-backButton">
          Voltar para {categoryName}
        </button>
      </Link>
    );
  }

  function renderTitle() {
    return (
      <h1
        className="PostSingle-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
    );
  }
  function renderExcerpt() {
    return (
      <h3
        className="PostSingle-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    );
  }
  function renderContent() {
    return <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />;
  }

  function renderThumb() {
    if (post._embedded["wp:featuredmedia"] !== undefined) {
      let thumbData = post._embedded["wp:featuredmedia"][0];
      let thumbMedium = thumbData.media_details?.sizes["large"]?.source_url;
      let thumbAlt = thumbData.alt_text;
      return (
        <div className="PostSingle-thumb">
          <img src={thumbMedium} alt={thumbAlt} />
        </div>
      );
    } else return;
  }

  function renderAuthor() {
    let authorName = post._embedded.author[0].name;
    return <span className="PostSingle-author">Escrito por {authorName}</span>;
  }

  function renderDate() {
    let publishedDate = new Date(post.date);
    const formattedDate = `${publishedDate.getDay()}/${
      publishedDate.getMonth() + 1
    }/${publishedDate.getFullYear()}`;
    return <span className="PostSingle-date">{formattedDate}</span>;
  }

  function renderTags() {
    let tags = post._embedded["wp:term"][1];
    return (
      <div className="PostSingle-tags">
        <h4 className="PostSingle-tagsTitle">Tags:</h4>
        {tags.map((tag) => {
          return (
            <span key={tag.id} className="PostSingle-tag">
              {tag.name}
            </span>
          );
        })}
      </div>
    );
  }

  if (isLoading) return <Loading />;
  return (
    <div className="PostSingle">
      {renderPageTitle()}
      <div className="container container-narrow">
        {renderBackButton()}
        {renderTitle()}
        {renderExcerpt()}
        <div className="PostSingle-metadata">
          {renderAuthor()}
          {renderDate()}
        </div>
        {renderThumb()}
        {renderContent()}
        {renderTags()}
      </div>
    </div>
  );
}

export default PostSingle;
