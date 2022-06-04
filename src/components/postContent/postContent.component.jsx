import "./postContent.styles.scss";

const PostContent = ({ imgUrl, title, content }) => {
  return (
    <div className="post-container">
      <div className="post-container-img">
        <img src={imgUrl} />
      </div>
      <div className="post-container-content">
        <h1>{title}</h1>
        <div className="post-content">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostContent;
