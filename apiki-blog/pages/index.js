import React, { useState } from "react";
import Head from "next/head";
import { getPosts } from "../utils/wordpress";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

export default function useGetPosts({ posts, error }) {
  const [postList, setPostList] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const jsxPosts = postList.map((post) => {
    const featuredMedia = post["_embedded"]?.["wp:featuredmedia"]?.[0];

    if (error) return <h1>Something went wrong!</h1>;

    if (!posts) return <h1>Loading...</h1>;

    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Apiki Blog</title>
        <meta
          name="description"
          content="Desafio - Front-end Developer
"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 sm:py-4 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Desenvolvimento
          </h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6 auto-rows-[minmax(0,_2fr)]">
            {jsxPosts}
          </div>

          <div className="py-5 flex justify-center">
            <button
              className="flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={async () => {
                getPosts(currentPage + 1).then((res) => {
                  if (res.data?.status) {
                    return console.log("error");
                  }
                  setPostList((prev) => [...prev, ...res.posts]);
                  setCurrentPage(currentPage + 1);
                });
              }}
            >
              Carregar posts
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const postsData = await getPosts();

  return {
    props: {
      posts: postsData.posts
    },
    revalidate: 10 // In seconds
  };
}
