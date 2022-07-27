import axios from "axios";

export const api = {
    get: (endpoint) => {
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}${endpoint}`).then(res=>res);
    }
}