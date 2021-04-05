async function fetchPosts(pagina) {
  let url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
  if (pagina > 0) {
    url =
      "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" +
      pagina;
  }
  const response = await fetch(url);
  const responseJson = await response.json();
  const data = responseJson;
  return data;
}

async function getHeaders() {
  const url =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
  let wpTotalPages;
  await fetch(url).then((response) => {
    for (const pair of response.headers.entries()) {
      if (pair[0] === "x-wp-totalpages") {
        wpTotalPages = pair[1];
      }
    }
  });
  return parseInt(wpTotalPages);
}

async function getPost(slug) {
  const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + slug;
  const response = await fetch(url);
  const responseJson = await response.json();
  const data = responseJson;
  return data;
}

export { fetchPosts, getHeaders, getPost };
