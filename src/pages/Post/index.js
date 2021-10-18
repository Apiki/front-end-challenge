/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import HtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";

import "./style.css";

import getPost from "../../services/Posts/getPost";
import getPostEmbeddedData from "../../utils/getPostEmbeddedData";
import calculateReadingTime from "../../utils/calculateReadingTime";

export default function Post({ match }) {
  const history = useHistory();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the post
    async function getInitialPost() {
      const retrievedPost = await getPost(match.params.postSlug);

      // If don't found the post return to the main page
      if (!retrievedPost) return history.push("/");

      setPost(() => retrievedPost[0]);
      setLoading(false);
    }

    getInitialPost();
  }, []);

  // return a loading until the post load
  if (loading) return <h1>Carregando</h1>;

  // Alocate the data nedded on the post
  const { embedded, featuredMedia, postImage } = getPostEmbeddedData(post);
  const readingTime = calculateReadingTime(post.content.rendered);

  return (
    <article className="post container">
      <header className="post__header">
        <div className="post__header__cover">
          <img
            src={postImage.source_url}
            alt={featuredMedia.alt_text}
            className="post__header__cover__img round-borders"
          />
        </div>
        <div className="post__header__info">
          <h1 className="spotlight__info__title">{post.title.rendered}</h1>

          <p className="spotlight__info__reading-time">
            <AiFillClockCircle size={20} /> {readingTime} minutos de leitura
          </p>

          <p className="spotlight__info__author">
            Publicado por <b>{embedded.author[0].name}</b>
          </p>
        </div>
      </header>

      <div className="post__content">{HtmlParser(post.content.rendered)}</div>
    </article>
  );
}
