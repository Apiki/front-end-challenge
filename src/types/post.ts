import { WP_REST_API_Post } from "wp-types";

type FeaturedMedia = {
  source_url: string;
  slug: string;
};

type Author = {
  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
  name: string;
};

export interface Post extends WP_REST_API_Post {
  title: { rendered: string };
  date: string;
  _embedded: { "wp:featuredmedia": FeaturedMedia[]; author: Author[] };
}
