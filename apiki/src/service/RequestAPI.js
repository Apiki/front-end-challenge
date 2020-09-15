import axios from "axios";

const RequestAPI = async (url, page) => {
  const response = await axios.get(`${url}${page}`);
  return response;
};

export const RequestNumberOfPages = async (numberPages) => {
  const pages = axios
    .get(numberPages)
    .then((response) => response.headers["x-wp-totalpages"]);
  return pages;
};

export default RequestAPI;
