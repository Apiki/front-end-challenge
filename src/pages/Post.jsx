import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then(res => res.json())
      .then(data => setPost(data[0]))
  }, [slug])

  useEffect(() => {
    if (post) {
      AOS.init({ duration: 1000 })
      AOS.refresh()
    }
  }, [post])

  if (!post) return <p className="p-4">Carregando...</p>

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

  return (
      <div className="mx-auto p-6 bg-black text-white max-w-7xl">
        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered || "Imagem do post"}
            className="w-full h-auto object-cover mb-5 rounded-lg transition-all duration-700"
            data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1500"
          />
        )}
        <div
          className="post-content px-4 font-title text-justify"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
  )
}
