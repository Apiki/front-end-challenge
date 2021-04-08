import axios from 'axios';

class BlogService {
  constructor() {
    const url = 'https://blog.apiki.com/wp-json/wp/v2';
    const timeout = 30000;

    this.http = axios.create({
      baseURL: url,
      timeout,
    });

    // Define the  handlers to treat errors and success
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    throw error;
  }

  /** Get all blogs by page*/
  async getBlogsByPage(page) {
    return this.http.get(`/posts?_embed&categories=518&page=${page}`);
  }

  /** Get one post by slug*/
  async getPostBySlug(slug) {
    return this.http.get(`/posts?_embed&slug=${slug}`);
  }
}

export default new BlogService();
