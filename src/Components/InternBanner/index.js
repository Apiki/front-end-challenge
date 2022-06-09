import "./internBanner.scss";

const InternBanner = ({ post }) => {
  const title = post[0].title.rendered
    .replace("&#8220;", "")
    .replace("&#8221;", "")
    .replace("&#8211;", "");
  const subtitle = post[0].excerpt.rendered
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("&#8220;", "")
    .replace("&#8221;", "")
    .replace("&nbsp;", "")
    .replace("[&hellip;]", "");
  const image = post[0]._embedded["wp:featuredmedia"];
  const author = post[0]._embedded["author"];
  const date = new Date(post[0].date).toLocaleDateString();

  return (
    <section
      className="intern--banner"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image[0].source_url})`,
        height: "60vh",
        position: "relative",
      }}
    >
      <section className="intern--banner__vertical">
        <article className="intern--banner__content">
          <h1 className="intern--banner__content__title">{title}</h1>
          <p className="intern--banner__content__subtitle">{subtitle}</p>
          <section className="intern--banner__content__author">
            {author[0].name ? (
              <>
                <img
                  className="intern--banner__content__author__icon"
                  src={author[0].avatar_urls["48"]}
                  alt="author"
                />
                <p className="intern--banner__content__author__name">
                  {author[0].name}
                </p>
              </>
            ) : (
              <>
                <img
                  className="intern--banner__content__author__icon"
                  src="data:image/png;base64,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"
                  alt="author"
                />
                <p className="intern--banner__content__author__name">
                  Autor não encontrado
                </p>
              </>
            )}
          </section>
          <span className="intern--banner__content__date">{date}</span>
        </article>
      </section>
    </section>
  );
};

export default InternBanner;
