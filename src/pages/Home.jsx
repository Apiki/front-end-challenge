import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Importação adicionada

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (pageNum) => {
    const res = await fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNum}`
    );
    const data = await res.json();
    const total = res.headers.get("X-WP-TotalPages");
    setTotalPages(Number(total));
    setPosts((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const stripHTML = (html) => html.replace(/<[^>]+>/g, "");

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="home">
      <div className="home-align">

        <section className="recent-posts">
          <h2>Posts recentes</h2>
          <div className="recent-posts__grid">
            {recentPosts.map((post) => (
              <Link to={`/post/${post.slug}`} className="post-card" key={post.id}>
                {post._embedded["wp:featuredmedia"] && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="post-card__image"
                  />
                )}
                <h3
                  className="post-card__title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="post-card__excerpt">
                  {stripHTML(post.content.rendered).slice(0, 120)}...
                </p>
                <div className="lermais">
                  <p>Ler Mais <i className="bi bi-arrow-right"></i></p>
                </div>
              </Link>
            ))}
          </div>

          {page < totalPages && (
            <button
              className="btn-load-more"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Ver mais Posts
            </button>
          )}
        </section>
      </div>

      <footer className="footer">
        <div className="footer__top">
          <h3>Vamos começar algo incrível!</h3>
          <p>Estou em busca de uma nova oportunidade na área Dev, e se gostaram do meu projeto, <br /> vamos conversar mais equipe Apiki!</p>
          <div className="footer__buttons">
            <a href="https://wa.me/5519996328096"><button>WhatsApp</button></a>
            <a href="https://www.linkedin.com/in/grazieli-freitas-martins-61329b258/"><button>Linkedin</button></a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 Teste para Programadora Front-End</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
