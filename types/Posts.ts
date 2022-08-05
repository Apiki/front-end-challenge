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
  posts: [
    {
      title: string;
      link: string;
      slug: string;
      image: string;
      imageWidth: number;
      imageHeight: number;
      excerpt: string;
    }
  ];
  totalPages: number;
};

export type PostsResponse = {
  data: Posts;
  headers: AxiosRequestHeaders;
};

export default Posts;
