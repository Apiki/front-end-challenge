import { AxiosRequestHeaders } from "axios";
import {ParsedUrlQuery} from "querystring";

type Posts = Post[];

export type Post = {
  slug: string;
  link: string;
  date: string;
  yoast_head: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    author: [
      {
        name: string;
        description: string;
        link: string;
        avatar_urls: {
          24: string;
          48: string;
          96: string;
        };
      }
    ];
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
  page: number;
};

export type PostState = {
  title: string;
  link: string;
  slug: string;
  authorName: string;
  authorDescription: string;
  authorLink: string;
  avatar: string;
  date: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  excerpt: string;
  content: string;
  yoast_head: string;
};

export type PostsResponse = {
  data: Posts;
  headers: AxiosRequestHeaders;
};

export type SinglePostProps = {
  title: string;
  link: string;
  slug: string;
  content: string;
  date: string;
  authorName: string;
  authorDescription: string;
  avatar: string;
  authorLink: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  excerpt: string;
  yoast_head: string;
};

export interface SinglePostParams extends ParsedUrlQuery {
  slug: string;
}

export default Posts;
