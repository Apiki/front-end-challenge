import axios from 'axios';


export const requestPosts = async (page) => {
  const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518'

  if (page === 1) {
    const { data } = await axios.get(`${url}`).catch((error) => {
      return error.response
    });
    return data;
  }

  const { data } = await axios.get(`${url}&page=${page}`).catch((error) => {
    return error.response
  });

  return data
};


export const requestPostInfo = async (slug) => {
  const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed"
  const { data } = await axios.get(`${url}&slug=${slug}`).catch((error) => {
    return error.response
  });

  return data
};