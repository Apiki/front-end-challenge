import axios from 'axios';
import { useEffect } from 'react';


const url_art = axios.create({
    baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=",
  });

  export default url_art;


