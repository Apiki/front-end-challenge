import { FeaturedMedia } from "@/shared/types/postsResponse";

export function formatPostImage(featuredImage?: FeaturedMedia) {
  return {
    src: featuredImage?.source_url ?? "/placeholder.png",
    alt: featuredImage?.alt_text ?? "",
  };
}
