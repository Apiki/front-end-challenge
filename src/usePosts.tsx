import { BlogResponse } from "./types/BlogResponse";
import { Card } from "./types/Card";
import { CardNamed } from "./types/CardNamed";

const handleBlogPosts = async (page: number = 1): Promise<BlogResponse> => {
  const URL = process.env.NEXT_PUBLIC_URL ?? "";
  const response = await fetch(`${URL}&page=${page}`, {
    next: { revalidate: 86400 }
  });
  const data: Card[] = await response.json();

  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");

  return {
    posts: data,
    totalPages,
    totalPosts,
  };
};

const mapPostToBlogPost = (
  post: Card,
  isSinglePost: boolean = false
): CardNamed => {
  const formatDate = (dateString?: Date) => {
    if (!dateString) return undefined;
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return {
    id: post.id,
    imagem: post._embedded["wp:featuredmedia"][0].source_url,
    alt: post._embedded["wp:featuredmedia"][0].alt_text,
    width: post._embedded["wp:featuredmedia"][0].media_details.width,
    height: post._embedded["wp:featuredmedia"][0].media_details.height,
    titulo: post.title.rendered,
    link: post.link,
    data: formatDate(post.date) ?? "",
    ...(isSinglePost ? { 
      content: post.content?.rendered,
      excerpt: post.excerpt?.rendered 
    } : {}),
  };
};

export { handleBlogPosts, mapPostToBlogPost };
