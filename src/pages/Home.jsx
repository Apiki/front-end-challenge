import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PostCard from '../components/PostCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPosts = async (pageNum = 1) => {
    const res = await fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNum}`
    )
    const data = await res.json()
    if (pageNum === 1) {
      setPosts(data)
    } else {
      setPosts(prev => [...prev, ...data])
    }
    setTotalPages(Number(res.headers.get('X-WP-TotalPages')))
  }

  useEffect(() => {
    fetchPosts(page)
  }, [page])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  useEffect(() => {
    if (posts.length > 0) {
      AOS.refresh()
    }
  }, [posts])

  return (
    <main className="w-full p-5 bg-black text-white">
      <Helmet>
        <title>Blog da Apiki - Categoria Desenvolvimento</title>
        <meta
          name="description"
          content="Confira os últimos artigos da categoria Desenvolvimento do Blog da Apiki. Tutoriais, dicas e novidades sobre programação e tecnologia."
        />
        <meta property="og:title" content="Blog da Apiki - Desenvolvimento" />
        <meta
          property="og:description"
          content="Explore os artigos mais recentes sobre Desenvolvimento no Blog da Apiki."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h2 className="font-bold font-title text-3xl mb-5" data-aos="fade-down">Últimas postagens</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto items-stretch">
        {posts.map((post, index) => (
          <div key={post.id} data-aos="fade-up" data-aos-delay={index * 150}>
            <PostCard key={post.id} post={post} />
          </div>
          
        ))}
      </div>
      {page < totalPages && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="px-6 py-3 bg-yellow-400 text-white font-bold font-text rounded hover:bg-yellow-600 transition"
          >
            Carregar mais...
          </button>
        </div>
      )}
    </main>
  )
}
