import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarPostPorSlug } from "../services/api";
import Header from "../components/Header";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await buscarPostPorSlug(slug);
        setPost(postData);
      } catch (erro) {
        console.error("Erro ao buscar artigo:", erro);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="animate-pulse text-lg font-medium text-gray-500">
          Carregando artigo...
        </p>
      </div>
    );
  }

  const imagem = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:-translate-x-1 hover:text-blue-800"
        >
          <span aria-hidden="true">←</span>
          Voltar para os artigos
        </Link>

        <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="p-6 sm:p-10">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-600">
              Artigo
            </span>

            <h1
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />
          </div>

          {imagem && (
            <img
              src={imagem}
              alt={post.title.rendered.replace(/<[^>]*>/g, "")}
              className="max-h-[500px] w-full object-cover"
            />
          )}

          <div
            className="prose prose-lg max-w-none px-6 py-8 text-gray-700 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-img:mx-auto prose-img:rounded-xl sm:px-10 sm:py-12"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </article>

        <div className="py-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            <span aria-hidden="true">←</span>
            Voltar para o início
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Post;
