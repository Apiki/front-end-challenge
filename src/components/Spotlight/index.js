import React, { memo } from "react";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";

import calculateReadingTime from "../../utils/calculateReadingTime";

import "./style.css";

function Spotlight({ mostRecentPost }) {
  const embedded = mostRecentPost._embedded;
  const featuredMedia = embedded["wp:featuredmedia"][0];
  const postImage = featuredMedia.media_details.sizes.large;
  const readingTime = calculateReadingTime(mostRecentPost.content.rendered);

  return (
    <section className="spotlight">
      <div className="spotlight__cover round-borders">
        <img
          src={postImage.source_url}
          alt={featuredMedia.alt_text}
          className="spotlight__cover__img round-borders"
        />
      </div>

      <div className="spotlight__info">
        <div className=".spotlight__info__badges">
          <span className="spotlight__info__badge round-borders">
            <AiFillStar />
            Acabou de sair do forno
          </span>
        </div>

        <h1 className="spotlight__info__title">
          {mostRecentPost.title.rendered}
        </h1>

        <p className="spotlight__info__reading-time">
          <AiFillClockCircle size={20} /> {readingTime} minutos de leitura
        </p>

        <p className="spotlight__info__author">
          Publicado por <b>{embedded.author[0].name}</b>
        </p>
      </div>
    </section>
  );
}

export default memo(Spotlight);
