import ApiClient from "../../config/axios";

export default function getRecentPosts() {
  return ApiClient.get("/posts?_embed&categories=518").then((response) => {
    return response.data;
  });
}
