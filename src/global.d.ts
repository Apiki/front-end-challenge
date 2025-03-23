// global.d.ts

export interface ArticleCardType {
  id: number;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: string;
  author: string;
  authorAvatar: string;
  readTime: string;
}

export interface ArticleType extends ArticleCardType {
  content: string;
  image: string;
}
