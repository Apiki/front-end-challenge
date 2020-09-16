/**
 * Serialize the api data to remove unused information.
 * @param payload - individual api post.
 */
function apiData(post) {
  const { slug, title, content, _embedded } = post;
  const { medium } = _embedded['wp:featuredmedia'][0].media_details.sizes;

  return {
    author: _embedded.author,
    content: content.rendered,
    title: title.rendered,
    slug,
    medium,
  };
}

export default { apiData };
