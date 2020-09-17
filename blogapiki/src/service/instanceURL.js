import axios from 'axios';

const instanceURL = axios.create({
  baseURL: 'https://blog.apiki.com/wp-json/wp/v2/'
});

export default instanceURL;
