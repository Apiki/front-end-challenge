import { AxiosRequestHeaders } from "axios";

type Posts = Post[];

export type Post = {
  slug: string;
  link: string;
  yoast_head: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
        alt_text: string;
        media_type: string;
        media_details: {
          width: number;
          height: number;
        };
      }
    ];
  };
};

export type PostsProps = {
  posts: PostState[];
  totalPages: number;
};

export type PostState = {
      title: string;
      link: string;
      slug: string;
      imageURL: string;
      imageWidth: number;
      imageHeight: number;
      alt: string;
      excerpt: string;
};

export type PostsResponse = {
  data: Posts;
  headers: AxiosRequestHeaders;
};

export default Posts;
