import { Post } from "@/shared/types/postsResponse";

import { formatPostAuthor } from "./formatPostAuthor";
import { formatPostImage } from "./formatPostImage";

export function formatPost(post: Post) {
  const author = formatPostAuthor(post._embedded.author[0]);
  const image = formatPostImage(post._embedded["wp:featuredmedia"]?.[0]);

  return {
    title: post.title.rendered,
    excerpt: post.yoast_head_json.description,
    content: post.content.rendered,
    pageHead: post.yoast_head,
    image,
    author,
  };
}
