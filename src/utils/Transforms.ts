/* 
* Este módulo converte a resposta da API do WordPress em uma estrutura simplificada

*/

type Author = {
  name: string;
  avatar_urls: { [key: string]: string };
};

type FeaturedMedia = {
  media_details: {
    sizes: {
      medium_large?: { source_url: string };
      large?: { source_url: string };
    };
  };
};

type Term = {
  name: string;
};

type YoastHeadJson = {
  twitter_misc: { "Est. tempo de leitura": string | null };
};

type Article = {
  id: number | null;
  date: string | null;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded: {
    author: Author[];
    "wp:featuredmedia": FeaturedMedia[];
    "wp:term": Term[][];
  };
  yoast_head_json: YoastHeadJson;
};

export function ArticleTransform(article: Article) {
  return {
    id: article.id ?? 0,
    createdAt: article.date ?? "",
    slug: article.slug ?? "",
    title: article.title?.rendered ?? "",
    content: article.content?.rendered ?? "",
    excerpt:
      article.excerpt?.rendered?.replace("<p>", "").replace("</p>", "") ?? "",
    author: article._embedded?.author?.[0]?.name ?? "Equipe",
    authorAvatar: article._embedded?.author?.[0]?.avatar_urls?.["96"] ?? "",
    icon:
      article._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes
        ?.medium_large?.source_url ?? "noimage_card.webp",
    image:
      article._embedded["wp:featuredmedia"]?.[0].media_details?.sizes?.large
        ?.source_url ?? "noimage.webp",
    readTime:
      article.yoast_head_json.twitter_misc["Est. tempo de leitura"] ?? "",
    category: article._embedded["wp:term"]?.[0][0]?.name ?? "",
  };
}
