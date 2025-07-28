const API_BASE_URL = "https://blog.apiki.com/wp-json/wp/v2";
const DEVELOPMENT_CATEGORY_ID = 518;

export async function fetchPosts(page = 1) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?_embed&categories=${DEVELOPMENT_CATEGORY_ID}&page=${page}&per_page=10`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");
    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");

    return {
      posts,
      totalPosts,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_embed&slug=${slug}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    if (posts.length === 0) {
      return null;
    }

    return posts[0];
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}
