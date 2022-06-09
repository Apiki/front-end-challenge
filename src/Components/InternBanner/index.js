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
                  src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
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
