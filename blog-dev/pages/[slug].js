import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Head from 'next/head'

export default function Post() {
  const router = useRouter()
  const slugPage = router.query['slug']
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slugPage}`
      )
      const newData = await response.json()
      setPost(newData)
    }

    fetchData()
  }, [slugPage])

  return (
    <>
      {post ? (
        post.length > 0 ? (
          <>
            <Head dangerouslySetInnerHTML={{ __html: post[0].yoast_head }}>
              <title>{post[0].yoast_head_json.title}</title>
              <meta
                name="description"
                content={post[0].yoast_head_json.description}
              />
              <link rel="canonical" href={post[0].yoast_head_json.canonical} />
              <meta
                property="og:locale"
                content={post[0].yoast_head_json.og_locale}
              />
              <meta
                property="og:type"
                content={post[0].yoast_head_json.og_type}
              />
              <meta
                property="og:title"
                content={post[0].yoast_head_json.og_title}
              />
              <meta
                property="og:description"
                content={post[0].yoast_head_json.og_description}
              />
              <meta
                property="og:url"
                content={post[0].yoast_head_json.og_url}
              />
              <meta
                property="og:site_name"
                content={post[0].yoast_head_json.og_site_name}
              />
              <meta
                property="og:image"
                content={post[0].yoast_head_json.og_image[0].url}
              />
              <meta
                property="og:image:width"
                content={post[0].yoast_head_json.og_image[0].width}
              />
              <meta
                property="og:image:height"
                content={post[0].yoast_head_json.og_image[0].height}
              />
              <meta
                name="twitter:card"
                content={post[0].yoast_head_json.twitter_card}
              />
              <meta
                name="twitter:title"
                content={post[0].yoast_head_json.title}
              />

              <meta
                name="twitter:description"
                content={post[0].yoast_head_json.twitter_description}
              />
              <meta
                name="twitter:image"
                content={post[0].yoast_head_json.twitter_image}
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <article className="container max-w-screen-lg mx-auto mb-8">
              {console.log(post)}
              <div className="px-4 flex flex-col justify-between flex-wrap post">
                <div className="post__img">
                  <Image
                    src={post[0]._embedded['wp:featuredmedia']['0'].source_url}
                    layout="fill"
                    alt={`${post[0].title.rendered}`}
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="post__date">
                    <Icon icon="fontisto:date" color="#222" />
                    {new Date(post[0].date).toLocaleDateString('pt-BR')}
                  </span>
                  {post[0]._embedded['author']['0'].name ? (
                    <h3 className="post__author">
                      <Icon icon="bxs:user" color="#222" />
                      {post[0]._embedded['author']['0'].name}
                    </h3>
                  ) : (
                    <></>
                  )}
                </div>

                <h1
                  className="post__title"
                  dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}
                ></h1>

                <h2
                  className="post__subtitle"
                  dangerouslySetInnerHTML={{ __html: post[0].excerpt.rendered }}
                ></h2>

                <div
                  className="post__content"
                  dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
                ></div>
              </div>
            </article>
          </>
        ) : (
          <div className="overlayLoading">
            <Icon icon="eos-icons:bubble-loading" color="white" />
          </div>
        )
      ) : (
        <>
          <h3>Publicação não encontrada :(</h3>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </>
      )}
    </>
  )
}
