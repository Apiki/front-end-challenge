import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../../../contexts";
import getPosts from "../../../services/getPosts";
import "./style.css";

function HomeCards() {
  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
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
    </>
  );
}

export default HomeCards;
