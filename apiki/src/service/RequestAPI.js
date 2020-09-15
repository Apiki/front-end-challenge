import axios from "axios";

const RequestAPI = async (url, page) => {
  const response = await axios.get(`${url}${page}`);
  return response;
};

export default RequestAPI;
