import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/style.scss';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPagina, setTotalPagina] = useState(null);

  async function carregarPosts(numPostPagina) {
    const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${numPostPagina}`);

    if (!totalPagina) {
      const total = res.headers.get("X-WP-TotalPages");
      setTotalPagina(Number(total));
    }

    const response = await res.json();

    setPosts(prevPosts => {
      const ids = new Set(prevPosts.map(post => post.id));
      const novosPosts = response.filter(post => !ids.has(post.id));
      return [...prevPosts, ...novosPosts];
    });
  }

  useEffect(() => {
    carregarPosts(page);
  }, [page]);

  return (
    <>
      <h1 className="title__page">Últimas notícias</h1>
      <div className="box">
        {posts.map(data => (
          <div key={data.id} className="box__card">
            <img className="box__image" src={data._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url} alt="Imagem do post" title="Imagem do post"/>
            <h2 className="box__title" dangerouslySetInnerHTML={{ __html: data?.title?.rendered }} />
            <p className="box__excerpt" dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}></p>
            <Link className="box__link" to={`/post/${data.slug}`}>Leia mais</Link>
          </div>
        ))}

        {totalPagina && page < totalPagina && (
          <button className="box__button" onClick={() => setPage(page + 1)}>Carregar mais</button>
        )}
      </div>
    </>
  );
}

export default Blog;
