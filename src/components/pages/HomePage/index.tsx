import { PostsLayout } from "~components/organisms";
import "./styles.scss";

export const HomePage = () => (
    <section className="home-page">
        <section className="home-page__box">
            <section className="home-page__box home-page__box--text">
                <h1 className="home-page__text home-page__text--title">
                    Bem-vindo ao Blog Dev da <strong className="home-page__text home-page__text--strong">Apiki</strong>
                </h1>
                <p className="home-page__text home-page__text--base">
                    Artigos técnicos, insights e atualizações para desenvolvedores.
                </p>
            </section>
            <section className="home-page__box home-page__box--links">
                <a
                    href="https://apiki.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-page__link"
                >
                    Conheça a Apiki
                </a>
                <a
                    href="#posts"
                    className="home-page__link"
                >
                    Comece a explorar
                </a>
            </section>
        </section>
        <div className="home-page__divider" />
        <section
            id="posts"
            className="home-page__box home-page__box--posts"
        >
            <h2 className="home-page__text home-page__text--subtitle">Últimas Postagens</h2>
            <PostsLayout />
        </section>
    </section>
);
