import axios from 'axios';

const endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&';

const axiosData = async (str) => {
  const requestAPI = `${endpoint}${str}`;
  const { data, headers } = await axios.get(requestAPI);
  const numPages = headers['x-wp-totalpages'];
  const numPosts = headers['x-wp-total'];
  return {
    data,
    numPages,
    numPosts,
  };
};

export default axiosData;
