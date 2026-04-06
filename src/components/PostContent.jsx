export default function PostContent({ post }) {
  return (
    <section className="post-content container" aria-label="Conteúdo do post">
      <div className="post-content__wrapper">
        <div
          className="post-content__body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 ? (
          <footer className="post-content__footer">
            <p className="post-content__tags-label">Tags</p>
            <div className="post-content__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-content__tag">
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        ) : null}
      </div>
    </section>
  );
}
