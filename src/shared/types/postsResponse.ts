export type Author = {
  name: string;
  yoast_head_json: {
    og_image: Array<{ url: string }>;
  };
};

export type FeaturedMedia = {
  source_url: string;
  alt_text: string;
};

export type Post = {
  id: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head: string;
  yoast_head_json: { description: string };
  _embedded: {
    author: Author[];
    "wp:featuredmedia"?: FeaturedMedia[];
  };
};

export type PostsResponseData = Post[];
