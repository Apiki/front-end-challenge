import ApiClient from "../../config/axios";

export default function getPost(slug) {
  return ApiClient.get(`/posts?_embed&slug=${slug}`).then((response) => {
    return response.data;
  });
}
