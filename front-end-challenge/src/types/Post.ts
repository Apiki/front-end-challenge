export interface Embedded {
  "wp:featuredmedia": Array<{
    source_url: string;
    slug: string;
    title: { rendered: string };
    media_details?: { sizes: { full: { source_url: string } } };
  }>;
}

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: Embedded;
}

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  mediaUrl?: string;
  mediaSrcSet?: string;
  mediaSizes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  embedded?: any;
}

export interface Page {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}
