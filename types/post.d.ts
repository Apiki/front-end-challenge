import { Author } from './author'

export interface IPost {
  id: number
  content: string
  resume?: string
  title: string
  author: Author
  slug: string
  author: Author
  createdAt: Date
  image: string
}

export interface IPostsList {
  posts: Post[]
}
