import axios from 'axios';

/* criando nova instância do axios para facilitar
criação de função de request a API */
const api = axios.create({
  baseURL: 'https://blog.apiki.com/wp-json/wp/v2/',
  headers: { Accept: 'application/json' },
});

// Função para obtenção de post por página
const fetchBlogPosts = async (page = 1) => {
  try {
    const response = await api.get(
      encodeURI(`/posts?_embed&categories=518&page=${page}`),
    );
    const { data, headers } = response;

    return { data, headers };
  } catch (error) {
    return error;
  }
};

// Função para obtenção de post especifíco
const fetchBlogPost = async (slug) => {
  try {
    const response = await api.get(`posts?_embed&slug=${slug}`);
    const { data } = response;

    return data;
  } catch (error) {
    return error;
  }
};

export { fetchBlogPosts, fetchBlogPost };
