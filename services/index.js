import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API
});

export const api = {
    get: (endpoint) => {
        return instance.get(endpoint).then(res=>res);
    }
}