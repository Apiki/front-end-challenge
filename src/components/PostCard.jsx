import { Link } from 'react-router-dom'

function calcularTempoDeLeitura(html) {
  const palavrasPorMinuto = 200;
  const texto = html.replace(/<[^>]*>/g, ''); // Remove tags HTML
  const palavras = texto.trim().split(/\s+/).length;
  const minutos = Math.ceil(palavras / palavrasPorMinuto);
  return `${minutos} minutos`;
}

export default function PostCard({ post }) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name || 'Autor desconhecido'
  const excerpt = (post.excerpt?.rendered?.replace(/<[^>]+>/g, '').slice(0, 250) || '') + '...'
  const date = new Date(post.date).toLocaleDateString('pt-BR')
  const tempoDeLeitura = calcularTempoDeLeitura(post?.content?.rendered || '')

  return (
    <div className="rounded-lg p-6 flex gap-2 lg:gap-4 flex-row flex-wrap md:flex-nowrap text-justify bg-primary h-full">
      {featuredImage && (
        <figure className="w-[104px] lg:w-[160px] xl:w-[273px] aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4 md:mb-0 shrink-0">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover"
          />
        </figure>
      )}

      <div className="flex-1 flex flex-col justify-between p-1">
        <h2
          className="text-[15px] lg:text-lg font-bold mb-3 font-title text-white break-words"
          dangerouslySetInnerHTML={{ __html: post.title.rendered || 'Título não disponível' }}
        />
        <p className="hidden sm:block text-primary text-[15px] mb-4 font-text break-words">
          {excerpt}
        </p>
        <div className="flex justify-between text-xs text-secondary font-text mt-auto">
          <div className="hidden md:flex flex-col py-2">
            <span className="truncate">Autor: {author}</span>
            <span>Publicado em {date}</span>
            <span>{tempoDeLeitura}</span>
          </div>
          <div className="flex md:hidden invisible">
            <span>Placeholder</span>
          </div>
          <div className="flex items-center">
            <Link
              to={`/post/${post.slug}`}
              className="text-white border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400
            transition text-xs lg:text-sm font-semibold">
              Ler mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}