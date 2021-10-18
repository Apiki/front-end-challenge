import React, { memo } from "react";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import calculateReadingTime from "../../utils/calculateReadingTime";
import getPostEmbeddedData from "../../utils/getPostEmbeddedData";

import "./style.css";

function Spotlight({ mostRecentPost }) {
  const history = useHistory();
  const { embedded, featuredMedia, postImage } =
    getPostEmbeddedData(mostRecentPost);
  const readingTime = calculateReadingTime(mostRecentPost.content.rendered);

  // When the user click on the post, redirect him/her to the post page
  function handlePostClick() {
    history.push(`/post/${mostRecentPost.slug}`);
  }

  return (
    <section className="spotlight" onClick={handlePostClick}>
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
