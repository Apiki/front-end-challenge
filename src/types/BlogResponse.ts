import { Card } from "./Card";

export interface BlogResponse {
  posts: Card[];
  totalPages: number;
  totalPosts: number;
}