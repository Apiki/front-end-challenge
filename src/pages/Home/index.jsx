import { useState, useCallback, useEffect } from 'react'
import { fetchPostsByCategory } from '../../services/api'
import PostCard from '../../components/PostCard'
import './index.css'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadPosts = useCallback(async (page) => {
    setLoading(true)
    try {
      const { posts: newPosts, totalPages } = await fetchPostsByCategory(518, page)
      if (newPosts.length === 0) return

      setPosts((prev) => {
        const idsExistentes = new Set(prev.map((p) => p.id))
        const novosFiltrados = newPosts.filter((p) => !idsExistentes.has(p.id))
        return [...prev, ...novosFiltrados]
      })

      setTotalPages(totalPages)
      setCurrentPage(page)
    } catch (err) {
      console.error('Erro ao carregar posts:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadPosts(1)
  }, [loadPosts])

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      loadPosts(currentPage + 1)
    }
  }

  return (
    <main className="home container">
      <header className="home__header">
        <h1 className="home__title">Posts de Desenvolvimento</h1>
        <p className="home__subtitle">
          Confira os artigos mais recentes sobre programação, tecnologia e desenvolvimento web.
        </p>
      </header>

      {loading && posts.length === 0 && (
        <p className="home__loading">Carregando posts...</p>
      )}

      {posts.length > 0 ? (
        <div className="home__grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        !loading && <p className="home__no-posts">Nenhum post encontrado.</p>
      )}

      {currentPage < totalPages && (
        <button
          className="home__load-more"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? 'Carregando mais posts...' : 'Ver mais artigos'}
        </button>
      )}
    </main>
  )
}
