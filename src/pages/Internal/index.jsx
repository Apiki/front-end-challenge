import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./styles.css"

const Internal = () => {
  const [items, setItems] = useState([])

  let { slug } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
      )
      const data = await res.json()
      setItems(data)
    };

    getPost()
  })
  return (
    <div className="home">
      <Header />

      <div className="c-internal__content">
        {items?.map((content) => (
          <div className="c-internal__content__position">
            <h1>{content.title.rendered}</h1>
            <img
              id="c-internal__img"
              src={content.yoast_head_json.twitter_image}
              alt=""
            />
            <div
              dangerouslySetInnerHTML={{ __html: content.content.rendered }}
            />
          </div>
        ))}
        <div id="container-button">
          <Link id="link__button" className="links" to="/">
            <button id="button">Voltar</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Internal
