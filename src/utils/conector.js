import axios from 'axios';

const conector = axios.create({
  baseURL: 'https://blog.apiki.com/wp-json/wp/v2',
});

export default conector;
