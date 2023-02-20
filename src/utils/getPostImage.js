export const getPostCoverImage = (post) => {
  const sizes = post._embedded['wp:featuredmedia'][0].media_details.sizes
  const image = sizes.full.source_url;

  return image;
}