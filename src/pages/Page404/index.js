import "./page404.scss";
import { Link } from "react-router-dom";
import Lost from "../../images/lost.png";

const Page404 = () => {
  return (
    <main className="page--404">
      <figure className="page--404__content">
        <img
          className="page--404__content__image"
          src={Lost}
          alt="BMO de Hora de aventura com expressão facial assustada"
        />
      </figure>
      <article className="page--404__container">
        <h2 className="page--404__container__title">Ah não!</h2>
        <p className="page--404__container__text">
          Você está perdido, mas não se assuste.
        </p>
        <p className="page--404__container__text">É só um erro 404</p>
        <Link to="/" className="page--404__container__link">
          Volte a civilização
        </Link>
      </article>
    </main>
  );
};

export default Page404;
