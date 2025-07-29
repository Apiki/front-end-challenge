import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
      const data = await res.json();
      setPost(data[0]);
    };
    fetchPost();

    const hero = document.querySelector('.hero-img');
    if (hero) hero.style.display = 'none';
    return () => {
      if (hero) hero.style.display = '';
    };
  }, [slug]);

  useEffect(() => {
    const fetchMorePosts = async () => {
      const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&per_page=4`);
      const data = await res.json();
      const filtered = data.filter((p) => p.slug !== slug).slice(0, 3);
      setMorePosts(filtered);
    };

    fetchMorePosts();
  }, [slug]);

  const stripHTML = (html) => html.replace(/<[^>]+>/g, "");

  if (!post) return <p>Carregando...</p>;

  return (
    <div className="post">
      <div className="home-align">
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          {post._embedded["wp:featuredmedia"] && (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              style={{ width: '100%', display: 'block' }}
            />
          )}
<button
  onClick={() => {
    window.history.back();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }}
  className="btn-back"
>
 <i className="bi bi-box-arrow-in-left"></i> Voltar
</button>

<Link to="/" className="link-home">
  /Home
</Link>

        </div>

        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        {morePosts.length > 0 && (
          <section className="recent-posts">
            <h2>Veja mais Posts</h2>
            <div className="recent-posts__grid">
              {morePosts.map((p) => (
                <Link to={`/post/${p.slug}`} className="post-card" key={p.id}>
                  {p._embedded["wp:featuredmedia"] && (
                    <img
                      src={p._embedded["wp:featuredmedia"][0].source_url}
                      alt={p.title.rendered}
                      className="post-card__image"
                    />
                  )}
                  <h3 className="post-card__title" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                  <p className="post-card__excerpt">
                    {stripHTML(p.content.rendered).slice(0, 120)}...
                  </p>
                  <div className="lermais">
                    <p>Ler Mais <i className="bi bi-arrow-right"></i></p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
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

export default Post;
