import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  function renderThumb() {
    if (post._embedded["wp:featuredmedia"] !== undefined) {
      let thumbData = post._embedded["wp:featuredmedia"][0];
      let thumbMedium =
        thumbData.media_details?.sizes["jnews-750x375"]?.source_url;
      let thumbAlt = thumbData.alt_text;
      return (
        <div className="PostCard-thumb">
          <img src={thumbMedium} alt={thumbAlt} />
        </div>
      );
    } else return;
  }

  function renderCategory() {
    let categoryName = post._embedded["wp:term"][0][0].name;
    return <h4 className="PostCard-category">{categoryName}</h4>;
  }

  function renderTitle() {
    let titleName = post.title.rendered;
    return (
      <Link to={`/post/${post.slug}`} className="PostCard-title">
        <span dangerouslySetInnerHTML={{ __html: titleName }} />
      </Link>
    );
  }

  function renderAuthor() {
    let authorName = post._embedded.author[0].name;
    return <span className="PostCard-author">{authorName}</span>;
  }

  function renderDate() {
    let publishedDate = new Date(post.date);
    const formattedDate = `${publishedDate.getDay()}/${
      publishedDate.getMonth() + 1
    }/${publishedDate.getFullYear()}`;
    return <span className="PostCard-date">{formattedDate}</span>;
  }

  return (
    <div className="PostListing-PostCard">
      {renderThumb()}
      <div className="PostCard-content">
        {renderCategory()}
        {renderTitle()}
        <div className="PostCard-metadata">
          {renderAuthor()}
          {renderDate()}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
