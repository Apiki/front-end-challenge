import axios from 'axios';
import { WordPressPost, ApiResponse } from '../types';

const API_BASE_URL = 'https://blog.apiki.com/wp-json/wp/v2';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getPosts = async (page: number = 1): Promise<ApiResponse> => {
  try {
    const response = await api.get<WordPressPost[]>(`/posts?_embed&categories=518&page=${page}`);
    
    const totalPosts = parseInt(response.headers['x-wp-total'] || '0');
    const totalPages = parseInt(response.headers['x-wp-totalpages'] || '0');
    
    return {
      posts: response.data,
      totalPosts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getPostBySlug = async (slug: string): Promise<WordPressPost> => {
  try {
    const response = await api.get<WordPressPost[]>(`/posts?_embed&slug=${slug}`);
    
    if (response.data.length === 0) {
      throw new Error('Post not found');
    }
    
    return response.data[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}; 