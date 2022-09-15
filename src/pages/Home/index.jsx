import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Preview from "../../components/Preview";
import "./styles.css";

const Home = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);

  var scrollTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`,
      {
        method: "get",
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setPosts(data);
        setLoading(false);
        scrollTop();
      })
      .catch((err) => {
        setPosts(err.message);
      });
  }, [page]);

  const changePage = () => {
    setPage(page + 1);
  };

  return (
    <div className="home">
      <Header />

      <div className="content">
        <h2 className="home__subtitle">
          Posts do Blog Apiki - categoria: <strong>Desenvolvimento</strong>
        </h2>
        {posts?.map((content) => (
          <Link className="links" to={`internal/${content.slug}`}>
            <Preview
              image={content.yoast_head_json.twitter_image}
              title={content.title.rendered}
              dataPost={content.date}
            />
          </Link>
        ))}
        <div id="box__Button">
        <button onClick={changePage} id="button">
          {loading ? "Carregando..." : "Carregar mais..."}
        </button>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
