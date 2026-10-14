import { Link } from "react-router-dom";

function PostCard({ post }) {
  if (!post) {
    return <p>Este card não recebeu um post.</p>;
  }

  const imagem = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {imagem ? (
        <div className="overflow-hidden">
          <img
            src={imagem}
            alt={post.title.rendered.replace(/<[^>]*>/g, "")}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center bg-gray-100 text-sm text-gray-400">
          Sem imagem disponível
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
          Artigo
        </span>

        <h2
          className="mb-4 line-clamp-3 text-xl font-bold leading-7 text-gray-900 transition-colors group-hover:text-blue-600"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        />

        <div
          className="line-clamp-3 text-sm leading-6 text-gray-500"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <div className="mt-auto pt-6">
          <Link
            to={`/post/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 cursor-pointer rounded-full p-1 transition-colors"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              Ler artigo
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
