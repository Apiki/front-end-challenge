const BASE_URL = "https://blog.apiki.com/wp-json/wp/v2";
const BASE_CATEGORY = "/posts?_embed&categories=518";

export async function getPosts(page = 1) {
  const postsRes = await fetch(BASE_URL + BASE_CATEGORY + `&page=${page}`);
  const posts = await postsRes.json();
  const totalPages = postsRes.headers["x-wp-totalpages"];

  return { posts, totalPages };
}

export async function getSinglePosts() {
  const postsSingleRes = await fetch(BASE_URL + BASE_CATEGORY);
  const postsSingle = await postsSingleRes.json();

  return postsSingle;
}

export async function getPost(slug) {
  const posts = await getSinglePosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getSinglePosts();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
