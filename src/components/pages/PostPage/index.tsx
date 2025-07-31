import { Logo } from "~components/atoms";
import { renderElementIfTrue } from "~utils";
import { useController } from "./useController";
import "./styles.scss";

export const PostPage = () => {
    const { isLoading, data, date } = useController();

    return renderElementIfTrue(
        isLoading,
        <div>isLoading</div>,
        <section className="post-page">
            <section className="post-page__box">
                <section className="post-page__box post-page__box--heading">
                    <img
                        src={data?.[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                        alt="Illustrative image for post page"
                        loading="lazy"
                        className="post-page__img"
                    />
                    <h1 className="post-page__text post-page__text--title">{data?.[0].title.rendered}</h1>
                </section>
                <div
                    dangerouslySetInnerHTML={{ __html: data?.[0].excerpt.rendered ?? "" }}
                    className="post-page__box post-page__box--content"
                />
            </section>
            <div className="post-page__box post-page__box--logo">
                <div className="post-page__divider" />
                <Logo
                    iconOnly
                    size="sm"
                />
                <div className="post-page__divider" />
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: data?.[0].content.rendered ?? "" }}
                className="post-page__box post-page__box--content post-page__box--main"
            />
            <div className="post-page__divider" />
            <section className="post-page__box">
                <section className="post-page__box">
                    <p className="post-page__text post-page__text--footer">
                        Criado por:{" "}
                        <span className="post-page__text post-page__text--footer post-page__text--author">
                            {data?.[0]._embedded.author[0].name}
                        </span>
                    </p>
                    <p className="post-page__text post-page__text--footer">
                        {data?.[0]._embedded.author[0].description}
                    </p>
                </section>
                <p className="post-page__text post-page__text--footer">{date}</p>
            </section>
        </section>
    );
};
