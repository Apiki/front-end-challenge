import Header from "../components/Header";
import LoadMoreButton from "../components/LoadMoreButton";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
import { buscarPost } from "../services/api.js";

function Home() {
  const [pagina, setPagina] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const dados = await buscarPost(pagina);
        setPosts(dados);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }
    fetchPosts();
  }, [pagina]);

  async function handleLoadMore() {
    const proximaPagina = pagina + 1;
    setIsLoading(true);
    try {
      const novosPosts = await buscarPost(proximaPagina);
      setPosts((prevPosts) => [...prevPosts, ...novosPosts]);
      setPagina(proximaPagina);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-12">
        <section className="mb-10 border-b border-gray-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Blog & Notícias
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Ideias que <span className="text-blue-600">inspiram.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Confira nossos artigos, novidades e conteúdos mais recentes.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        <div className="flex justify-center py-12">
          <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />
      
        </div>
      </main>
    </div>
  );
}

export default Home;
