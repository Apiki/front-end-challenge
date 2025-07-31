import { memo } from "react";
import { Link } from "react-router";
import type { INotFoundPage } from "./types";
import "./styles.scss";

export const NotFoundPage = memo(function NotFoundPage({ src, title, description }: INotFoundPage) {
    return (
        <section className="not-found-page">
            <figcaption className="not-found-page__box">
                <img
                    src={src}
                    alt="Error page - 404"
                    loading="lazy"
                    className="not-found-page__img"
                />
                <figcaption className="not-found-page__text not-found-page__text--caption">
                    404 - Página não encontrada
                </figcaption>
            </figcaption>
            <h1 className="not-found-page__text">{title}</h1>
            <p className="not-found-page__text">{description}</p>
            <Link
                to="/"
                className="not-found-page__link"
            >
                Voltar para a Home
            </Link>
        </section>
    );
});
