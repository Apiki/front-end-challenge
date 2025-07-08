import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNum}`
      );

      const newPosts = response.data;

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setTotalPages(parseInt(response.headers['x-wp-totalpages']));
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  useEffect(() => {
    if (page === 1) return; 
    fetchPosts(page);
  }, [page]);

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="home">
      <h1 className="home-title">Blog Apiki</h1>

      <div className="post-list">
        {posts.length === 0 && !loading && (
          <p>Nenhuma postagem encontrada.</p>
        )}

        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <Link to={`/post/${post.slug}`}>
              <img
                src={
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                  'https://via.placeholder.com/400x200?text=Sem+imagem'
                }
                alt={post.title.rendered}
              />
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
          </div>
        ))}
      </div>

      {page < totalPages && (
        <button
          className="load-more-button"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Carregar mais...'}
        </button>
      )}
    </div>
  );
};

export default HomePage;
