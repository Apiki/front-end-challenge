/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import SingleBlog, { SingleBlogTemplateProps } from "templates/SingleBlog";

export default function Index(props: SingleBlogTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <SingleBlog {...props} />
    </>
  );
}

export async function getStaticPaths() {
  console.log(`${process.env.WORDPRESS_API_URL}posts?per_page=200`);
  const blog = await axios.get(
    `${process.env.WORDPRESS_API_URL}/posts?per_page=100`
  );

  const articles: any[] = [];
  blog.data.map((article: { slug: any }) => articles.push(article.slug));

  const paths = articles.map((item) => ({
    params: {
      slug: item,
    },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let url_image = "";
  const response = await axios.get(
    `${process.env.WORDPRESS_API_URL}/posts?_embed&slug=${params.slug}`
  );
  if (response.data[0].yoast_head_json.og_image !== undefined) {
    url_image = response.data[0].yoast_head_json.og_image[0].url;
  } else {
    url_image = null;
  }
  return {
    props: {
      slug: params?.slug,
      image: url_image,
      category: response.data[0]._embedded["wp:term"][0][0].name,
      title: response.data[0].title.rendered,
      content: response.data[0].content.rendered,
      date: response.data[0].date,
    },
  };
};
