import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__illustration">
        <img
          className="not-found__illustration__img"
          src="/static/images/lost.svg"
          alt="Desenho de uma pessoa perdida, olhando placas"
        />
      </div>

      <div className="not-found__info">
        <h1 className="not-found__info__title">
          Opa, parece que não tem nada por aqui
        </h1>
        <p className="not-found__info__content">
          É, está bem vazio por aqui, acho melhor conferir a URL, ou, se
          preferir você pode
        </p>
        <Link
          to="/"
          className="not-found__info__button round-borders"
          type="button"
        >
          Retornar para a página principal
        </Link>
      </div>
    </div>
  );
}
