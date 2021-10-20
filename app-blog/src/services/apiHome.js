const getPosts = async (page) => {
  try {
    let endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
    if (page) {
      endpoint = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`;
    }

    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

const detailsPost = async (slug) => {
  try {
    const endpoint = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  getPosts,
  detailsPost,
}
