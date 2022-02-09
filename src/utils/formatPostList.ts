import { PostsResponseData } from "@/shared/types/postsResponse";

import { formatPostAuthor } from "./formatPostAuthor";
import { formatPostImage } from "./formatPostImage";

export function formatPostList(posts: PostsResponseData) {
  const formattedPosts = posts.map((post) => {
    const author = formatPostAuthor(post._embedded.author[0]);
    const image = formatPostImage(post._embedded["wp:featuredmedia"]?.[0]);

    return {
      id: post.id,
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.yoast_head_json.description,
      image,
      author,
    };
  });

  return formattedPosts;
}
