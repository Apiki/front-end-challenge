const getPosts = async () => {
  try {
    const endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  getPosts,
}
