import axios from "axios";
import { Post } from "./types/post";

export async function getPosts(page = 1) {
  const response = await axios.get(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
  );
  return { posts: response.data as Post[], headers: response.headers };
}

export async function getPost(slug: string): Promise<Post> {
  const response = await axios.get(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  return response.data[0];
}
