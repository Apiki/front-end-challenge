import { Link } from 'react-router-dom'
import './index.css'

export default function PostCard({ post }) {
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name || 'Desconhecido'
  const rawTitle = post.title?.rendered || 'Sem título'
  const cleanTitle = rawTitle.replace(/<[^>]+>/g, '')
  const excerpt = post.excerpt?.rendered || ''
  const date = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="post-card">
      <Link to={`/post/${post.slug}`} className="post-card__link">
        {imageUrl && (
          <img
            className="post-card__image"
            src={imageUrl}
            alt={cleanTitle}
          />
        )}
        <h2
          className="post-card__title"
          dangerouslySetInnerHTML={{ __html: rawTitle }}
        />
      </Link>

      <div className="post-card__meta">
        <p className="post-card__date">Publicado em {date}</p>
        <p className="post-card__author">Por {author}</p>
      </div>

      <p
        className="post-card__excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </article>
  )
}
