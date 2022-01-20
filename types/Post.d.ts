import { Category } from './Category';
import { Tag } from './Tag';

export type PostsPage = {
  posts: Post[],
  totalPages: number,
  children?: ReactNode
}

export type PostPage = {
  post: Post
  error: boolean
}

export type Post = {
  id: string,
  _embedded: {
    'wp:featuredmedia': [{
      source_url: string;
    }],
    'wp:term': [[Category], [Tag]],
    author: [Author]
  },
  date: string
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
}