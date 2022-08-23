import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://blog.apiki.com/wp-json/wp/v2',
    headers: {
        'Content-Type':'application/json'
    },
});