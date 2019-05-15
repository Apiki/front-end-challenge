import axios from 'axios';

var api = axios.create({ baseURL: 'https://blog.apiki.com/' });

export default class BlogApi {
  constructor() {
    this.totalPages = 0;
  }

  static async getPosts(page) {
    const response = await api.get(`wp-json/wp/v2/posts?_embed&posts?_embed&categories=518&page=${page}`);
    let posts = response.data;
    this.totalPages = response.headers['x-wp-totalpages'];
    
    console.log(this.totalPages, posts);
    
    return posts.map((post) => {
      return {
        id: post.id,
        author: post._embedded.author[0].name,
        link: post.slug,
        comment_status: post.comment_status,
        html: post.content.rendered,
        titulo: post.title.rendered,
        excerpt: post.excerpt.rendered,
        image_post: post._embedded["wp:featuredmedia"][0],
      }
    });
  }

  static async getPost(postSlug) {
    const response = await api.get(`wp-json/wp/v2/posts?_embed&slug=${postSlug}`);
    let post = response.data[0];
    console.log(post);

    return {
      author: post.author,
      image_post: post._embedded["wp:featuredmedia"][0],
      html: post.content.rendered,
      title: post.title.rendered,

    };
  }

  static getLastPage(){
    return this.totalPages;
  }
}