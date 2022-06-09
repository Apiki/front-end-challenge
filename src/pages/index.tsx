import Head from "next/head";
import axios from "axios";

import Home, { HomeTemplateProps } from "../templates/Home";

export default function Index(props: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Blog | Apiki</title>
      </Head>
      <Home {...props} />
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await axios.get(
    `${process.env.WORDPRESS_API_URL}/posts?_embed&categories=518`
  );
  const posts = data.data.map((item: any) => ({
    img: item._embedded["wp:featuredmedia"][0].yoast_head_json.og_url,
    title: item.title.rendered,
    date: item.date,
    slug: item.slug,
    excerpt: item.excerpt.rendered,
    category: item._embedded["wp:term"][0][0].name,
  }));
  console.log(posts);

  const total = parseInt(data.headers["x-wp-totalpages"]);
  return {
    props: {
      posts: posts,
      total: total,
    },
  };
};
