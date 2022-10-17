/* eslint-disable @next/next/no-img-element */
import parse from 'html-react-parser';
import Head from 'next/head';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { requestPostInfo } from '../../services/fetchAPI';
import { Article, AuthorDetail, Details, PostDetail } from '../../styles/Blogstyle';

export default function Blog({ post, authorInfo }) {
  const title = post.title.rendered
  const description = post['yoast_head_json'].description;
  return (
    <PostDetail>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta
          property='og:description'
          content={description}
        />
        <link rel='icon' href='https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/favicon-apiki-magenta-75x75.png' />
      </Head>
      <Header />
      {
        post &&
        <Article>
          <h1>{post.title.rendered}</h1>
          <span>{post['yoast_head_json'].description}</span>
          <Details>
            <p>{`Por: ${post['_embedded'].author[0].name
              ? post['_embedded'].author[0].name
              : 'Desconhecido'}`}
            </p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <p>{`Leitura: ${post['yoast_head_json']['twitter_misc']['Est. tempo de leitura']}`}</p>
          </Details>

          <img
            src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
            alt={post.title.rendered}
          />
          {parse(post.content.rendered)}

          <AuthorDetail>
            {authorInfo.image?.url
              ? <img src={authorInfo.image?.url} alt={post['_embedded'].author[0].name} />
              : <FaUserCircle />
            }

            <div>
              <p>{authorInfo.name}</p>
              <span>{authorInfo.description}</span>
            </div>
          </AuthorDetail>
        </Article>
      }
      <Footer />
    </PostDetail>
  )
}

export const getServerSideProps = async (context) => {
  const [post] = await requestPostInfo(context.params.slug);
  const authorInfo = post['yoast_head_json'].schema['@graph'].slice(-1)[0]

  return {
    props: {
      post,
      authorInfo
    },
  };
};