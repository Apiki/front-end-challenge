import axios, { AxiosRequestConfig } from "axios";
import { PostsResponse } from "../types/Posts";

export const fetchPosts = async (url: string, options: AxiosRequestConfig) => {
  const { data: postsData, headers }: PostsResponse = await axios.get(
    url,
    options
  );

  const posts = postsData.map((post) => {
    return {
      title: post?.title?.rendered ?? "",
      link: post?.link ?? "",
      slug: post?.slug ?? "",
      content: post?.content?.rendered ?? "",
      date: post?.date ?? "",
      authorName: post?._embedded?.author?.[0]?.name ?? "",
      authorDescription: post?._embedded?.author?.[0]?.description ?? "",
      avatar: post?._embedded?.author?.[0]?.avatar_urls?.["96"] ?? "",
      authorLink: post?._embedded?.author?.[0]?.link ?? "",
      imageURL: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
      imageWidth:
        post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.width ?? null,
      imageHeight:
        post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.height ?? null,
      alt: post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? "",
      excerpt: post?.excerpt?.rendered ?? "",
      yoast_head: post?.yoast_head ?? "",
    };
  });

  return {
    posts,
    headers
  }
};
