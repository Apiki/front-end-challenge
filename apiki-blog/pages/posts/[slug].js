import Head from "next/head";

import Link from 'next/link';
import Image from "next/image";

import Header from "../../components/Header"
import Footer from "../../components/Footer";

import { getPost, getSlugs } from '../../utils/wordpress';

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.yoast_head_json.og_title}</title>
        <meta name="title" content={post.yoast_head_json.og_title}></meta>
        <meta
          name="description"
          content={post.yoast_head_json.description}
        />
        <link rel="canonical" href={post.yoast_head_json.canonical} />
        <meta name="robots" content={post.yoast_head_json.robots} />

        <meta property="og:locale" content={post.yoast_head_json.og_locale} />
        <meta property="og:type" content={post.yoast_head_json.og_type} />
        <meta property="og:title" content={post.yoast_head_json.og_title} />
        <meta property="og:description" content={post.yoast_head_json.og_description} />
        <meta property="og:image" content={post.yoast_head_json.og_image[0].url} />
        <meta property="og:url" content={post.yoast_head_json.og_url} />
        <meta property="og:site_name" content={post.yoast_head_json.og_site_name} />

        <meta name="twitter:title" content={post.yoast_head_json.title} />
        <meta name="twitter:description" content={post.yoast_head_json.twitter_description} />
        <meta name="twitter:image" content={post.yoast_head_json.twitter_image} />
        <meta name="twitter:site" content={post.yoast_head_json.twitter_site} />
        <meta name="twitter:creator" content={post.yoast_head_json.twitter_creator} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-2xl mt-8 mx-auto py-8 sm:py-4 lg:py-0 lg:max-w-none  bg-white rounded-md">
          <div className="mx-auto	mb-8">
            <Image
              src={post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}
              width={post._embedded['wp:featuredmedia'][0].media_details.width}
              height={post._embedded['wp:featuredmedia'][0].media_details.height}
              alt={post._embedded['wp:featuredmedia'][0].media_details.alt_text}

            />
          </div>
          <div className=" space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-12 auto-rows-[minmax(0,_1fr)]">
            <h1 className="text-center pb-12 text-4xl font-extrabold text-gray-900">{post.title.rendered}</h1>
          </div>

          <div className="container">
            <div
              className="card-text mx-auto prose lg:prose-md leading-snug break-normal max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>

          </div>
        </div>
        <Link href="/">
          <a className="flex justify-center py-2 px-4 mt-4 mb-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Voltar</a>
        </Link>
      </div>
      <Footer />
    </>
  );

}

export async function getStaticPaths() {
  const paths = await getSlugs('posts');

  return {
    paths,

    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}