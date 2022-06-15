export const API_URL = "https://blog.apiki.com/wp-json/wp/v2";

export function POSTS_GET(pageNumber) {
	return {
		url: `${API_URL}/posts?_embed&categories=518&page=${pageNumber}`,
		options: {
			method: "GET",
		},
	};
}

export function POST_GET(slug) {
	return {
		url: `${API_URL}/posts?_embed&slug=${slug}`,
		options: {
			method: "GET",
		},
	};
}
