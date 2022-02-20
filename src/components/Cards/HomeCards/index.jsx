import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../../../contexts";
import getPosts from "../../../services/getPosts";
import getMorePosts from "../../../services/getMorePosts";
import "./style.css";

function HomeCards() {
  const { posts, setPosts } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  const [morePosts, setMorePosts] = useState([]);
  const [counter, updateCounter] = useState(2);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
  }

  async function loadData() {
    updateCounter(counter + 1);
    const data = await getMorePosts(setMorePosts, counter);
    if (data) {
      setLoading(true);
      console.log(data);
      console.log(morePosts);
      console.log(counter);
    }
  }

  function loadMorePosts() {
    loadData();
  }

  return (
    <>
      <div className="cards">
        {posts.map((post) => (
          <div className="card">
            <div className="post-img">
              <Link to={`/post/${post.slug}`}>
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
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
      {/* {loading && (
        <div className="cards">
          {morePosts.map((post) => (
            <div className="card">
              <div className="post-img">
                <Link to={`/post/${post.slug}`}>
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt="Imagem do Post"
                  />
                </Link>
              </div>
              <div className="post-title">
                <Link to={`/post/${post.slug}`}>
                  <h2>{post.title.rendered}</h2>
                </Link>

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
      )} */}
      <button onClick={loadMorePosts}>Carregar mais...</button>
    </>
  );
}

export default HomeCards;
