/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../../../contexts";
import getPosts from "../../../services/getPosts";
import getMorePosts from "../../../services/getMorePosts";
import "./style.css";
import noIMG from "../../../assets/noIMG.png";

import SkeletonMain from "../../SkeletonMain";

function HomeCards() {
  const { posts, setPosts } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  const [loadingMorePosts, setLoadingMorePosts] = useState(false);

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    async function loadData() {
      const data = await getPosts(setPosts, posts);

      if (data) {
        setLoading(true);
      }
    }

    loadData();
    setLoading(false);
  }, []);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
  }

  function loadMorePosts() {
    setCounter((value) => value + 1);
    getMorePosts(setPosts, posts, counter);
  }

  if (!loading) {
    return <SkeletonMain />;
  }

  return (
    <>
      <div className="cards">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="post-img">
              <Link to={`/post/${post.slug}`}>
                <img
                  src={
                    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                    noIMG
                  }
                  alt="Imagem do Post"
                />
              </Link>
            </div>
            <div className="post-title">
              <Link to={`/post/${post.slug}`}>
                <h2>{post.title.rendered}</h2>
              </Link>
              <p>{post.yoast_head_json.description}</p>

              <span>
                Link:{" "}
                <Link to={`/post/${post.slug}`} className="slug">
                  {post.slug}
                </Link>
              </span>

              <p>{handleDate(post.date)}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="load-btn" onClick={loadMorePosts}>
        Carregar mais...
      </button>
    </>
  );
}

export default HomeCards;
