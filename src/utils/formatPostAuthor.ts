import { Author } from "@/shared/types/postsResponse";

export function formatPostAuthor(postAuthor: Author) {
  if (!postAuthor.name) return null;

  return {
    name: postAuthor.name,
    image: {
      src: postAuthor.yoast_head_json.og_image[0].url,
      alt: `Foto de ${postAuthor.name}`,
    },
  };
}
