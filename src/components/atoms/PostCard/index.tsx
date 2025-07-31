import { memo } from "react";
import { Link } from "react-router";
import type { IPostCard } from "./types";
import "./styles.scss";

export const PostCard = memo(function PostCard({ order, data }: IPostCard) {
    return (
        <li
            style={{ animationDelay: `${order * 0.1}s` }}
            className="post-card"
        >
            <article className="post-card__box post-card__box--main">
                <Link
                    to={`/post/${data.slug}`}
                    className="post-card__link"
                >
                    <figure className="post-card__box post-card__box--content">
                        <img
                            src={data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? ""}
                            loading="lazy"
                            alt="Illustrative image for post card"
                            className="post-card__img"
                        />
                        <figcaption className="post-card__text">{data.title.rendered}</figcaption>
                    </figure>
                </Link>
            </article>
        </li>
    );
});
