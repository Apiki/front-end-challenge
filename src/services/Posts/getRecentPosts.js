import ApiClient from "../../config/axios";

export default function getRecentPosts(currentPage) {
  const page = currentPage ? `&page=${currentPage}` : "";

  return ApiClient.get(`/posts?_embed&categories=518${page}`).then(
    (response) => {
      const totalPages = response.headers["x-wp-totalpages"];
      const { data } = response;
      return { data, totalPages };
    }
  );
}
