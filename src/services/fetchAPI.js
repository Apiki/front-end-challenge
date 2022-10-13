import axios from 'axios';

export const requestPosts = async (page) => {
  const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518'

  const { data, headers } = await axios.get(`${url}&page=${page}`).catch((error) => {
    return error.response;
  });

  return { data, totalPages: headers["x-wp-totalpages"] };
};

export const requestPostInfo = async (slug) => {
  const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed"
  const { data } = await axios.get(`${url}&slug=${slug}`).catch((error) => {
    return error.response;
  });

  return data;
};