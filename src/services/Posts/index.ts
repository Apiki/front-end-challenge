import axios from "axios";

import { baseURL } from "~/configs/request/Variables";

const getAllPosts = async (page?: number) => {
    return axios.get(`${baseURL}&categories=518${page ? `&page=${page}` : ""}`);
};

const getAllAuthorPosts = async (author: number, page?: number) => {
    return axios.get(
        `${baseURL}&categories=518&author=${author}${
            page ? `&page=${page}` : ""
        }`
    );
};

const getPost = async (slug: string) => {
    return axios.get(`${baseURL}&slug=${slug}`);
};

export { getAllPosts, getAllAuthorPosts, getPost };
