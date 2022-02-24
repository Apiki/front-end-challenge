/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import { useState, useEffect } from "react";
import getPost from "../../../services/getPost";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CommentBox } from "../../CommentBox";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostsCards() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function loadData() {
      const data = await getPost(setPost, slug);
      if (data) {
        setLoading(true);
      }
    }

    loadData();
    setLoading(false);
  }, [slug]);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
  }

  if (!loading) {
    return (
      <div className="skeleton-loading">
        <Skeleton height={400} width={800} count={1} borderRadius={50} />
        <Skeleton className="skeleton-h" height={50} width={700} count={1} />
        <Skeleton className="skeleton-p" height={30} width={650} count={5} />
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="main-content">
          <div className="post-img">
            <img
              src={post[0]._embedded["wp:featuredmedia"][0].source_url}
              alt="Imagem do Post"
            />
          </div>
          <h2>{post[0].title.rendered}</h2>
          <div className="post-info">
            <span>{handleDate(post[0].date)}</span>•
            <span>
              {post[0].yoast_head_json.twitter_misc["Est. tempo de leitura"]} de
              leitura
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
            className="post-content"
          ></div>
          <div className="author">
            <h4>{post[0]._embedded.author[0].name}</h4>
            <p>"{post[0]._embedded.author[0].description}"</p>
          </div>
          <footer>
            <a href="#">↟ Voltar ao início</a>
            <Link to={"/"}>↻ Voltar à página principal</Link>
          </footer>
        </div>
      )}
      <CommentBox></CommentBox>
    </>
  );
}

export default PostsCards;
