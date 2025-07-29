import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPostBySlug } from '../../services/api'
import './index.css'

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPostBySlug(slug)
      .then(setPost)
      .catch(console.error)
  }, [slug])

  if (!post) {
    return <section className="post__loading">Carregando post...</section>
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name || 'Autor desconhecido'
  const title = post.title?.rendered || 'Sem título'
  const cleanTitle = title.replace(/<[^>]+>/g, '')
  const content = post.content?.rendered || '<p>Conteúdo indisponível.</p>'

  const date = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const wordCount = content.replace(/<[^>]+>/g, '').trim().split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <article className="post container">
      {featuredImage && (
        <img className="post__image" src={featuredImage} alt={cleanTitle} />
      )}

      <div className="post__meta">
        <span className="post__author">Por {author}</span>
        <span className="post__date">{date}</span>
        <span className="post__reading-time">{readingTime} min de leitura</span>
      </div>

      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}
