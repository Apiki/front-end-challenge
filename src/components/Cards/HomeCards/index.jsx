import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import PostsContext from "../../../contexts";
import getPosts from "../../../services/getPosts";
import getMorePosts from "../../../services/getMorePosts";
import "./style.css";
import noIMG from "../../../assets/noIMG.png";

function HomeCards() {
  //const { posts, setPosts } = useContext(PostsContext);
  const [loading, setLoading] = useState(true);
  const [loadingMorePosts, setLoadingMorePosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const [counter, setCounter] = useState(2);

  useEffect(() => {
    getPosts(setPosts, posts);
    // async function loadData() {
    //   try {
    //     const response = await fetch(
    //       "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518",
    //       {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const data = await response.json();

    //     setPosts(data);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // loadData();
  }, []);

  console.log(posts);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
  }

  function loadMorePosts() {
    setCounter((value) => value + 1);
    console.log(counter);
    getMorePosts(setPosts, posts, counter);
    // if (data) {
    //   setLoading(true);
    //   console.log(data);

    //   console.log(counter);
    // }

    // async function loadData() {
    //   try {
    //     setLoadingMorePosts(true);
    //     const response = await fetch(
    //       `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${counter}`,
    //       {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const data = await response.json();
    //     console.log([...posts, ...data]);

    //     setPosts([...posts, ...data]);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setLoadingMorePosts(false);
    //   }
    // }
    // loadData();
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="cards">
        {posts.map((post) => (
          <div className="card">
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
      {loadingMorePosts ? (
        <p>Loading...</p>
      ) : (
        <button onClick={loadMorePosts}>Carregar mais...</button>
      )}
    </>
  );
}

export default HomeCards;
